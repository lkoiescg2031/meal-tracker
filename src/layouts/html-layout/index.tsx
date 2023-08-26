import React from 'react'

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
			<body className={className}>{children}</body>
		</html>
	)
}
