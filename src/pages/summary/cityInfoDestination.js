import {
	API_KEY,
	API_LINK,
	API_UNITS,
} from "../first_page/options_form/cityInfo";

export const cityInfoDestination = () => {
	const weather = document.querySelector(".weather");
	const city = document.querySelector("#secondDestination");
	const citySliced = city.textContent.slice(0, -6);
	const secondDate = document.querySelector("#secondDate");
	const URL = API_LINK + citySliced + API_KEY + API_UNITS;
	const date = new Date();
	const array = secondDate.value.split("-");
	const year = Number(array[0]);
	const month = Number(array[1]);
	const day = Number(array[2]);
	const secondDayMs = new Date(year, month - 1, day);
	const difference = secondDayMs - date;
	//                                        ms     s    m    h
	const diffDays = Math.round(difference / (1000 * 60 * 60 * 24));
	const diffDaysAbsolute = Math.abs(diffDays);

	if (diffDaysAbsolute < 16) {
		axios.get(URL).then((response) => {
			const temp = response.data.main.temp;
			const temperature = Math.floor(temp) + "°C";
			weather.textContent = `Current weather in ${citySliced}: ${temperature}`;
		});
	}
};



