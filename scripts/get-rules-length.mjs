import fs from 'fs';
import { posix } from 'path';
import { fileURLToPath } from 'url';

const configFolderpath = posix.join(
	posix.dirname(
		fileURLToPath(import.meta.url)
	),
	'..',
	'dist',
	'plugins'
);

(async () => {
	const configNames = fs
		.readdirSync(
			configFolderpath,
			{
				withFileTypes: true
			}
		)
		.filter((dirent) => {
			return dirent.isDirectory();
		})
		.map((dirent) => {
			return dirent.name;
		});
	const configNameRulesLengthMap = new Map(
		await Promise.all(
			configNames.map(async (configName) => {
				const configFilepath = posix.join(
					configFolderpath,
					configName,
					'index.js'
				);

				if (!fs.existsSync(configFilepath)) {
					throw new Error(`Configuration ${ configFilepath } does not exist.`);
				}

				const config = (await import(configFilepath)).default;

				return [
					configName,
					Object
						.keys(config.rules ?? {})
						.length
				]
			})
		)
	);
	const totalRulesLength = [
		...configNameRulesLengthMap.values()
	].reduce(
		(totalRulesLength, rulesLength) => {
			return rulesLength + totalRulesLength;
		},
		0
	);

	[
		...configNameRulesLengthMap.entries()
	].forEach(([ configName, rulesLength ]) => {
		console.log(configName, rulesLength);
	})

	console.log('total', totalRulesLength);
})();
