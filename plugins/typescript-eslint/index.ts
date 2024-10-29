import extensionRules from './rules/extension';
import formattingRules from './rules/formatting';
import typescriptRules from './rules/typescript';

export = {
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:@typescript-eslint/strict'
	],
	rules: {
		...extensionRules,
		...formattingRules,
		...typescriptRules
	}
};
