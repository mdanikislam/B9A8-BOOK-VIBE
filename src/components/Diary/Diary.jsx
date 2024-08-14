import { useEffect, useState } from "react";
import SingleDiary from "../SingleDiary/SingleDiary";


const Diary = () => {

    const [diaries,setDiaries]=useState([]);

    useEffect(()=>{
        fetch('./diary.json')
        .then(res => res.json())
        .then(data=> setDiaries(data))
    },[])
    return (
        <div  className="space-y-6">
            <h1 className="text-center py-10 text-[#FFF] font-bold text-[20px] lg:text-[40px] bg-green-600 rounded-3xl">B U Y - D I A R Y</h1>
            <div  className="flex flex-col gap-10 lg:grid grid-cols-2 lg:gap-10">
                {
                    diaries.map(diary=> <SingleDiary key={diary.id} diary={diary}></SingleDiary>)
                }
            </div>
        </div>
    );
};

export default Diary;