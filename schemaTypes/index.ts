import globalSettings from './globalSettings'
import mainSettings from './mainSettings'
import {contentBlockType} from './contentBlockType'

export const schemaTypes = [
  globalSettings,
  mainSettings,
  contentBlockType('En'),
  contentBlockType('Ru'),
  contentBlockType('De'),
]
