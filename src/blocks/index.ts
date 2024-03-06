import {ClientConfig} from '@silexlabs/silex/src/ts/client/config'
import {PluginOptions} from '../interface'
import loadFlexBlocks from './flexbox'

export default function (config : ClientConfig, options: PluginOptions) {
  config.on('silex:grapesjs:end', () => {
    const editor = config.getEditor()
    const _options: PluginOptions = {
      flexboxBlock: {},
      stylePrefix: '',
      labelRow: 'Row',
      labelColumn: 'Column',
      ...options,
    }
    loadFlexBlocks(editor, _options)

    // Load Test Bloc
    console.log('loading test bloc h1')
    const blockManager = editor.Blocks
    blockManager.add('h1-block', {
      label: 'Heading',
      content: '<h1>Put your title here</h1>',
      category: 'ATest',
      attributes: {
        title: 'Insert h1 block'
      }
    })
  })
}
