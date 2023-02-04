import React from "react";
import Box2 from "../components/box2";
import Box from "../components/box";
import Box4 from "../components/box4";
import Box3 from "../components/box3";

const Home = ()=>{
    return(
        <div className="w-[700px] h-[700px] bg-slate-500 m-auto mt-[10vh]">
            <div className="flex justify-between">
                <Box/>
                <Box2/>
            </div>
            <div className="flex justify-between mt-[36.2vh]">
                <Box3/>
                <Box4/>
            </div>
        </div>
    )
}
export default Home;