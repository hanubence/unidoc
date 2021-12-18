// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  renderers: [
    // Enable the Preact renderer to support Preact JSX components.
    '@astrojs/renderer-preact',
    // Enable the React renderer, for the Algolia search component
    '@astrojs/renderer-react',
  ],
  devOptions: {
    // hostname: 'localhost',  // The hostname to run the dev server on.
    port: 8888,
  },
  markdownOptions: {
    render: [
      '@astrojs/markdown-remark',
      {
        remarkPlugins: [
          // Add a Remark plugin that you want to enable for your project.
          // If you need to provide options for the plugin, you can use an array and put the options as the second item.
          // ['remark-autolink-headings', { behavior: 'prepend'}],
          'remark-math',
          'remark-supersub',
        ],
        rehypePlugins: [
          // Add a Rehype plugin that you want to enable for your project.
          // If you need to provide options for the plugin, you can use an array and put the options as the second item.
          // 'rehype-slug',
          // ['rehype-autolink-headings', { behavior: 'prepend'}],
          'rehype-katex',
        ],
      },
    ],
  },
});