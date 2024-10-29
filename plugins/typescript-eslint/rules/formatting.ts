import { objectCurlySpacing, paddingLineBetweenStatements, quotes, semi, spaceBeforeFunctionParen } from '../../eslint/sharedOptions';

export = {
	'@typescript-eslint/brace-style': 'warn',
	'@typescript-eslint/comma-dangle': 'warn',
	'@typescript-eslint/comma-spacing': 'warn',
	'@typescript-eslint/func-call-spacing': 'warn',
	'@typescript-eslint/keyword-spacing': 'warn',
	'@typescript-eslint/member-delimiter-style': [
		'warn',
		{
			multiline: {
				delimiter: 'semi',
				requireLast: true
			},
			multilineDetection: 'brackets',
			singleline: {
				delimiter: 'semi',
				requireLast: true
			}
		}
	],
	'@typescript-eslint/no-extra-parens': [
		'warn',
		'all',
		{
			// https://github.com/eslint/eslint/issues/8891#issuecomment-313618753
			nestedBinaryExpressions: false
		}
	],
	'@typescript-eslint/object-curly-spacing': [
		'warn',
		...objectCurlySpacing
	],
	'@typescript-eslint/padding-line-between-statements': [
		'warn',
		...paddingLineBetweenStatements
	],
	'@typescript-eslint/quotes': [
		'warn',
		...quotes
	],
	'@typescript-eslint/semi': [
		'warn',
		...semi
	],
	'@typescript-eslint/space-before-blocks': 'warn',
	'@typescript-eslint/space-before-function-paren': [
		'warn',
		...spaceBeforeFunctionParen
	],
	'@typescript-eslint/space-infix-ops': 'warn',
	'@typescript-eslint/type-annotation-spacing': 'warn',
	'brace-style': 'off',
	'comma-dangle': 'off',
	'comma-spacing': 'off',
	'func-call-spacing': 'off',
	'keyword-spacing': 'off',
	'no-extra-parens': 'off',
	'object-curly-spacing': 'off',
	'padding-line-between-statements': 'off',
	quotes: 'off',
	semi: 'off',
	'space-before-blocks': 'off',
	'space-before-function-paren': 'off',
	'space-infix-ops': 'off'
};
