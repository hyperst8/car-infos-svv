import React from "react";
import Accordion from "../Accordion/Accordion";

const Content = ({ data }) => {
	console.log("from content", data);

	// Destructuring the data object
	const { registrering, periodiskKjoretoyKontroll } = data;

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
			<Accordion title="EU-kontroll">
				<p className="font-bold">Sist godkjent</p>
				<span>{periodiskKjoretoyKontroll.sistGodkjent}</span>
				<p className="font-bold">Neste frist for godkjent EU-kontroll</p>
				<span>{periodiskKjoretoyKontroll.kontrollfrist}</span>
			</Accordion>
			<Accordion title="Additional Vehicle Details">
				<p>Here you can add additional details about the vehicle.</p>
			</Accordion>
		</div>
	);
};

export default Content;
