export default async function handler(req, res) {
	const { registrationNumber } = req.query;
	const response = await fetch(
		`https://autosys-kjoretoy-api.atlas.vegvesen.no/enkeltoppslag/kjoretoydata?kjennemerke=${registrationNumber}`,
		{
			method: "GET",
			headers: {
				"SVV-Authorization": `Apikey ${process.env.NEXT_PUBLIC_API_KEY}`,
			},
		}
	);

	if (response.ok) {
		const data = await response.json();
		res.status(200).json(data);
	} else {
		res.status(response.status).json({ error: "Error fetching data" });
	}
}
