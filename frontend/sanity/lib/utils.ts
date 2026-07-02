import {Link} from '@/sanity.types'
import {dataset, projectId, studioUrl} from '@/sanity/lib/api'
import {createDataAttribute, CreateDataAttributeProps} from 'next-sanity'
import {stegaClean} from '@sanity/client/stega'
import {createImageUrlBuilder, type SanityImageSource} from '@sanity/image-url'
import {DereferencedLink} from '@/sanity/lib/types'

const builder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

// Create an image URL builder using the client
// Export a function that can be used to get image URLs
function urlForImage(source: SanityImageSource) {
  return builder.image(source)
}

export function resolveOpenGraphImage(
  image?: SanityImageSource | null,
  width = 1200,
  height = 627,
) {
  if (!image) return
  const url = urlForImage(image)?.width(1200).height(627).fit('crop').url()
  if (!url) return
  return {url, alt: (image as {alt?: string})?.alt || '', width, height}
}

export function getImageUrl(
  image?: SanityImageSource | null,
  width = 1200,
  height?: number,
) {
  if (!image) return null
  let builder = urlForImage(image).width(width)
  if (height) builder = builder.height(height).fit('crop')
  return builder.url() ?? null
}

// Depending on the type of link, we need to fetch the corresponding page, post, or URL.  Otherwise return null.
export function linkResolver(link: Link | DereferencedLink | undefined) {
  if (!link) return null

  // If linkType is not set but href is, lets set linkType to "href".  This comes into play when pasting links into the portable text editor because a link type is not assumed.
  let linkType = stegaClean(link.linkType)
  const href = stegaClean(link.href)
  const page = stegaClean(link.page)
  const post = stegaClean(link.post)

  if (!linkType && href) {
    linkType = 'href'
  }

  switch (linkType) {
    case 'href':
      return href || null
    case 'page':
      if (page && typeof page === 'string') {
        return `/${page}`
      }
    case 'post':
      if (post && typeof post === 'string') {
        return `/posts/${post}`
      }
    default:
      return null
  }
}

type DataAttributeConfig = CreateDataAttributeProps &
  Required<Pick<CreateDataAttributeProps, 'id' | 'type' | 'path'>>

export function dataAttr(config: DataAttributeConfig) {
  return createDataAttribute({
    projectId,
    dataset,
    baseUrl: studioUrl,
  }).combine(config)
}
