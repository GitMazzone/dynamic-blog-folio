'use client';

import { ContentCard } from '../ContentCard';
import { contentMetadata } from '@/content';
import { useFilter } from '@/context/FilterContext';

export const ContentCardGrid = () => {
	const { filters } = useFilter();

	const activeFilters = Object.entries(filters)
		.filter(([, isActive]) => isActive)
		.map(([filterName]) => filterName);

	const filteredContent = contentMetadata.filter((content) => {
		if (activeFilters.length === 0) return true; // No filters selected, show all
		return content.tags.some((tag) => activeFilters.includes(tag));
	});

	return (
		<section className={'grid xl:grid-cols-2 gap-6'}>
			{filteredContent.map((item) => (
				<ContentCard content={item} key={item.title + item.tags.length} />
			))}
		</section>
	);
};
