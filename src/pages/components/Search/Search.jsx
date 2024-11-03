import { useState } from "react";

const Search = () => {
	const [registrationNumber, setRegistrationNumber] = useState("");
	const [vehicleData, setVehicleData] = useState(null);
	const [disabled, setDisabled] = useState(true);

	const fetchVehicleData = async (e) => {
		e.preventDefault();

		const response = await fetch(
			`/api/vehicle?registrationNumber=${registrationNumber}`
		);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
		} else {
			console.error("Error fetching data:", response.status);
		}
	};

	const handleInputChange = (event) => {
		setRegistrationNumber(event.target.value);
		setDisabled(event.target.value.length !== 7);
	};
	return (
		<form onSubmit={fetchVehicleData}>
			<div className="flex justify-between gap-8">
				<div className="flex">
					<input
						className="border border-gray-300 rounded-md p-2 w-full"
						type="text"
						id="registrationNumber"
						value={registrationNumber}
						onChange={handleInputChange}
						placeholder="Registreringsnummer"
					/>
				</div>
				<button
					className="border border-gray-300 rounded-md p-2 bg-slate-700 text-white disabled:opacity-50"
					type="submit"
					disabled={disabled}
				>
					Hent kjøretøydata
				</button>
			</div>
		</form>
	);
};
export default Search;
