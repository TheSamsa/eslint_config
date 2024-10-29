export = {
	'@typescript-eslint/consistent-type-exports': [
		'warn',
		{
			fixMixedExportsWithInlineTypeSpecifier: false
		}
	],
	'@typescript-eslint/consistent-type-imports': [
		'warn',
		{
			disallowTypeAnnotations: true,
			fixStyle: 'separate-type-imports',
			prefer: 'no-type-imports'
		}
	],
	'@typescript-eslint/explicit-function-return-type': [
		'warn',
		{
			allowConciseArrowFunctionExpressionsStartingWithVoid: false,
			allowDirectConstAssertionInArrowFunctions: false,
			allowExpressions: false,
			allowHigherOrderFunctions: false,
			allowTypedFunctionExpressions: false
		}
	],
	'@typescript-eslint/explicit-member-accessibility': [
		'warn',
		{
			accessibility: 'explicit',
			overrides: {
				constructors: 'no-public'
			}
		}
	],
	'@typescript-eslint/explicit-module-boundary-types': [
		'warn',
		{
			allowArgumentsExplicitlyTypedAsAny: false,
			allowDirectConstAssertionInArrowFunctions: false,
			allowHigherOrderFunctions: false,
			allowTypedFunctionExpressions: false
		}
	],
	'@typescript-eslint/member-ordering': [
		'warn',
		{
			// ! - The following definition is based on the standard configuration of @typescript-eslint
			// ! - https://typescript-eslint.io/rules/member-ordering/#default-configuration
			default: [
				// Index signature
				'signature',
				'call-signature',

				// Fields
				// 'public-static-field',
				// 'protected-static-field',
				// 'private-static-field',
				// '#private-static-field',

				// 'public-decorated-field',
				// 'protected-decorated-field',
				// 'private-decorated-field',

				// 'public-instance-field',
				// 'protected-instance-field',
				// 'private-instance-field',
				// '#private-instance-field',

				// 'public-abstract-field',
				// 'protected-abstract-field',

				// 'public-field',
				// 'protected-field',
				// 'private-field',
				// '#private-field',

				'static-field',
				'instance-field',
				'abstract-field',

				// 'decorated-field',

				'field',

				// Static initialization
				'static-initialization',

				// Constructors
				'public-constructor',
				'protected-constructor',
				'private-constructor',

				'constructor',

				// Getters
				'public-static-get',
				'protected-static-get',
				'private-static-get',
				'#private-static-get',

				// 'public-decorated-get',
				// 'protected-decorated-get',
				// 'private-decorated-get',

				'public-instance-get',
				'protected-instance-get',
				'private-instance-get',
				'#private-instance-get',

				'public-abstract-get',
				'protected-abstract-get',

				'public-get',
				'protected-get',
				'private-get',
				'#private-get',

				'static-get',
				'instance-get',
				'abstract-get',

				// 'decorated-get',

				'get',

				// Setters
				'public-static-set',
				'protected-static-set',
				'private-static-set',
				'#private-static-set',

				// 'public-decorated-set',
				// 'protected-decorated-set',
				// 'private-decorated-set',

				'public-instance-set',
				'protected-instance-set',
				'private-instance-set',
				'#private-instance-set',

				'public-abstract-set',
				'protected-abstract-set',

				'public-set',
				'protected-set',
				'private-set',
				'#private-set',

				'static-set',
				'instance-set',
				'abstract-set',

				// 'decorated-set',

				'set',

				// Methods
				'public-static-method',
				'protected-static-method',
				'private-static-method',
				'#private-static-method',

				// 'public-decorated-method',
				// 'protected-decorated-method',
				// 'private-decorated-method',

				'public-instance-method',
				'protected-instance-method',
				'private-instance-method',
				'#private-instance-method',

				'public-abstract-method',
				'protected-abstract-method',

				'public-method',
				'protected-method',
				'private-method',
				'#private-method',

				'static-method',
				'instance-method',
				'abstract-method',

				// 'decorated-method',

				'method'
			]
		}
	],
	'@typescript-eslint/method-signature-style': [
		'warn',
		'method'
	],
	'@typescript-eslint/naming-convention': [
		'warn',
		{
			format: [
				'strictCamelCase'
			],
			// leading underscore to ignore parameters, for example in callbacks
			leadingUnderscore: 'allow',
			selector: 'default',
			// trailing underscore to avoid name conflicts, for example "module_"
			trailingUnderscore: 'allow'
		},
		{
			format: [
				'StrictPascalCase'
			],
			selector: 'typeLike'
		},
		{
			format: [
				'StrictPascalCase'
			],
			prefix: [
				'has',
				'is'
			],
			selector: [
				'accessor',
				'classProperty',
				// ! - This rule is necessary to overwrite the first rule and thus prevent errors when using libraries. As a result, the
				// ! - object literal properties of self-defined types are no longer checked.
				// 'objectLiteralProperty',
				'parameter',
				'parameterProperty',
				'typeProperty',
				'variable'
			],
			types: [
				'boolean'
			]
		},
		{
			format: [
				'StrictPascalCase'
			],
			modifiers: [
				'abstract'
			],
			prefix: [
				'Base'
			],
			selector: 'class'
		},
		{
			format: [
				'StrictPascalCase'
			],
			selector: 'enum',
			suffix: [
				'Enum'
			]
		},
		{
			format: [
				'UPPER_CASE'
			],
			selector: 'enumMember'
		},
		{
			format: [
				'StrictPascalCase'
			],
			modifiers: [
				'exported'
			],
			selector: 'function'
		},
		{
			format: [
				'StrictPascalCase'
			],
			prefix: [
				'I'
			],
			selector: [
				'interface'
			]
		},
		// ! - This rule is necessary to overwrite the first rule and thus prevent errors when using libraries. As a result, the
		// ! - properties of self-defined types are no longer checked.
		{
			format: null,
			selector: 'property'
		},
		{
			format: [
				'StrictPascalCase'
			],
			prefix: [
				'T'
			],
			selector: 'typeParameter'
		},
		{
			format: [
				// ! - StrictPascalCase is explicitly not used, since types can also have the prefix "I"
				'PascalCase'
			],
			selector: 'typeAlias'
		},
		{
			format: [
				'StrictPascalCase',
				'UPPER_CASE'
			],
			modifiers: [
				'const',
				'exported'
			],
			selector: 'variable'
		}
	],
	'@typescript-eslint/no-confusing-void-expression': 'error',
	'@typescript-eslint/no-empty-interface': [
		'error',
		{
			allowSingleExtends: true
		}
	],
	'@typescript-eslint/no-extraneous-class': 'off',
	'@typescript-eslint/no-non-null-assertion': 'off',
	'@typescript-eslint/no-redundant-type-constituents': 'warn',
	'@typescript-eslint/no-require-imports': 'warn',
	'@typescript-eslint/no-type-alias': [
		'warn',
		{
			allowAliases: 'always',
			allowCallbacks: 'always',
			allowConditionalTypes: 'never',
			allowConstructors: 'never',
			allowGenerics: 'always',
			allowLiterals: 'in-unions-and-intersections',
			allowMappedTypes: 'in-unions-and-intersections',
			allowTupleTypes: 'always'
		}
	],
	'@typescript-eslint/no-unnecessary-qualifier': 'warn',
	'@typescript-eslint/no-useless-empty-export': 'warn',
	'@typescript-eslint/parameter-properties': [
		'warn',
		{
			allow: [
				'private readonly',
				'protected readonly',
				'public readonly'
			],
			prefer: 'class-property'
		}
	],
	'@typescript-eslint/prefer-enum-initializers': 'warn',
	'@typescript-eslint/prefer-nullish-coalescing': [
		'warn',
		{
			allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
			ignoreConditionalTests: false,
			ignoreMixedLogicalExpressions: false,
			ignoreTernaryTests: false
		}
	],
	'@typescript-eslint/prefer-readonly': 'warn',
	'@typescript-eslint/prefer-regexp-exec': 'warn',
	'@typescript-eslint/promise-function-async': 'warn',
	'@typescript-eslint/require-array-sort-compare': [
		'warn',
		{
			ignoreStringArrays: true
		}
	],
	'@typescript-eslint/restrict-plus-operands': [
		'error',
		{
			checkCompoundAssignments: true
		}
	],
	'@typescript-eslint/restrict-template-expressions': [
		'error',
		{
			allowAny: false,
			allowBoolean: true,
			allowNever: false,
			allowNullish: true,
			allowNumber: true,
			allowRegExp: false
		}
	],
	'@typescript-eslint/sort-type-constituents': 'warn',
	'@typescript-eslint/strict-boolean-expressions': [
		'warn',
		{
			allowAny: false,
			allowNullableBoolean: false,
			allowNullableNumber: false,
			allowNullableObject: false,
			allowNullableString: false,
			allowNumber: false,
			allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
			allowString: false
		}
	],
	'@typescript-eslint/switch-exhaustiveness-check': 'warn',
	'@typescript-eslint/triple-slash-reference': [
		'error',
		{
			lib: 'never',
			path: 'never',
			types: 'prefer-import'
		}
	],
	'@typescript-eslint/typedef': 'warn',
	'@typescript-eslint/unified-signatures': 'off',
	'camelcase': 'off'
};
