
import {counterStore} from "../store/counter";
import {observer} from "mobx-react-lite";

function  Count() {


    return (
        <div>
            <h2>count 计数</h2>
            {counterStore.count}
            <button onClick={counterStore.addCount}>点击</button>
            <br/>
            <h2>computed点击</h2>
            {counterStore.filterList.join('-')}
            <button onClick={counterStore.addList}>computed点击</button>

        </div>
    )
}


export default observer(Count);
