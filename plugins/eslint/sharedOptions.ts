const noUnusedVars: unknown[] = [
	{
		varsIgnorePattern: '^_'
	}
];
const objectCurlySpacing: unknown[] = [
	'always'
];
const paddingLineBetweenStatements: unknown[] = [
	{
		blankLine: 'always',
		next: [
			'block-like',
			'break',
			'continue',
			'debugger',
			'expression',
			'return',
			'throw'
		],
		prev: '*'
	},
	{
		blankLine: 'always',
		next: '*',
		prev: [
			'block-like',
			'directive',
			'expression'
		]
	},
	{
		blankLine: 'any',
		next: [
			'const',
			'expression',
			'let'
		],
		prev: [
			'const',
			'expression',
			'let'
		]
	}
];
const quotes: unknown[] = [
	'single',
	{
		avoidEscape: true
	}
];
const semi: unknown[] = [
	'always',
	{
		omitLastInOneLineBlock: false
	}
];
const spaceBeforeFunctionParen: unknown[] = [
	{
		anonymous: 'never',
		asyncArrow: 'always',
		named: 'never'
	}
];

export {
	noUnusedVars,
	objectCurlySpacing,
	paddingLineBetweenStatements,
	quotes,
	semi,
	spaceBeforeFunctionParen
};
