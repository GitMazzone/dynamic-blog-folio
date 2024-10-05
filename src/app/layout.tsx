import type { Metadata } from 'next';
import { Reddit_Mono } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { Nav, Socials, SidebarMetadata } from '@/components';
import { FilterProvider } from '@/context';
import { Analytics } from '@vercel/analytics/react';

const redditMono = Reddit_Mono({
	subsets: ['latin'],
	variable: '--font-reddit-mono',
	weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Your Name | SWE Blog',
	description:
		"Your Name | I'm a full-stack software engineer. These are things I've built, read, and learned.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang={'en'}>
			<body className={`${redditMono.className} antialiased`}>
				<Analytics />
				<FilterProvider>
					<div
						className={
							'min-h-screen bg-neutral-50 text-slate-800 flex flex-col md:flex-row'
						}
					>
						<aside className={'md:w-1/3 p-4 md:p-6 flex flex-col'}>
							<Nav />

							<SidebarMetadata />

							<div
								className={
									'mt-auto hidden md:flex justify-center max-w-full flex-wrap gap-2'
								}
							>
								<Socials />
							</div>
						</aside>

						<div
							className={
								'hidden md:block w-px border-dashed border-l border-slate-300'
							}
						></div>

						<main className={'md:w-2/3 p-4 md:p-6 md:overflow-y-auto'}>
							{children}
						</main>

						<footer
							className={'p-4 md:hidden flex flex-wrap justify-center gap-2'}
						>
							<Socials />
						</footer>
					</div>
				</FilterProvider>
			</body>
		</html>
	);
}
