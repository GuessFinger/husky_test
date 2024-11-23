export default {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-standard-scss",
        "stylelint-config-recess-order",
        "stylelint-prettier/recommended",
    ],
    plugins: ["stylelint-prettier"],
    rules: {
        "prettier/prettier": true,
    },
};
