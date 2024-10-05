import { ContentMetadata } from '@/types';
import { ComingSoon, MakingThisPortfolio } from './blogs';

export const contentMap: { [key: string]: React.ComponentType } = {
	'coming-soon': ComingSoon,
	'making-this-portfolio': MakingThisPortfolio,
};

export const contentMetadata: ContentMetadata[] = [
	{
		card: {
			title: 'This portfolio!',
			imageSrc: '/images/folio.webp',
		},
		title: 'Portfolio',
		description:
			'Built from scratch using React (NextJS with app router), TailwindCSS, and MDX for content.',
		tags: ['Blog', 'UI/UX'],
		slug: 'making-this-portfolio',
	},
	{
		card: {
			title: 'Lightweight: My first iOS app',
			imageSrc: '/images/lightweight.webp',
		},
		title: 'Lightweight',
		description:
			'An iOS app for tracking workouts. Built with React Native, Paper, and TailwindCSS.',
		tags: ['Blog', 'UI/UX', 'System Design'],
		slug: 'coming-soon',
	},
];
