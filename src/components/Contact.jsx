function Contact() {
	return (
		<section id="contact" name="contact" className="w-full">
			<h1 className="text-center text-4xl lg:text-5xl font-bold">Contact Us</h1>
			<form className="flex flex-col items-center py-8">
				<div className="container px-6 md:w-[720px] lg:w-[780px] flex flex-col mt-8 items-center">
					<label
						className="mb-3 text-xl font-semibold self-start"
						htmlFor="name"
					>
						Name
					</label>
					<input
						className="w-[100%] h-[42px] rounded-md border-2 border-gray-300 bg-gray-200 outline-0 p-4"
						type="text"
						id="name"
						autoComplete="off"
					/>
				</div>
				<div className="container px-6 md:w-[720px] lg:w-[780px] flex flex-col mt-8 items-center">
					<label
						className="mb-3 text-xl font-semibold self-start"
						htmlFor="email"
					>
						Email
					</label>
					<input
						className="w-[100%] h-[42px] rounded-md border-2 border-gray-300 bg-gray-200 outline-0 p-4"
						type="email"
						id="email"
						autoComplete="off"
					/>
				</div>
				<div className="container px-6 md:w-[720px] lg:w-[780px] flex flex-col mt-8 items-center">
					<label
						className="mb-3 text-xl font-semibold self-start"
						htmlFor="phone"
					>
						Phone
					</label>
					<input
						className="w-[100%] h-[42px] rounded-md border-2 bborder-gray-300 bg-gray-200 outline-0 p-4"
						type="text"
						id="phone"
						autoComplete="off"
					/>
				</div>
				<div className="container px-6 md:w-[720px] lg:w-[780px] flex flex-col mt-8 items-center">
					<label
						className="mb-3 text-xl font-semibold self-start"
						htmlFor="message"
					>
						Message
					</label>
					<textarea
						className="w-[100%] h-[180px] rounded-md border-2 border-gray-300 bg-gray-200 outline-0 p-4"
						id="message"
						autoComplete="off"
					/>
				</div>
				<div className="w-full flex justify-center mt-8">
					<input
						className="bg-[#111] text-[#fffbfb] uppercase cursor-pointer outline-0 border-0 w-[50%] lg:w-[25%] py-3 rounded-md"
						type="button"
						value="Send"
					/>
				</div>
			</form>
		</section>
	);
}

export default Contact;