interface ResponseType {
	slip: {
		id: number;
		advice: string;
	};
}
export const fetchQuote = async () => {
	const response = await fetch('https://api.adviceslip.com/advice');

	const data: ResponseType = await response.json();

	return data.slip;
};
