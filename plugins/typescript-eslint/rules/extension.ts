import { noUnusedVars } from '../../eslint/sharedOptions';

export = {
	'@typescript-eslint/default-param-last': 'warn',
	'@typescript-eslint/no-dupe-class-members': 'warn',
	'@typescript-eslint/no-invalid-this': 'warn',
	'@typescript-eslint/no-loop-func': 'warn',
	// ! - Typescript itself only allows redeclares with the var keyword and this is already prevented by another rule
	'@typescript-eslint/no-redeclare': 'off',
	'@typescript-eslint/no-shadow': 'warn',
	'@typescript-eslint/no-unused-expressions': 'warn',
	'@typescript-eslint/no-unused-vars': [
		'warn',
		...noUnusedVars
	],
	'@typescript-eslint/no-use-before-define': 'warn',
	'@typescript-eslint/return-await': [
		'warn',
		'always'
	],
	'default-param-last': 'off',
	'init-declarations': 'off',
	'no-dupe-class-members': 'off',
	'no-invalid-this': 'off',
	'no-loop-func': 'off',
	'no-magic-numbers': 'off',
	'no-redeclare': 'off',
	'no-return-await': 'off',
	'no-shadow': 'off',
	'no-unused-expressions': 'off',
	'no-unused-vars': 'off',
	'no-use-before-define': 'off'
};
