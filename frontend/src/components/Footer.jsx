import AboutUs from "../content/AboutUs.json";
import Social from "../content/Social.json";

const FooterSection = ({ content }) => {
  return (
    <section className="m-20">
      <p className="font-bold text-xl text-white">{content.title}</p>
      <ul className="font-medium text-base text-slate-100">
        {content.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-indigo-500 flex flex-row justify-center">
      <FooterSection content={AboutUs} />
      <FooterSection content={Social} />
    </footer>
  );
};

export default Footer;
