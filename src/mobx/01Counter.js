
import {counterStore} from "../store/counter";
import {observer} from "mobx-react-lite";

function  Count() {


    return (
        <div>
            {counterStore.count}


            <button onClick={counterStore.addCount}>点击</button>
        </div>
    )
}


export default observer(Count);
