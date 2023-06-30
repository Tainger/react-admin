import {useState} from 'react'


function OK(){

    const [count, setCont] = useState(0);


    console.log(7)

    return(
        <div>
            <button onClick={()=>{setCont(count + 1); console.log(6)}}> {count}</button>
        </div>
    )
}


export default OK;
