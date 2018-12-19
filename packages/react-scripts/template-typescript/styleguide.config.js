module.exports = {
  title: 'ReactPlate Style Guide Example',
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true },
  }).parse,
  webpackConfig: require('cdab-reactplate/config/webpack.config'),
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'src/docs/intro.md',
    },
    {
      name: 'Documentation',
      description: 'This section describes basic documentation of installation and usage',
      sections: [
        {
          name: 'Installation',
          content: 'src/docs/documentation/installation.md',
          description: 'The description for the installation section',
        },
        {
          name: 'Usage',
          content: 'src/docs/documentation/usage.md',
          description: 'How do you use this project?',
        },
        {
          name: 'Development',
          content: 'src/docs/documentation/development.md',
          description: 'What are some of the development workflows available?',
        },
        {
          name: 'Environment Variables',
          content: 'src/docs/documentation/environmentVariables.md',
          description: 'Usage of environment variables',
        },
      ],
      sectionDepth: 4,
    },
    {
      name: 'UI Components',
      content: 'src/docs/ui.md',
      components: 'src/components/**/*.{js,jsx,ts,tsx}',
      ignore: 'src/components/**/index.{js,jsx,ts,tsx}',
      sectionDepth: 1,
    },
  ],
}
