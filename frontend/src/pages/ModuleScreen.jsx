import Lessons from "../content/Lessons.json";

const Grid = ({ lesson }) => {
    return (
        <div className="grid-item h-40 w-64 bg-indigo-500">
            <p>{lesson.lesson_id}</p>
        </div>
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
                {Lessons.map((lesson) => (
                    <Module key={lesson.lesson_id} lesson={lesson} />
                ))}
            </div>
        </div>
    );
};

export default ModuleScreen;
