'use client';

import { useState, useEffect } from 'react';
import {
	ChevronDown,
	User,
	Book,
	House,
	Mail,
	FolderClosed,
	FolderOpen,
	CircleEllipsis,
} from 'lucide-react';
import Link from 'next/link';

type DropdownItem = {
	icon: React.ReactNode;
	text: string;
	description: string;
	href: string;
	isExternal?: boolean;
};

const dropdownItems: Record<string, DropdownItem[]> = {
	menu: [
		{
			icon: <House className={'w-6 h-6 mr-2'} />,
			text: 'Home',
			description: 'To the home page',
			href: '/',
		},
		{
			icon: <Book className={'w-6 h-6 mr-2'} />,
			text: 'Blog',
			description: 'My own thoughts',
			href: '/',
		},
	],
	yourName: [
		{
			icon: <User className={'w-6 h-6 mr-2'} />,
			text: 'LinkedIn',
			description: 'Connect with me',
			href: 'https://www.linkedin.com/in/yourLinkedIn/',
			isExternal: true,
		},
		{
			icon: <Mail className={'w-6 h-6 mr-2'} />,
			text: 'Email',
			description: 'yourName@gmail.com',
			href: 'mailto:yourName@gmail.com',
			isExternal: true,
		},
	],
};

const dropdowns = [
	{
		label: 'Menu',
		key: 'menu',
		items: dropdownItems.menu,
		color: 'pink',
		iconClosed: <CircleEllipsis className={'w-4 h-4 mr-1'} />,
		iconOpen: <CircleEllipsis className={'w-4 h-4 mr-1'} />,
	},
	{
		label: 'YourName',
		key: 'yourName',
		items: dropdownItems.yourName,
		color: 'blue',
		iconClosed: <FolderClosed className={'w-4 h-4 mr-1'} />,
		iconOpen: <FolderOpen className={'w-4 h-4 mr-1'} />,
	},
];

const colorClasses: Record<
	string,
	{ border: string; button: string; itemHover: string; itemBackground: string }
> = {
	pink: {
		border: 'border-pink-200',
		button: 'bg-pink-100 hover:bg-pink-200 text-pink-800 border-pink-200',
		itemHover: 'hover:bg-pink-50',
		itemBackground: 'bg-pink-50',
	},
	blue: {
		border: 'border-blue-200',
		button: 'bg-blue-100 hover:bg-blue-200 text-blue-800 border-blue-200',
		itemHover: 'hover:bg-blue-50',
		itemBackground: 'bg-blue-50',
	},
};

export const Nav = () => {
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

	const toggleDropdown = (key: string) => {
		setOpenDropdown((prev) => (prev === key ? null : key));
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (openDropdown) {
				const dropdownElement = document.getElementById(
					`dropdown-${openDropdown}`
				);
				if (
					dropdownElement &&
					!dropdownElement.contains(event.target as Node)
				) {
					setOpenDropdown(null);
				}
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [openDropdown]);

	return (
		<div className={'flex items-center space-x-2 mb-8'}>
			{dropdowns.map((dropdown) => (
				<div
					key={dropdown.key}
					className={'relative'}
					id={`dropdown-${dropdown.key}`}
				>
					<button
						className={`px-3 py-1 text-sm font-medium rounded-md transition-colors flex items-center border ${
							colorClasses[dropdown.color].button
						}`}
						onClick={() => toggleDropdown(dropdown.key)}
					>
						{dropdown.iconClosed && (
							<>
								{openDropdown === dropdown.key ? (
									<>{dropdown.iconOpen}</>
								) : (
									<>{dropdown.iconClosed}</>
								)}
							</>
						)}
						{dropdown.label}
						<ChevronDown
							className={`inline-block w-4 h-4 ml-1 transition-transform duration-300 ${
								openDropdown === dropdown.key ? '-rotate-180' : ''
							}`}
						/>
					</button>
					{openDropdown === dropdown.key && (
						<div
							className={`absolute z-10 mt-2 w-64 p-3 space-y-1 bg-white rounded-md shadow-lg border ${
								colorClasses[dropdown.color].border
							}`}
						>
							{dropdown.items.map((item, index) => (
								<div
									key={item.text + index}
									className={`flex items-center px-4 py-3 rounded-md cursor-pointer transition-colors ${
										colorClasses[dropdown.color].itemHover
									}`}
								>
									{item.isExternal ? (
										<a
											className={'flex items-center'}
											href={item.href}
											target={'_blank'}
											rel={'noopener noreferrer'}
										>
											{item.icon}
											<div>
												<div className={'text-sm font-medium'}>{item.text}</div>
												<div className={'text-xs text-slate-500'}>
													{item.description}
												</div>
											</div>
										</a>
									) : (
										<Link className={'flex items-center'} href={item.href}>
											{item.icon}
											<div>
												<div className={'text-sm font-medium'}>{item.text}</div>
												<div className={'text-xs text-slate-500'}>
													{item.description}
												</div>
											</div>
										</Link>
									)}
								</div>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
};
