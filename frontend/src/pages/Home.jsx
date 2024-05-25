import ContentBlock from "../components/ContentBlock";
import Content from "../content/Content.json";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="">
      {Content.map((content, index) => (
        <ContentBlock 
          key={index}
          direction={content.direction} 
          title={content.title} 
          img={content.img} 
          text={content.text} 
          href={content.href}
          p={content.p}
        />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
