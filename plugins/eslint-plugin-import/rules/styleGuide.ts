export = {
	'import/consistent-type-specifier-style': [
		'warn',
		'prefer-top-level'
	],
	'import/extensions': [
		'warn',
		'never',
		{
			json: 'always'
		}
	],
	'import/first': 'warn',
	'import/newline-after-import': 'warn',
	'import/no-anonymous-default-export': [
		'warn',
		{
			allowArray: false,
			allowArrowFunction: false,
			allowAnonymousClass: false,
			allowAnonymousFunction: false,
			allowCallExpression: false,
			allowNew: false,
			allowLiteral: false,
			allowObject: false
		}
	],
	'import/no-duplicates': [
		'warn',
		{
			considerQueryString: false,
			'prefer-inline': false
		}
	],
	'import/no-named-default': 'warn',
	'import/order': [
		'warn',
		{
			alphabetize: {
				order: 'asc',
				caseInsensitive: true
			},
			groups: [
				[
					'builtin',
					'external'
				],
				'parent',
				[
					'index',
					'sibling'
				]
			],
			'newlines-between': 'always',
			pathGroupsExcludedImportTypes: [
				'internal',
				'object',
				'types'
			]
		}
	]
};
