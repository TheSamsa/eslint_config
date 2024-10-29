export = {
	extends: [
		'./typescript'
	],
	rules: {
		'import/no-anonymous-default-export': [
			'warn',
			{
				allowArray: false,
				allowArrowFunction: false,
				allowAnonymousClass: false,
				allowAnonymousFunction: false,
				allowCallExpression: true
			}
		]
	}
};
