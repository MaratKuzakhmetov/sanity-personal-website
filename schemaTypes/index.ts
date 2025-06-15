import globalSettings from './globalSettings'
import mainPage from './mainPage'
import {contentBlockType} from './contentBlockType'

export const schemaTypes = [
  globalSettings,
  mainPage,
  contentBlockType('En'),
  contentBlockType('Ru'),
  contentBlockType('De'),
]
