import { noUnusedVars } from '../sharedOptions';

export = {
	'array-callback-return': 'error',
	'no-cond-assign': [
		'error',
		'always'
	],
	'no-constant-binary-expression': 'error',
	'no-constructor-return': 'error',
	'no-fallthrough': 'error',
	'no-inner-declarations': [
		'error',
		'both'
	],
	'no-irregular-whitespace': [
		'error',
		{
			skipComments: false,
			skipRegExps: false,
			skipStrings: false,
			skipTemplates: false
		}
	],
	'no-new-native-nonconstructor': 'error',
	'no-promise-executor-return': 'error',
	'no-self-compare': 'error',
	'no-template-curly-in-string': 'error',
	'no-unmodified-loop-condition': 'error',
	'no-unreachable-loop': 'error',
	'no-unsafe-negation': [
		'error',
		{
			enforceForOrderingRelations: true
		}
	],
	'no-unsafe-optional-chaining': [
		'error',
		{
			disallowArithmeticOperators: true
		}
	],
	'no-unused-private-class-members': 'error',
	'no-unused-vars': [
		'error',
		...noUnusedVars
	],
	'no-use-before-define': 'error',
	'require-atomic-updates': 'error',
	'use-isnan': [
		'error',
		{
			enforceForIndexOf: true,
			enforceForSwitchCase: true
		}
	]
};
