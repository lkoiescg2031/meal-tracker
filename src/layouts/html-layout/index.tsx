import React from 'react'

import GlobalStyles from '@/styles/global-styles'

export interface HtmlLayoutProps {
	className: string
	children: React.ReactElement
}

export default function HtmlLayout({
	className,
	children,
}: HtmlLayoutProps): React.ReactElement {
	return (
		<html lang="ko">
			<body className={className}>
				<GlobalStyles />
				{children}
			</body>
		</html>
	)
}
