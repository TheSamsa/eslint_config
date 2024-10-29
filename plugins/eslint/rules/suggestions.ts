export = {
	'arrow-body-style': [
		'error',
		'always'
	],
	'block-scoped-var': 'error',
	'camelcase': 'error',
	'class-methods-use-this': 'error',
	'complexity': [
		'error',
		2
	],
	'consistent-return': [
		'error',
		{
			treatUndefinedAsUnspecified: true
		}
	],
	'consistent-this': 'error',
	'curly': [
		'error',
		'all'
	],
	'default-case': 'error',
	'default-case-last': 'error',
	'dot-notation': 'error',
	'eqeqeq': 'error',
	'func-names': 'error',
	'func-style': [
		'error',
		'declaration',
		{
			allowArrowFunctions: true
		}
	],
	'grouped-accessor-pairs': [
		'error',
		'getBeforeSet'
	],
	'guard-for-in': 'error',
	'logical-assignment-operators': 'error',
	'max-classes-per-file': 'error',
	'max-depth': 'error',
	'max-lines': 'error',
	'max-lines-per-function': [
		'error',
		{
			skipBlankLines: true,
			skipComments: true
		}
	],
	'max-nested-callbacks': 'error',
	'max-statements': 'error',
	'multiline-comment-style': [
		'error',
		'separate-lines'
	],
	'new-cap': [
		'error',
		{
			capIsNew: false,
			newIsCap: true,
			properties: true
		}
	],
	'no-alert': 'error',
	'no-array-constructor': 'error',
	'no-bitwise': 'error',
	'no-caller': 'error',
	'no-confusing-arrow': 'error',
	'no-console': [
		'error',
		{
			allow: [
				'error',
				'warn'
			]
		}
	],
	'no-continue': 'error',
	'no-div-regex': 'error',
	'no-else-return': 'error',
	'no-empty-function': 'error',
	'no-empty-static-block': 'error',
	'no-eq-null': 'error',
	'no-eval': 'error',
	'no-extend-native': 'error',
	'no-extra-bind': 'error',
	'no-extra-boolean-cast': [
		'error',
		{
			enforceForLogicalOperands: true
		}
	],
	'no-extra-label': 'error',
	'no-floating-decimal': 'error',
	'no-implicit-coercion': [
		'error',
		{
			boolean: true,
			number: true,
			string: true,
			disallowTemplateShorthand: true
		}
	],
	'no-implied-eval': 'error',
	'no-inline-comments': 'error',
	'no-invalid-this': [
		'error',
		{
			capIsConstructor: false
		}
	],
	'no-iterator': 'error',
	'no-label-var': 'error',
	'no-labels': 'error',
	'no-lone-blocks': 'error',
	'no-lonely-if': 'error',
	'no-loop-func': 'error',
	'no-mixed-operators': 'error',
	'no-multi-assign': 'error',
	'no-multi-str': 'error',
	'no-negated-condition': 'error',
	'no-nested-ternary': 'error',
	'no-new': 'error',
	'no-new-func': 'error',
	'no-new-object': 'error',
	'no-new-wrappers': 'error',
	'no-octal-escape': 'error',
	'no-param-reassign': 'error',
	'no-proto': 'error',
	'no-restricted-imports': [
		'error',
		'ts-map'
	],
	'no-return-assign': 'error',
	'no-script-url': 'error',
	'no-sequences': [
		'error',
		{
			allowInParentheses: true
		}
	],
	'no-shadow': 'error',
	'no-throw-literal': 'error',
	'no-undef-init': 'error',
	'no-unneeded-ternary': [
		'error',
		{
			defaultAssignment: false
		}
	],
	'no-unused-expressions': 'error',
	'no-useless-call': 'error',
	'no-useless-computed-key': 'error',
	'no-useless-concat': 'error',
	'no-useless-constructor': 'error',
	'no-useless-rename': 'error',
	'no-var': 'error',
	'no-void': 'error',
	'object-shorthand': 'error',
	'one-var': [
		'error',
		'never'
	],
	'operator-assignment': 'error',
	'prefer-arrow-callback': 'error',
	'prefer-const': 'error',
	// ! - ESLint uses the error type "error" for all rules. Since this rule is a recommendation in our Coding Guidelines, the error type
	// ! - "warn" is used here.
	'prefer-destructuring': 'warn',
	'prefer-exponentiation-operator': 'error',
	'prefer-named-capture-group': 'error',
	'prefer-numeric-literals': 'error',
	'prefer-object-has-own': 'error',
	'prefer-object-spread': 'error',
	'prefer-promise-reject-errors': 'error',
	'prefer-regex-literals': [
		'error',
		{
			disallowRedundantWrapping: true
		}
	],
	'prefer-rest-params': 'error',
	'prefer-spread': 'error',
	'prefer-template': 'error',
	'quote-props': [
		'error',
		'as-needed'
	],
	'radix': 'error',
	'require-await': 'error',
	'spaced-comment': 'error',
	'symbol-description': 'error',
	'yoda': 'error'
};
