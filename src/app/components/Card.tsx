'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import iconDice from '../../../public/images/icon-dice.svg';
import patternDividerDesktop from '../../../public/images/pattern-divider-desktop.svg';
import patternDividerMobile from '../../../public/images/pattern-divider-mobile.svg';
import { fetchQuote } from '../lib/actions';
import Loader from './Loader';

const Card = () => {
	const [advice, setAdvice] = useState({
		id: 0,
		advice: '',
	});
	const [loading, setLoading] = useState(false);

	const callQuote = async () => {
		try {
			setLoading(true);
			const response = await fetchQuote();
			setAdvice(response);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const handleClick = async () => {
		await callQuote();
	};

	useEffect(() => {
		callQuote();
	}, []);

	return (
		<section className="relative bg-darkgrayishblue p-8 pb-16 rounded-md flex flex-col items-center gap-6 w-full md:max-w-96">
			<p className="text-neonGreen text-lg">ADVICE {advice.id}</p>

			{loading ? (
				<Loader />
			) : (
				<h2 className="text-2xl text-lightCyan text-center font-bold">
					&quot;{advice.advice}&quot;
				</h2>
			)}

			<Image
				alt="pattern divider"
				src={patternDividerDesktop}
				className="hidden md:block"
			/>
			<Image
				alt="pattern divider"
				src={patternDividerMobile}
				className="md:hidden"
			/>

			<div
				onClick={() => {
					handleClick();
				}}
				className="bg-neonGreen p-7 rounded-full cursor-pointer hover:drop-shadow-glow absolute bottom-[-40px]"
			>
				<Image alt="Icon dice" src={iconDice} />
			</div>
		</section>
	);
};

export default Card;
