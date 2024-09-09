import globals from "globals";
import plugins from "@eslint/js";

export default {
  languageOptions: {
    globals: globals.browser,
  },
  plugins: [
    plugins.configs.recommended,
    // Добавьте ваш плагин on-change, если он существует
  ],
  rules: {
    // Добавьте правила, если необходимо
    "on-change/rule-name": "off" // Замените 'rule-name' на конкретное правило, если необходимо
  }
};
