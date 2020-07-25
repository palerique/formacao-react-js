module.exports = {
    env: {
        browser: true,
        es2020: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
        "react/prop-types": 0
    },
};
