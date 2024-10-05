'use client';

import { Check } from 'lucide-react';
import { useFilter } from '@/context/FilterContext';
import { colorClasses, filterKeys } from '@/utils';

export const FilterTags = () => {
	const { filters, toggleFilter } = useFilter();

	return (
		<div className={'flex flex-wrap gap-2'}>
			<p className={'w-full text-slate-500 text-xs'}>filter by content type</p>
			{filterKeys.map((filter, index) => {
				const isChecked = filters[filter];
				const colors = colorClasses[index % colorClasses.length];
				return (
					<button
						key={filter}
						className={`px-3 py-1 text-sm font-medium ${colors.bg} rounded-full ${colors.hover} transition-colors flex items-center`}
						onClick={() => toggleFilter(filter)}
					>
						<div
							className={
								'w-4 h-4 border border-slate-500 bg-neutral-50 rounded-full mr-2 flex items-center justify-center'
							}
						>
							{isChecked && <Check className={'w-3 h-3'} />}
						</div>
						{filter}
					</button>
				);
			})}
		</div>
	);
};
