import localFont from "next/font/local";
import Search from "./components/Search/Search";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export default function Home() {
	return (
		<div
			className={`${geistSans.variable} ${geistMono.variable} items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
		>
			<h1 className="text-3xl font-bold mb-8">Søk etter kjøretøy</h1>
			<Search />
		</div>
	);
}
