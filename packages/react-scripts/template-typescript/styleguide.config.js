'use strict'

const path = require('path')
const fs = require('fs')

function RenderComponentGroups({ name, components, sectionDepth = 0, pagePerSection = true }) {
  return {
    components: `src/components/${
      Array.isArray(components) ? `{${components.join(',')}}` : components
    }/**/*.{js,jsx,ts,tsx}`,
    ignore: `src/components/${
      Array.isArray(components) ? `{${components.join(',')}}` : components
    }/**/index.{js,jsx,ts,tsx}`,
    name: name ? name : !Array.isArray(components) ? components : 'Untitled',
    sectionDepth,
    pagePerSection,
  }
}

module.exports = {
  exampleMode: 'expand',
  pagePerSection: true,
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true },
  }).parse,
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  title: 'ReactPlate Style Guide',
  usageMode: 'expand',
  webpackConfig: require('cdab-reactplate/config/webpack.config'),
  updateExample(props, exampleFilePath) {
    // props.settings are passed by any fenced code block, in this case
    const { settings, lang } = props
    // "../mySourceCode.js"
    if (typeof settings.file === 'string') {
      // "absolute path to mySourceCode.js"
      const filepath = path.resolve(exampleFilePath, settings.file)
      // displays the block as static code
      settings.static = true
      // no longer needed
      delete settings.file
      return {
        content: fs.readFileSync(filepath, 'utf8'),
        settings,
        lang,
      }
    }
    return props
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/intro.md',
    },
    {
      name: 'Documentation',
      description: 'This section describes basic documentation of installation and usage',
      sections: [
        {
          name: 'Installation',
          content: 'docs/documentation/installation.md',
          description: 'The description for the installation section',
        },
        {
          name: 'Usage',
          content: 'docs/documentation/usage.md',
          description: 'How do you use this project?',
        },
        {
          name: 'Development',
          content: 'docs/documentation/development.md',
          description: 'What are some of the development workflows available?',
        },
        {
          name: 'Environment Variables',
          content: 'docs/documentation/environment-variables.md',
          description: 'Usage of environment variables',
        },
        {
          name: 'Mock API',
          content: 'docs/documentation/mock-api.md',
          description: 'Create a realistic mock API',
        },
      ],
      sectionDepth: 4,
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      sectionDepth: 1,
      sections: [
        RenderComponentGroups({
          name: 'Buttons',
          components: ['Button', 'PinkButton'],
          sectionDepth: undefined,
          pagePerSection: false,
        }),
        RenderComponentGroups({
          name: 'Grid System',
          components: ['Grid', 'Module'],
          sectionDepth: 0,
        }),
        RenderComponentGroups({
          name: 'Errors',
          components: ['ErrorBoundary', 'ErrorComponent', 'SentryErrorDialog'],
          sectionDepth: 1,
        }),
      ],
    },
  ],
}
