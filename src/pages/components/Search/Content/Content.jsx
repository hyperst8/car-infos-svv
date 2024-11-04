import React from "react";

const Content = ({ data }) => {
	console.log("from content", data);

	// Destructuring the data object
	const { registrering } = data;

	const regStatus =
		registrering.registreringsstatus.kodeBeskrivelse.toLowerCase();

	return (
		<div className="my-8">
			<div
				className={`${
					regStatus === "registrert"
						? "bg-[#e8f3e9] border-[#158925]"
						: "bg-[#e6f1f5] border-[#077197]"
				} border-2 my-6 px-8 py-6 border-rounded-md`}
			>
				<div>Kjøretøyet er {regStatus}</div>
			</div>
		</div>
	);
};

export default Content;
