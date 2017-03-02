module.exports = {
    "env": {
      "es6": true,
      "node": true,
      "browser": true
    },
    "parserOptions": {
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
      },
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "prettier",
      "flowtype"
    ],
    "extends": [
      "eslint:recommended",
      "airbnb",
      "plugin:flowtype/recommended",
      "plugin:react/recommended",
      "prettier",
      "prettier/flowtype",
      "prettier/react"
    ],
    "rules": {
      "prettier/prettier": ["error", { printWidth: 100 }],
      "no-invalid-this": "off",
      "no-return-assign": "off",
      "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
      "react/prop-types": [2, { ignore: ["style", "children", "dispatch"] } ],
      "import/prefer-default-export": "off",
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "error",
      "import/namespace": "error",
      "import/no-absolute-path": "error"
    }
};
