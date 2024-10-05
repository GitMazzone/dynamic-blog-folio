import { Linkedin, Mail } from 'lucide-react';
import {
	RiGithubLine as GitHub,
	RiTwitterXFill as Twitter,
} from 'react-icons/ri';

type Social = {
	icon: React.ReactNode;
	text: string;
	href: string;
};

export const Socials = () => {
	const socials: Social[] = [
		{
			icon: <Linkedin width={15} height={15} />,
			text: 'LinkedIn',
			href: 'https://www.linkedin.com/in/yourLinkedIn/',
		},
		{
			icon: <GitHub width={15} height={15} />,
			text: 'GitHub',
			href: 'https://github.com/yourGitHub',
		},
		{
			icon: <Twitter width={15} height={15} />,
			text: 'Twitter',
			href: 'https://x.com/yourTwitter',
		},
		{
			icon: <Mail width={15} height={15} />,
			text: 'Email',
			href: 'mailto:yourName@gmail.com',
		},
	];
	return (
		<>
			{socials.map((link, index) => (
				<a
					className={
						'px-3 py-1 text-sm font-medium border border-slate-200 bg-slate-100 text-slate-600 rounded-md hover:bg-slate-200 transition-colors text-center'
					}
					href={link.href}
					key={link.text + index}
					target={'_blank'}
				>
					<span className={'flex items-center gap-2'}>
						{link.icon}
						{link.text}
					</span>
				</a>
			))}
		</>
	);
};
