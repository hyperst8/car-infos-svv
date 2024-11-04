import { useState } from "react";

const useCarHooks = () => {
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
			setVehicleData(data);
		} else {
			console.error("Error fetching data:", response.status);
		}
	};

	const handleInputChange = (event) => {
		setRegistrationNumber(event.target.value);
		setDisabled(event.target.value.length !== 7);
	};

	return {
		registrationNumber,
		vehicleData,
		disabled,
		fetchVehicleData,
		handleInputChange,
	};
};

export default useCarHooks;
