export const eslintConfiguration = {
	/* Parser options https://eslint.org/docs/user-guide/configuring#specifying-parser-options */
	"parserOptions": {
		"ecmaVersion": 2018,
		"ecmaFeatures": {
			"jsx": true
		}
	},
	/* Environments https://eslint.org/docs/user-guide/configuring#specifying-environments */
	"env": {
		"browser": true,
		"node": true
	},
	/* Rules https://eslint.org/docs/rules/ */
	"rules": {
		/* Possible errors https://eslint.org/docs/rules/#possible-errors */
		/* Best practices https://eslint.org/docs/rules/#best-practices */
		"no-multi-spaces": "error",
		/* Stylistic issues https://eslint.org/docs/rules/#stylistic-issues */
		"no-trailing-spaces": "true",
		"object-property-newline": "error",
		"quotes": ["error", "backtick"]
	}
}