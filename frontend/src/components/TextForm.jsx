import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const TextForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const content = e.target.elements.content.value; // Ensure the name attribute is correctly referenced
      const request = {
        "text": content,
        "language": "en",
      };
      const response = await axios.post("/submit-lesson-text", request);
      if (response.status === 200) {
        navigate(`/modules/${response.data.lesson_id}`, { state: { lessonData: response.data } });
      } else {
        console.error(response.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false)
    }
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <p className="font-semibold text-4xl mb-4">Enter Content of a News Article!</p>
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
      {loading && <ClipLoader color="#4A90E2" loading={loading} size={50} />}
    </form>
  );
};

export default TextForm;
