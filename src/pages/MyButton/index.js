
import {useState} from "react";
import './index.css'
function MyButton(){

    const [isFocused, setIsFocused] = useState(false);


    const handleFocus = ()=>{
        setIsFocused(true);
    }

    const handleBlur = ()=> {
        setIsFocused(false);
    }

    return (
        <div>
            <button className={isFocused? 'focused': ''} onMouseEnter={handleFocus} onMouseLeave={handleBlur}>
                MyButton
            </button>
        </div>
    )

}

export default MyButton