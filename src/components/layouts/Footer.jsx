function Footer() {
	const footerYear = new Date().getFullYear();

	return (
		<footer className="footer p-6 bg-black text-white text-center">
			<p>Copyright &copy; {footerYear}, GreenCity, All rights reserved </p>
		</footer>
	);
}

export default Footer;
