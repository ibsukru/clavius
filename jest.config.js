const { INIT_CWD } = process.env

const jestDir = `${INIT_CWD}`

console.log(`jestDir`, jestDir)
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  // testMatch: ['**/__tests__/*.(ts|tsx)'],
  setupFiles: [`${jestDir}/jest.setup.js`],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globals: {
    'ts-jest': {
      tsConfig: `${jestDir}/jest.tsconfig.json`,
      isolatedModules: true,
    },
  },
}
