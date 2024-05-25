import lesson1 from "../modules/lesson1.json";
import { Link } from "react-router-dom";

const Grid = ({ lesson }) => {
    return (
        <Link to={`/modules/${lesson.lesson_id}`}>
            <div className="grid-item h-40 w-64 bg-indigo-500 hover:rounded-xl">
                <p>{lesson.lesson_id}</p>
            </div>
        </Link>
    );
};

const Module = ({lesson}) => {
    return (
        <div>
            <Grid lesson={lesson}/>
            <p className="font-semibold">Module {lesson.lesson_id}: Financial Literacy</p>
        </div>
    )
}

const ModuleScreen = () => {

    return (
        <div className='flex justify-center my-32'>
            <div className="grid grid-cols-3 gap-8">
                <Module key={lesson1.lesson_id} lesson={lesson1} />
            </div>
        </div>
    );
};

export default ModuleScreen;
