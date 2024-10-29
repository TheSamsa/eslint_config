import { baseNoCommonJs } from '../sharedOptions';

export = {
	'import/no-amd': 'error',
	'import/no-commonjs': [
		baseNoCommonJs[0],
		{
			...baseNoCommonJs[1],
			allowConditionalRequire: true,
			allowRequire: true
		}
	],
	'import/no-import-module-exports': 'error',
	'import/unambiguous': 'warn'
};
