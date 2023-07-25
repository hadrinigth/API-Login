{
  "parser"; "@typescript-eslint/parser",
  "plugins"; ["@typescript-eslint", "prettier"],
  "extends"; [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended"
  ],
  "parserOptions"; {
    "ecmaVersion"; 2018,
    "sourceType"; "module",
    "project"; "./tsconfig.json"
  }
  "rules"; {
    // Adicione regras personalizadas do ESLint aqui, se necessário.
  }
}
