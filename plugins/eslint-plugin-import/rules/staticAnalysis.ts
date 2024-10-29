import { baseNoUnresolved, baseNoUselessPathSegments } from '../sharedOptions';

export = {
	'import/no-absolute-path': [
		'error',
		{
			amd: true,
			commonjs: true,
			esmodule: true
		}
	],
	'import/no-dynamic-require': 'error',
	'import/no-self-import': 'error',
	'import/no-unresolved': [
		baseNoUnresolved[0],
		{
			...baseNoUnresolved[1],
			commonjs: true
		}
	],
	'import/no-useless-path-segments': [
		baseNoUselessPathSegments[0],
		{
			...baseNoUselessPathSegments[1],
			commonjs: true
		}
	],
	'import/no-webpack-loader-syntax': 'error'
}
