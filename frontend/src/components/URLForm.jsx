import axios from "../api/axios"

const URLForm = () => {
  const handleSubmit = async (e) => {
    try{
        e.preventDefault();
        const content = e.target.elements.content.value;
        const links = content.split("\n").map((line) => line.trim());
        const response = await axios.post("links", links)
        if (response.status === 200){
            console.log()
        } else {
            console.error()
        }
    } catch(e){
        console.error(e)
    }
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <p className="font-semibold text-4xl mb-4">Enter Website Links!</p>
      <textarea
        name="content"
        className="w-1/2 h-56 px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        placeholder="Enter your content here..."
      />
      <input
        type="submit"
        value="Enter"
        className="py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md cursor-pointer hover:bg-indigo-600 w-48"
      />
    </form>
  );
};

export default URLForm;
