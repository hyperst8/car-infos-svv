import React from "react";
import Accordion from "../Accordion/Accordion";

const Content = ({ data }) => {
	console.log("from content", data);

	// Destructuring the data object
	const {
		registrering,
		periodiskKjoretoyKontroll,
		kjoretoyId,
		godkjenning,
		forstegangsregistrering,
	} = data;

	const regStatus =
		registrering.registreringsstatus.kodeBeskrivelse.toLowerCase();

	const forsteRegNorge = forstegangsregistrering.registrertForstegangNorgeDato;

	const forsteReg = godkjenning.forstegangsGodkjenning.forstegangRegistrertDato;

	const tekniskGodkjenning = godkjenning.tekniskGodkjenning;

	const tekniskeData = tekniskGodkjenning.tekniskeData;

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
			<h2 className="uppercase font-bold text-center text-2xl mb-8">
				{kjoretoyId.kjennemerke} {tekniskeData.generelt.merke[0].merke}{" "}
				{tekniskeData.generelt.handelsbetegnelse[0]}
			</h2>
			<Accordion title="EU-kontroll">
				<p className="font-bold">Sist godkjent</p>
				<span>{periodiskKjoretoyKontroll.sistGodkjent}</span>
				{periodiskKjoretoyKontroll.kontrollfrist && (
					<p className="font-bold">Neste frist for godkjent EU-kontroll</p>
				)}
				<span>{periodiskKjoretoyKontroll.kontrollfrist}</span>
			</Accordion>
			<Accordion title="Registreringsdata">
				<p className="font-bold">Kjøretøyets status</p>
				<span>{regStatus}</span>
				<p className="font-bold">Registreringsnummer</p>
				<span>{kjoretoyId.kjennemerke}</span>
				<p className="font-bold">Understellsnummer</p>
				<span>{kjoretoyId.understellsnummer}</span>
				<p className="font-bold">Kjøretøygruppe</p>
				<span>{tekniskGodkjenning.kjoretoyklassifisering.beskrivelse}</span>
				<p className="font-bold">Første gang registrert</p>
				<span>{forsteReg}</span>
				<p className="font-bold">Første gang registrert i Norge</p>
				<span>{forsteRegNorge}</span>
				<p className="font-bold">Antall seter</p>
				<span>{tekniskeData.persontall.sitteplasserTotalt}</span>
			</Accordion>
			<Accordion title="Tekniske data">
				<p className="font-bold">Egen vekt</p>
				<span>{tekniskeData.vekter.egenvekt} kg</span>
				<p className="font-bold">Nyttelast</p>
				<span>{tekniskeData.vekter.nyttelast} kg</span>
				<p className="font-bold">Tillatt total vekt</p>
				<span>{tekniskeData.vekter.tillattTotalvekt} kg</span>
				<p className="font-bold">Bredde</p>
				<span>{tekniskeData.dimensjoner.bredde / 10} cm</span>
				<p className="font-bold">Høyde</p>
				<span>{tekniskeData.dimensjoner.hoyde / 10} cm</span>
				<p className="font-bold">Lengde</p>
				<span>{tekniskeData.dimensjoner.lengde / 10} cm</span>
			</Accordion>
		</div>
	);
};

export default Content;
