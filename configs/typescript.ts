import eslintPluginImportTypescriptRules from '../plugins/typescript-eslint/rules/typescript';

export = {
	extends: [
		'./javascript',
		'../plugins/typescript-eslint',
		'plugin:import/typescript'
	],
	overrides: [
		{
			files: [
				'**/*.d.ts'
			],
			rules: {
				'@typescript-eslint/naming-convention': 'off'
			}
		}
	],
	rules: {
		...eslintPluginImportTypescriptRules
	},
	settings: {
		'import/resolver': {
			node: true,
			typescript: true
		}
	}
};
