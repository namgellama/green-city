import AboutImg from '../assets/about-img.jpg';

function About() {
	return (
		<section className="w-full mt-[10rem] mb-6 text-black">
			<div id="about" className="container lg:w-[1200px] mx-auto">
				<div className="grid md:grid-cols-1fr] lg:grid-cols-2fr-1fr items-center gap-3">
					<div className="py-4 px-4 flex flex-col">
						<h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
							About Us
						</h1>
						<p className="text-xl font-semibold mb-5 text-justify">
							GreenCity, established in 2022 in Lalitpur, Nepal, is a socially
							responsible company that specializes in importing environmentally
							friendly products. Our mission is to provide high-quality,
							sustainable products that have a minimal environmental impact
							while promoting green living and environmental awareness in our
							community. With a focus on the local market and a commitment to
							our global responsibility, GreenCity is dedicated to making a
							positive impact both at home and abroad. Join us in our mission to
							create a greener future and contact us today to learn more about
							how we can help you!
						</p>
					</div>
					<div className="flex items-center justify-center">
						<img
							className=" mt-6 w-[400px] h-[280px] object-cover"
							style={{ boxShadow: '2px 3px 13px 3px #111' }}
							src={AboutImg}
							alt="About us image"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
