import { ArrowBigLeft, Home } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function ContentLayout({ children }: { children: ReactNode }) {
	return (
		<div className={''}>
			<Link
				aria-label={'Go back to home page'}
				href={'/'}
				className={
					'text-slate-500 hover:text-slate-700 hover:bg-slate-200 flex gap-1 items-center border border-slate-500 w-fit px-4 py-2 rounded-full transition-colors mb-4 md:mb-6'
				}
			>
				<ArrowBigLeft className={'w-6 h-6'} />
				<Home className={'w-6 h-6'} />
			</Link>
			{children}
		</div>
	);
}
