import ContentBlock from "../components/ContentBlock";
import Content from "../content/Content.json";
import Footer from "../components/Footer";
import StartLearning from "../components/StartLearning";

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
      <StartLearning 
          title={"Online Modules"} 
          img={"https://cdn-icons-png.flaticon.com/512/1042/1042401.png"} 
          text={"Start Learning!"} 
          p={"Choose from our range of financial modules on savings, insurance, and more. Perfect for personal growth and ensuring your golden years are huat ah! Let's get smart about money."}
        />
      <Footer />
    </div>
  );
};

export default Home;
