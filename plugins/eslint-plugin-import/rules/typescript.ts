import { baseNoCommonJs, baseNoUnresolved, baseNoUselessPathSegments } from '../sharedOptions';

export = {
	'import/no-commonjs': [
		baseNoCommonJs[0],
		{
			...baseNoCommonJs[1],
			allowConditionalRequire: false,
			allowRequire: false
		}
	],
	'import/no-unresolved': [
		baseNoUnresolved[0],
		{
			...baseNoUnresolved[1],
			commonjs: false
		}
	],
	'import/no-useless-path-segments': [
		baseNoUselessPathSegments[0],
		{
			...baseNoUselessPathSegments[1],
			commonjs: false
		}
	]
};
