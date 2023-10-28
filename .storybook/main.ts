import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'@storybook/addon-mdx-gfm',
		{
			name: '@storybook/addon-styling',
			options: {
				postCss: true,
			},
		},
	],
	async webpackFinal(config) {
		if (!config.resolve) {
			config.resolve = {}
		}

		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname, '../src'),
		}

		return config
	},
	babel: async (config) => ({
		...config,
		plugins: [
			...(config.plugins || []),
			'babel-plugin-macros',
			[
				'@emotion/babel-plugin-jsx-pragmatic',
				{
					export: 'jsx',
					import: '__cssprop',
					module: '@emotion/react',
				},
			],
			[
				'@babel/plugin-transform-react-jsx',
				{
					pragma: '__cssprop',
				},
				'emotion-css-prop',
			],
		],
	}),
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
}
export default config
