import { processArgs } from '../../src/handleArguments';

const { describe, it } = intern.getInterface('bdd');
const { assert } = intern.getPlugin('chai');

describe('help', () => {
	describe('processArgs', () => {
		it('should handle single command (no arguments)', () => {
			const args = processArgs(['dojo']);
			assert.strictEqual(args, {});
		});

		// it('should handle single command (no arguments)', () => {
		// 	const fooHelp = formatHelp({ _: ['foo'] }, groupMap);
		// 	const barHelp = formatHelp({ _: ['bar'] }, groupMap);
		// 	assert.strictEqual(fooHelp, expectedFooGroupHelp);
		// 	assert.strictEqual(barHelp, expectedBarGroupHelp);
		// });
	});
});
