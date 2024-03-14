import basicBlocs from 'grapesjs-blocks-basic'
import tailwindCss from 'grapesjs-tailwind'
import { Plugin } from '@silexlabs/silex-plugins'
import {ClientConfig} from "@silexlabs/silex/src/ts/client/config";
import {SilexExtraBlocPluginOptions} from "./interface";
import blocks from "./blocks";

export default function (config : ClientConfig, options: SilexExtraBlocPluginOptions) {
  console.log('plugin init client ...', { config, options })

  console.log('init basic blocs ...', { config, options })
  config.grapesJsConfig.plugins.push(basicBlocs)

  console.log('init tailwind', {config, options})
  config.grapesJsConfig.plugins.push(tailwindCss)

  console.log('inject tailwind cdn from plugin scripts client.ts ->', config.grapesJsConfig)
  config.grapesJsConfig = {
    ...config.grapesJsConfig,
    canvas: {
      scripts: ['https://cdn.tailwindcss.com'],
    }
  }
  console.log(config.grapesJsConfig)

  console.log('passing label check : ' + options.label)
  config.addPlugin([
    blocks as Plugin
  ], options)

  return config
}
