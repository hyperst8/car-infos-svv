import React, { useState } from "react";

const Accordion = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => setIsOpen(!isOpen);

	return (
		<div className="border-b border-gray-200">
			<button
				onClick={toggleAccordion}
				className="flex justify-between items-center w-full mb-4 p-4 bg-gray-100 text-left text-gray-700 font-semibold hover:bg-gray-200 focus:outline-none"
			>
				<span>{title}</span>
				<span
					className={`${
						isOpen ? "rotate-180" : ""
					} transform transition-transform`}
				>
					▼
				</span>
			</button>
			<div
				className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
					isOpen ? "max-h-screen" : "max-h-0"
				}`}
			>
				<div className="p-4 bg-white">{children}</div>
			</div>
		</div>
	);
};

export default Accordion;
