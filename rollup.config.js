import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
	input: 'src/index.js',
	output: [
		// { file: 'stage1/index.mjs', 'format': 'es' },
		{ file: 'stage1/index.js', 'format': 'umd', name }
	],
	plugins: [
		svelte(),
		resolve()
	]
};
