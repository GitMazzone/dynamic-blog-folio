'use client';

import { FilterKey } from '@/types';
import { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextProps {
	filters: Record<FilterKey, boolean>;
	toggleFilter: (filter: FilterKey) => void;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const useFilter = () => {
	const context = useContext(FilterContext);
	if (!context) {
		throw new Error('useFilter must be used within a FilterProvider');
	}
	return context;
};

export const FilterProvider = ({ children }: { children: ReactNode }) => {
	const [filters, setFilters] = useState<Record<FilterKey, boolean>>({
		Blog: false,
		'UI/UX': false,
		'System Design': false,
		Philosophy: false,
		'Book Review': false,
	});

	const toggleFilter = (filter: FilterKey) => {
		setFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
	};

	return (
		<FilterContext.Provider value={{ filters, toggleFilter }}>
			{children}
		</FilterContext.Provider>
	);
};
