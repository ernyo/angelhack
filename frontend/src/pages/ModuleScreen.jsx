import { useLocation, useNavigate } from "react-router-dom";

const Grid = ({ lesson, count }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/modules/${count}`,  { state: { lessonData: lesson } })
    }
    return (
        <div onClick={handleClick} className="grid-item h-28 w-40 bg-indigo-500 rounded-xl text-lg flex justify-center items-center text-white">
            <p className="font-semibold text-center">Module {count}</p>
        </div>
    );
};

const ModuleScreen = () => {
    let count = 1
    const location = useLocation();
    const { lessonData } = location.state || {}; // Handle undefined state
    console.log(lessonData);
    return (
        <div className='flex justify-center my-32'>
            <div className="grid grid-cols-3 gap-8">
                {lessonData && lessonData.map((lesson) => (
                    <Grid key={lesson.lesson_id} lesson={lesson} count={count++}/>
                ))}
            </div>
        </div>
    );
};

export default ModuleScreen;
