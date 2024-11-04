import useCarHooks from "@/hooks/useCarHooks";

const Search = () => {
	const { registrationNumber, disabled, fetchVehicleData, handleInputChange } =
		useCarHooks();

	return (
		<form onSubmit={fetchVehicleData}>
			<div className="flex justify-between gap-8">
				<div className="flex">
					<input
						className="border border-gray-300 rounded-md p-2 w-full uppercase"
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
