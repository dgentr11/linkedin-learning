import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {pageBuilderType} from './pageBuilderType'
import {pageType} from './pageTypes'
import {heroType} from './blocks/heroType'
import {splitImageType} from './blocks/splitImageType'
import {featuresType} from './blocks/featuresType'
import {faqsType} from './blocks/faqsType'
import {faqType} from './blocks/faqType'
import {siteSettingsType} from './siteSettingsType'
import {seoType} from './seoType'
import {redirectType} from './redirectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    pageBuilderType,
    pageType,
    heroType,
    splitImageType,
    featuresType,
    faqsType,
    faqType,
    siteSettingsType,
    seoType,
    redirectType
  ],
}
