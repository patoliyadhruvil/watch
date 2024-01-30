import { useEffect, useState } from "react"

const Counter = () =>{

    const [hour , sethour] = useState(0);
    const [minute , setminute] = useState(0);
    const [second , setsecond] = useState(0);

    useEffect(()=>{

        const clock = setInterval(()=>{
            if(second == 60){
                if(minute == 60){
                    sethour(hour + 1);
                    setminute(0);
                }else{
                    setminute(minute + 1);
                    setsecond(0);
                }
            }
            else{
                setsecond(second + 1);
            }
        } ,1000);

        return () => clearInterval(clock);

    },[second,minute,hour])


    return(

        <div>
            <h1>Timing</h1>
            <p>{hour}:{minute}:{second}</p>
        </div>

    )
}
export default Counter;

