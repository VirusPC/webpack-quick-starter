module.exports = {
    roots: [
        "<rootDir>/tests"
    ],
    testRegex: 'tests/(.+)\\.test\\.(jsx?|tsx?)$',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleFileExtensions: ['ts', 'js'],
};