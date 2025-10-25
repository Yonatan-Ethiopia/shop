import AboutCard from "../components/aboutCard"
import services from "../assets/icons/phone.svg"
import products from "../assets/icons/products.svg"
import contact from "../assets/icons/contact.svg"
import phone from "../assets/icons/phone.svg"
import telegram from "../assets/icons/tg.svg"
function About(){
	const infoCards = [
  {
    img: services,
    headline: "Services",
    desc: "We create custom-made outfits designed by Win, tailored to your style. Our signature Shinewear pieces are crafted with care, ready in just two weeks.",
  },
  {
    img: products,
    headline: "Products",
    desc: "Explore premium electronics and skincare products imported from the USA and Dubai, quality guaranteed.",
  },
  {
    img:contact ,
    headline: "Contact us",
    desc: "Get in touch with us!",
    buttons: [
      { icon: phone, link: "tel:+251XXXXXXXX" },
      { icon: telegram, link: "https://t.me/sudo" },
    ],
  },
];

	return(
	<div className="About">
	    <AboutCard data={infoCards}/>
	</div>
	)
}
export default About;
