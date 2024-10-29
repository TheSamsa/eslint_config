import { objectCurlySpacing, paddingLineBetweenStatements, quotes, semi, spaceBeforeFunctionParen } from '../sharedOptions';

export = {
	'array-bracket-newline': [
		'error',
		'consistent'
	],
	'array-bracket-spacing': [
		'error',
		'always'
	],
	'array-element-newline': [
		'error',
		'consistent'
	],
	'arrow-parens': 'error',
	'arrow-spacing': 'error',
	'block-spacing': 'error',
	// ! - Definition for rule was not found
	// 'block-style': 'error',
	'comma-dangle': 'error',
	'comma-spacing': 'error',
	'comma-style': 'error',
	'dot-location': [
		'error',
		'property'
	],
	'eol-last': 'error',
	'func-call-spacing': 'error',
	'function-call-argument-newline': [
		'error',
		'consistent'
	],
	'function-paren-newline': [
		'error',
		'multiline-arguments'
	],
	'generator-star-spacing': [
		'error',
		'after'
	],
	'implicit-arrow-linebreak': 'error',
	'jsx-quotes': 'error',
	'key-spacing': 'error',
	'keyword-spacing': 'error',
	'line-comment-position': 'error',
	'linebreak-style': 'error',
	'lines-around-comment': [
		'error',
		{
			afterBlockComment: false,
			afterLineComment: false,
			allowArrayEnd: false,
			allowArrayStart: true,
			allowBlockEnd: false,
			allowBlockStart: true,
			allowClassEnd: false,
			allowClassStart: false,
			allowObjectEnd: false,
			allowObjectStart: true,
			beforeBlockComment: true,
			beforeLineComment: true
		}
	],
	'max-len': [
		'error',
		{
			code: 140,
			ignoreComments: true,
			// https://regexr.com/77ain
			ignorePattern: "^(const.*=.*require\('.*'\))|(import.*from '.*')",
			ignoreRegExpLiterals: false,
			ignoreStrings: false,
			ignoreTemplateLiterals: false,
			ignoreTrailingComments: true,
			ignoreUrls: false,
			tabWidth: 4
		}
	],
	'max-statements-per-line': 'error',
	// ! - Definition for rule was not found
	// 'multiline-tenary': [
	// 	'error',
	// 	'always-multiline'
	// ],
	'new-parens': 'error',
	'newline-per-chained-call': 'error',
	'no-extra-parens': [
		'error',
		'all',
		{
			// https://github.com/eslint/eslint/issues/8891#issuecomment-313618753
			nestedBinaryExpressions: false
		}
	],
	'no-multi-spaces': 'error',
	'no-multiple-empty-lines': [
		'error',
		{
			max: 1
		}
	],
	'no-trailing-spaces': 'error',
	'no-whitespace-before-property': 'error',
	'nonblock-statement-body-position': 'error',
	'object-curly-newline': [
		'error',
		{
			ExportDeclaration: 'never',
			ImportDeclaration: 'never',
			ObjectExpression: {
				consistent: true
			},
			ObjectPattern: {
				consistent: true
			}
		}
	],
	'object-curly-spacing': [
		'error',
		...objectCurlySpacing
	],
	'object-property-newline': 'error',
	'operator-linebreak': [
		'error',
		'before'
	],
	'padding-line-between-statements': [
		'error',
		...paddingLineBetweenStatements
	],
	quotes: [
		'error',
		...quotes
	],
	'rest-spread-spacing': 'error',
	semi: [
		'error',
		...semi
	],
	'semi-spacing': 'error',
	'semi-style': 'error',
	'space-before-blocks': 'error',
	'space-before-function-paren': [
		'warn',
		...spaceBeforeFunctionParen
	],
	'space-in-parens': 'error',
	'space-infix-ops': 'error',
	'space-unary-ops': 'error',
	'switch-colon-spacing': 'error',
	'template-curly-spacing': [
		'error',
		'always'
	],
	'template-tag-spacing': 'error',
	'unicode-bom': 'error',
	'wrap-iife': 'error',
	'wrap-regex': 'error',
	'yield-star-spacing': 'error'
};
