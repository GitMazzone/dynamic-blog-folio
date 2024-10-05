import { Metadata } from 'next';
import { contentMap } from '@/content';

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	return {
		title: `Your Name | ${params.slug}`,
		description: `${params.slug} | Content by Your Name`,
	};
}

export default function ContentPage({ params }: { params: { slug: string } }) {
	const { slug } = params;

	const ContentComponent = contentMap[slug];

	if (!ContentComponent) {
		return <div className={'p-4'}>Content not found: {slug}</div>;
	}

	return <ContentComponent />;
}
