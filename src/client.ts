import blocksFlexbox from 'grapesjs-blocks-flexbox'
import { Plugin } from '@silexlabs/silex-plugins'
import {ClientConfig} from "@silexlabs/silex/src/ts/client/config";
import {BlockExtraOptions, PluginOptions} from "./interface";
import loadBlocks from './blocks/flexbox';
import blocks from "./blocks";

export default function (config : ClientConfig, options: PluginOptions) {
  console.log('plugin init client ...', { config, options })

  console.log('passing label check : ' + options.label);
  config.addPlugin([
    blocks as Plugin
  ], options);

  return config;
}
