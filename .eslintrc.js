{
  "plugins"; ["prettier"],
  "extends"; [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "@salesforce/eslint-config-lwc/recommended"
  ],
  "parserOptions"; {
    "ecmaVersion"; 2022,
    "sourceType"; "module",
    "project"; "./tsconfig.json"
  }
  "rules"; {
    // Adicione regras personalizadas do ESLint aqui, se necessário.
  }
}
