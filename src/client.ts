import basicBlocs from 'grapesjs-blocks-basic'
import { Plugin } from '@silexlabs/silex-plugins'
import {ClientConfig} from "@silexlabs/silex/src/ts/client/config";
import {PluginOptions} from "./interface";
import blocks from "./blocks";

export default function (config : ClientConfig, options: PluginOptions) {
  console.log('plugin init client ...', { config, options })

  console.log('init basic blocs ...', { config, options })
  config.grapesJsConfig.plugins.push(basicBlocs);

  console.log('passing label check : ' + options.label)
  config.addPlugin([
    blocks as Plugin
  ], options)

  return config
}
