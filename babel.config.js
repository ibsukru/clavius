const libs = [
  'apollo.lib',
  'apollo.web',
  'clavius.lib',
  'clavius.web',
  'phoenix.web',
  'phoenix.lib',
]

// const libs = ['apollo', 'clavius', 'phoenix', 'mars', 'solaire'].reduce(
//   (acc, current) => {
//     return acc.concat(`${current}.web`).concat(`${current}.lib`)
//   },
//   [],
// )

const { NODE_ENV } = process.env

const alias = libs.reduce((acc, lib) => {
  return {
    ...acc,
    [`^${lib}/(.+)`]: ([, name]) => {
      const src = name.replace(/^src/g, 'dist')

      return `${lib}/dist/${src.replace(/^dist/g, '').replace('//', '/')}`
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
