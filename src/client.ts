import blocksFlexbox from 'grapesjs-blocks-flexbox';
import basicBloc from 'grapesjs-blocks-basic';
//import {ClientConfig} from '@silexlabs/silex/dist/client/client';
export default function (config, options) {
  console.log('server.ts', { config, options });
  config.grapesJsConfig.plugins.push(blocksFlexbox);
  config.grapesJsConfig.plugins.push(basicBloc);
}
