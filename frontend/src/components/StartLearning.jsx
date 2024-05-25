import axios from '../api/axios'
import { useNavigate } from "react-router-dom";

const StartLearning = ({title, img, text, p}) => {
    const navigate = useNavigate();
    const fetchLessons = async () => {
        try {
            const response = await axios.get("/lessons")
            if (response.status === 200){
                navigate(`/modules`, { state: { lessonData: response.data } });
            } else {
                console.error(response.data)
            }
        } catch(e){
            console.error(e)
        }
    }

    return (
      <section className="my-40 mx-60 h-48 flex justify-around">
          <img src={img}/>
          <section className="flex flex-col justify-between">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-wrap">{p}</p>
            <button
            className="bg-indigo-500 text-white text-lg font-bold py-2 px-12 rounded-md flex justify-center w-1/2"
            onClick={fetchLessons}
            >
            <p>{text}</p>
            </button>
          </section>
      </section>
    )
  }

export default StartLearning