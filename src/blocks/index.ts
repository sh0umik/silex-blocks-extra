import {ClientConfig} from '@silexlabs/silex/src/ts/client/config'
import {FlexBoxPluginOptions} from '../interface'
import loadFlexBlocks from './flexbox'

export default function (config : ClientConfig, options: FlexBoxPluginOptions) {
  config.on('silex:grapesjs:end', () => {
    const editor = config.getEditor()
    const _options: FlexBoxPluginOptions = {
      flexboxBlock: {},
      stylePrefix: '',
      labelRow: 'Row',
      labelColumn: 'Column',
      ...options,
    }
    loadFlexBlocks(editor, _options)

    //inject CDN
    console.log('inject tailwind cdn from plugin scripts index.ts ->', editor.Canvas.getModel())
    config.grapesJsConfig = {
      ...config.grapesJsConfig,
      canvas: {
        scripts: ['https://cdn.tailwindcss.com'],
      }
    }
    //editor.Canvas.getModel().defaults().scripts.push('https://cdn.tailwindcss.com')


    // Load Test Bloc
    console.log('loading test tailwind bloc')
    const blockManager = editor.Blocks
    blockManager.add('tailwind-block', {
      label: 'TailWind Card',
      content: '<!--\n' +
        '  Welcome to Tailwind Play, the official Tailwind CSS playground!\n' +
        '\n' +
        '  Everything here works just like it does when you\'re running Tailwind locally\n' +
        '  with a real build pipeline. You can customize your config file, use features\n' +
        '  like `@apply`, or even add third-party plugins.\n' +
        '\n' +
        '  Feel free to play with this example if you\'re just learning, or trash it and\n' +
        '  start from scratch if you know enough to be dangerous. Have fun!\n' +
        '-->\n' +
        '<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">\n' +
        '  <img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />\n' +
        '  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>\n' +
        '  <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">\n' +
        '    <div class="mx-auto max-w-md">\n' +
        '      <img src="/img/logo.svg" class="h-6" alt="Tailwind Play" />\n' +
        '      <div class="divide-y divide-gray-300/50">\n' +
        '        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">\n' +
        '          <p>An advanced online playground for Tailwind CSS, including support for things like:</p>\n' +
        '          <ul class="space-y-4">\n' +
        '            <li class="flex items-center">\n' +
        '              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">\n' +
        '                <circle cx="12" cy="12" r="11" />\n' +
        '                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />\n' +
        '              </svg>\n' +
        '              <p class="ml-4">\n' +
        '                Customizing your\n' +
        '                <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file\n' +
        '              </p>\n' +
        '            </li>\n' +
        '            <li class="flex items-center">\n' +
        '              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">\n' +
        '                <circle cx="12" cy="12" r="11" />\n' +
        '                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />\n' +
        '              </svg>\n' +
        '              <p class="ml-4">\n' +
        '                Extracting classes with\n' +
        '                <code class="text-sm font-bold text-gray-900">@apply</code>\n' +
        '              </p>\n' +
        '            </li>\n' +
        '            <li class="flex items-center">\n' +
        '              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">\n' +
        '                <circle cx="12" cy="12" r="11" />\n' +
        '                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />\n' +
        '              </svg>\n' +
        '              <p class="ml-4">Code completion with instant preview</p>\n' +
        '            </li>\n' +
        '          </ul>\n' +
        '          <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>\n' +
        '        </div>\n' +
        '        <div class="pt-8 text-base font-semibold leading-7">\n' +
        '          <p class="text-gray-900">Want to dig deeper into Tailwind?</p>\n' +
        '          <p>\n' +
        '            <a href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>\n' +
        '          </p>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>\n',
      category: 'Tailwind Test',
      attributes: {
        title: 'Insert Test Tailwind block'
      }
    })
  })
}
