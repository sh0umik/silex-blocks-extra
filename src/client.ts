import blocksFlexbox from 'grapesjs-blocks-flexbox'
import { Plugin } from '@silexlabs/silex-plugins'
import {ClientConfig} from "@silexlabs/silex/src/ts/client/config";
import {PluginOptions} from "./blocks/interface";
import loadBlocks from './blocks/flexbox';
import blocks from "./blocks";

export interface BlockExtraOptions {
  label?: string;
}
export default function (config : ClientConfig, options: BlockExtraOptions) {
  console.log('plugin init client ...', { config, options })

  config.addPlugin([
    blocks as Plugin
  ], {});

  return config;
}
