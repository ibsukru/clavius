const repos = ['apollo', 'clavius', 'phoenix', 'mars', 'solaire']

const libs = repos.reduce((acc, current) => {
  return acc.concat(`${current}.lib`)
}, [])

const builders = repos
  .filter(repo => repo !== 'clavius')
  .reduce((acc, current) => {
    return acc.concat(`${current}.builder`)
  }, [])

const { NODE_ENV } = process.env

const alias = [...libs, ...builders, 'clavius.www'].reduce((acc, lib) => {
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
