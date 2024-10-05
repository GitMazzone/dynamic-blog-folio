import { FilterKey } from '@/types';

export const colorClasses = [
	{
		bg: 'bg-red-200',
		hover: 'hover:bg-red-300',
	},
	{
		bg: 'bg-yellow-200',
		hover: 'hover:bg-yellow-300',
	},
	{
		bg: 'bg-green-200',
		hover: 'hover:bg-green-300',
	},
	{
		bg: 'bg-blue-200',
		hover: 'hover:bg-blue-300',
	},
	{
		bg: 'bg-purple-200',
		hover: 'hover:bg-purple-300',
	},
	{
		bg: 'bg-teal-200',
		hover: 'hover:bg-teal-300',
	},
];

export const filterKeys: FilterKey[] = [
	'Blog',
	'UI/UX',
	'System Design',
	'Philosophy',
	'Book Review',
];

export const tagColorMap: Record<FilterKey, { bg: string; hover: string }> =
	{} as Record<FilterKey, { bg: string; hover: string }>;

filterKeys.forEach((filter, index) => {
	tagColorMap[filter] = colorClasses[index % colorClasses.length];
});
