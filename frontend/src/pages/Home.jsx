import ContentBlock from "../components/ContentBlock";

const Home = () => {
  return (
    <div className="">
        <ContentBlock direction="left" title="Text-to-Story" img="https://cdn-icons-png.flaticon.com/512/6802/6802191.png" text="Start Generating!" href="/text"/>
        <ContentBlock direction="right" title="URL-to-Story" img="https://assets-global.website-files.com/60f35132d5febb6f03ec9d7a/63f4c741a7d0d20425821fec_ICONFORSIGNUP_1.webp" text="Generate with URLs!" href="/url"/>
        <ContentBlock direction="left" title="Create a Story" img="https://cdn-icons-png.flaticon.com/512/856/856994.png" text="Let's Build!" href="/story"/>
        <ContentBlock direction="right" title="Online Modules" img="https://cdn-icons-png.flaticon.com/512/1042/1042401.png" text="Start Learning!" href="/modules"/>
    </div>
  );
};

export default Home;