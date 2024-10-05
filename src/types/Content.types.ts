import { FilterKey } from './Filter.types';

export type ContentMetadata = {
	card: ContentCard;
	title: string;
	description: string;
	tags: FilterKey[];
	slug: string;
};

export type ContentCard = {
	title: string;
	imageSrc: string;
};
