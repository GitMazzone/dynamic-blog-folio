'use client';

import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from 'react';
import { ContentMetadata } from '@/types';
import { usePathname } from 'next/navigation';
import { contentMetadata } from '@/content';

interface ContentMetadataContextProps {
	metadata: ContentMetadata | null;
}

const ContentMetadataContext = createContext<
	ContentMetadataContextProps | undefined
>(undefined);

export const useContentMetadata = () => {
	const context = useContext(ContentMetadataContext);
	if (!context) {
		throw new Error(
			'useContentMetadata must be used within a ContentMetadataProvider'
		);
	}
	return context;
};

export const ContentMetadataProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const pathname = usePathname();
	const [metadata, setMetadata] = useState<ContentMetadata | null>(null);

	useEffect(() => {
		const pathSegments = pathname.split('/').filter(Boolean);
		const slug = pathSegments[pathSegments.length - 1] || '';

		const content = contentMetadata.find((item) => item.slug === slug);
		setMetadata(content || null);
	}, [pathname]);

	return (
		<ContentMetadataContext.Provider value={{ metadata }}>
			{children}
		</ContentMetadataContext.Provider>
	);
};
