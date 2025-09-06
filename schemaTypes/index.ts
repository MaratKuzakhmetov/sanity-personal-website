import globalSettings from './globalSettings'
import mainPage from './mainPage'
import {contentBlockType} from './contentBlockType'
import blockContent from '../schemas/objects/blockContent'

export const schemaTypes = [
  globalSettings,
  blockContent,
  mainPage,
  contentBlockType('En'),
  contentBlockType('Ru'),
  contentBlockType('De'),
]
