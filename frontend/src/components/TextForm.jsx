const TextForm = () => {
    return (
      <form className="flex flex-col items-center">
        <p className="font-semibold text-4xl mb-4">Enter Content of a News Article!</p>
        <textarea className="w-1/2 h-56 px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Enter your content here..." />
        <input type="submit" value="Enter" className="py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md cursor-pointer hover:bg-indigo-600 w-48" />
      </form>
    );
  };
  
  export default TextForm;
  