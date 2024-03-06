import {BlockProperties} from 'grapesjs'

export interface PluginOptions {
  /**
   * Use this to extend the default flexbox block.
   * @default {}
   */
  flexboxBlock?: Partial<BlockProperties>;

  /**
   * Classes prefix.
   * @default ''
   */
  stylePrefix?: string;

  /**
   * Row label.
   * @default 'Row'
   */
  labelRow?: string;

  /**
   * Column label.
   * @default 'Column'
   */
  labelColumn?: string;
}
