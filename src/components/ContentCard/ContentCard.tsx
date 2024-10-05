import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ContentMetadata } from '@/types';
import { tagColorMap } from '@/utils';

interface ContentCardProps {
	content: ContentMetadata;
}

export const ContentCard: FC<ContentCardProps> = ({ content }) => {
	const { card } = content;
	return (
		<div
			className={
				'bg-white border border-slate-100 rounded-lg overflow-hidden shadow-md'
			}
		>
			<div className={'relative'}>
				<Image
					src={card.imageSrc}
					alt={`Screenshot of ${card.title}`}
					width={600}
					height={400}
					className={'w-full h-48 object-contain p-2'}
					priority
				/>
				<div className={'absolute bottom-1 left-1 flex flex-wrap gap-1'}>
					{content.tags.map((tag, index) => {
						const colors = tagColorMap[tag];
						return (
							<span
								key={tag + index + tag.length}
								className={`px-2 py-1 text-xs ${
									colors?.bg || 'bg-slate-100'
								} bg-opacity-90 text-slate-800 rounded-full`}
							>
								{tag}
							</span>
						);
					})}
				</div>
			</div>
			<div className={'p-4 bg-slate-50 border-t border-slate-100'}>
				<div className={'flex justify-between items-center'}>
					<h3 className={'text-xl font-semibold mb-2'}>{card.title}</h3>
					<Link
						href={`/content/${content.slug}`}
						className={
							'px-4 py-2 text-sm font-medium border border-slate-200 bg-slate-100 text-slate-800 rounded-full hover:bg-slate-200 transition-colors'
						}
					>
						View
					</Link>
				</div>
			</div>
		</div>
	);
};
