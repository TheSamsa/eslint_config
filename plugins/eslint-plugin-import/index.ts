import helpfulWarningsRules from './rules/helpfulWarnings';
import moduleSystemsRules from './rules/moduleSystems';
import staticAnalysisRules from './rules/staticAnalysis';
import styleGuideRules from './rules/styleGuide';

export = {
	extends: [
		'plugin:import/recommended'
	],
	rules: {
		...helpfulWarningsRules,
		...moduleSystemsRules,
		...staticAnalysisRules,
		...styleGuideRules
	}
};
