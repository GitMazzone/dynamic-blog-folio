import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h2: ({ children }) => <h2 className={'text-3xl font-bold'}>{children}</h2>,
		h3: ({ children }) => (
			<h3 className={'text-2xl font-semibold'}>{children}</h3>
		),
		a: ({ children, href }) => (
			<a className={'font-medium'} href={href} target={'_blank'}>
				{children}
			</a>
		),
		ul: ({ children }) => <ul className={'pl-6'}>{children}</ul>,
		...components,
	};
}
