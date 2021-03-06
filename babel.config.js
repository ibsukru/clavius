const { NODE_ENV } = process.env

const libs = [
  'clavius.lib',
  'clavius.www',
  'apollo.lib',
  'apollo.builder',
  'phoenix.lib',
  'phoenix.builder',
  'solaire.lib',
  'solaire.builder',
  'mars.lib',
  'mars.builder',
]

const alias = libs.reduce((acc, lib) => {
  return {
    ...acc,
    [`^${lib}/(.+)`]: ([, name]) => {
      const src = name.replace(/^src/g, 'dist')

      return `${lib}/dist/${src.replace(/^dist/g, '')}`
    },
  }
}, {})

module.exports =
  NODE_ENV === 'test'
    ? {
        presets: [
          [
            '@babel/preset-react',
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
            },
          ],
          '@babel/preset-typescript',
        ],
      }
    : {
        presets: ['next/babel', '@babel/preset-typescript'],
        plugins: [
          [
            'module-resolver',
            {
              root: ['.'],
              alias,
            },
          ],
        ],
        ignore: [
          /node_modules/,
          ...['test', 'spec']
            .map(ext => `**/*.${ext}.ts`)
            .reduce((acc, file) => acc.concat([file, `${file}x`]), [])
            .concat(['**/__tests__', '**/__specs__']),
        ],
      }
