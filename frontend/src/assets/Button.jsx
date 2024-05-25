const Button = ({text, href, callback}) => {
  return (
    <a
      className="bg-indigo-500 text-white text-lg font-bold py-2 px-12 rounded-md flex justify-center w-1/2"
      href={href}
      onClick={callback}
    >
      <p>{text}</p>
    </a>
  );
};

export default Button;
