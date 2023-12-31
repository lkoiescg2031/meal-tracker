import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import HtmlLayout from '@/layouts/html-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

interface RootLayoutProps {
	children: React.ReactElement
}

export default function RootLayout(props: RootLayoutProps) {
	return <HtmlLayout className={inter.className}>{props.children}</HtmlLayout>
}
