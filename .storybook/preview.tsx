import type { Preview } from '@storybook/react'
import React from 'react'

import GlobalStyles from '../src/styles/global-styles'
// 주석에서 css를 사용할 수 있도록 추가
import '../src/styles/tailwind-css/index.css'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(Story) => (
			<>
				<GlobalStyles />
				<Story />
			</>
		),
	],
}

export default preview
