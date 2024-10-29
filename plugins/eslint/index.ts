import layoutAndFormattingRules from './rules/layoutAndFormatting';
import possibleProblemsRules from './rules/possibleProblems';
import suggestionsRules from './rules/suggestions';

export = {
	extends: [
		'eslint:recommended'
	],
	rules: {
		...layoutAndFormattingRules,
		...possibleProblemsRules,
		...suggestionsRules
	},
	overrides: [
		{
			files: [
				'**/*.ts',
				'**/*.tsx'
			],
			rules: {
				'class-methods-use-this': 'off',
				'complexity': 'off'
			}
		}
	]
};
