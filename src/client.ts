import blocksFlexbox from 'grapesjs-blocks-flexbox'
import basicBloc from 'grapesjs-blocks-basic'
//import {ClientConfig} from '@silexlabs/silex/dist/client/client'
export default function (config) {
  console.log('plugin init ...', { config })
  config.grapesJsConfig.plugins.push(blocksFlexbox)
  console.log('flex bloc loaded')
  config.grapesJsConfig.plugins.push(basicBloc)
  console.log('basic bloc loaded')
}
