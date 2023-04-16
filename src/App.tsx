import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import "dayjs/locale/en";

const adapterLocale = navigator.language.startsWith("ru") ? "ru" : "en";

export default function App() {
	const now = dayjs();

	return (
		<LocalizationProvider
			dateAdapter={AdapterDayjs}
			adapterLocale={adapterLocale}
		>
			<StaticDatePicker autoFocus defaultValue={now} />
		</LocalizationProvider>
	);
}
