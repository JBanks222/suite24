import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {homepage} from './singletons/homepage'
import {
  credentialItem,
  serviceItem,
  socialLink,
  testimonialItem,
  transformationItem,
} from './objects/homepageObjects'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import button from './objects/button'
import {blockContentTextOnly} from './objects/blockContentTextOnly'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/studio/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  homepage,
  // Documents
  page,
  post,
  person,
  // Objects
  button,
  blockContent,
  blockContentTextOnly,
  infoSection,
  callToAction,
  link,
  serviceItem,
  credentialItem,
  testimonialItem,
  transformationItem,
  socialLink,
]
