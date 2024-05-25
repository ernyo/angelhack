import Button from "../assets/Button.jsx"

const ContentBlockLeft = ({title, img, text, href, p}) => {
  return (
    <section className="my-40 mx-60 h-48 flex justify-around">
        <section className="flex flex-col justify-between">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-wrap">{p}</p>
            <Button text={text} href={href}/>
        </section>
        <img src={img}/>
    </section>
  )
}

const ContentBlockRight = ({title, img, text, href, p}) => {
  return (
    <section className="my-40 mx-60 h-48 flex justify-around">
        <img src={img}/>
        <section className="flex flex-col justify-between">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-wrap">{p}</p>
            <Button text={text} href={href} />
        </section>
    </section>
  )
}

const ContentBlock = ({direction, title, img, text, href, p}) => {
  return (
    <>
      {direction === "left" ? (
        <ContentBlockLeft title={title} img={img} text={text} href={href} p={p} />
      ) : (
        <ContentBlockRight title={title} img={img} text={text} href={href} p={p} />
      )}
    </>
  );
};

export default ContentBlock