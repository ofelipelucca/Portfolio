import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";

export default [
    {
        ignores: [
            ".next/**",
            "node_modules/**",
            "dist/**",
            "build/**"
        ]
    },

    ...tseslint.configs.recommended,

    nextPlugin.configs["core-web-vitals"],
];