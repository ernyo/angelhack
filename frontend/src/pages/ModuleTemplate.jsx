import { useNavigate, useLocation } from "react-router-dom";
import SceneCard from "../components/SceneCard";
import { useState } from "react";
import cafe from "../public/cafe.jpg"

const ModuleTemplate = () => {
    const [scene, setScene] = useState(0);
    const navigate = useNavigate();
    const location = useLocation()
    let { lessonData } = location.state;

    lessonData.scenes[lessonData.scenes.length-1].branching.next_scenes.Next_scene = -1
    const nextScenes = lessonData.scenes[scene].branching.next_scenes;

    const changeScene = (e) => {
        const buttonContent = e.target.textContent;
        if (nextScenes[buttonContent] === -1){
          navigate('/');
        } else if (nextScenes[buttonContent] === -2){
          setScene(scene+1);
        } else {
          setScene(nextScenes[buttonContent]);
        }
    };

    return (
        <div className="flex flex-row justify-center">
            <div className="w-1/2 relative bg-cover bg-center" style={{ backgroundImage: `url(${cafe})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <p className="mt-20 text-center text-white text-xl font-semibold">
                        {lessonData.scenes[scene].text}
                    </p>
                </div>
            </div>
            <div className="w-1/2">
                <p className="mt-20 text-center bg-slate-200 text-xl font-semibold text-wrap">
                    {lessonData.scenes[scene].branching.decision_point}
                </p>
                <div className="flex flex-col justify-center items-center mt-4 space-y-4">
                    {Object.keys(nextScenes).map((key, index) => (
                        <button
                            key={index}
                            onClick={changeScene}
                            className={`px-4 py-2 rounded shadow ${
                                index === 0 ? "bg-blue-500" : "bg-green-500"
                            } text-white`}
                        >
                            {key}
                        </button>
                    ))}
                </div>
                <SceneCard icons={lessonData.scenes[scene].icons} />
            </div>
            
        </div>
    );
};

export default ModuleTemplate;
