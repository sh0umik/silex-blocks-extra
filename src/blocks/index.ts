import {ClientConfig} from '@silexlabs/silex/src/ts/client/config'
import {PluginOptions} from './interface'
import loadFlexBlocks from './flexbox'

export interface BlockExtraOptions {
  label?: string;
}
export default function (config : ClientConfig, option: BlockExtraOptions) {
  config.on('silex:grapesjs:end', () => {
    const editor = config.getEditor()
    const options: Required<PluginOptions> = {
      flexboxBlock: {},
      stylePrefix: '',
      labelRow: 'Row',
      labelColumn: 'Column',
      ...option,
    }
    loadFlexBlocks(editor, options)
  })
}
