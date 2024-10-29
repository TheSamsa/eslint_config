const baseNoCommonJs: any[] = [
	'error',
	{
		allowPrimitiveModules: false
	}
];
const baseNoUselessPathSegments: any[] = [
	'warn',
	{
		noUselessIndex: true
	}
];
const baseNoUnresolved: any[] = [
	'error',
	{
		amd: false,
		caseSensitive: true,
		caseSensitiveStrict: true
	}
];

export {
	baseNoCommonJs,
	baseNoUnresolved,
	baseNoUselessPathSegments
};
