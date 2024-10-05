'use client';

import { FilterTags } from '../FilterTags';
import {
	ContentMetadataProvider,
	useContentMetadata,
} from '@/context/ContentMetadataContext';

const HomeMetadata = () => {
	return (
		<>
			<h1 className={'text-3xl font-bold mb-2'}>Your Name</h1>
			<h2 className={'text-xl text-slate-600 mb-2'}>Software Engineer</h2>
			<p className={'text-slate-600 mb-4 md:mb-8'}>
				I have N+ years of experience and focus on Web development, scalable
				systems, and dev tooling.
			</p>
			<FilterTags />
		</>
	);
};

const SidebarMetadataContent = () => {
	const { metadata } = useContentMetadata();

	if (metadata) {
		return (
			<>
				<h1 className={'text-3xl font-bold mb-2'}>{metadata.title}</h1>
				<h2 className={'text-slate-600'}>{metadata.description}</h2>
			</>
		);
	} else {
		return <HomeMetadata />;
	}
};

export const SidebarMetadata = () => {
	return (
		<ContentMetadataProvider>
			<SidebarMetadataContent />
		</ContentMetadataProvider>
	);
};
