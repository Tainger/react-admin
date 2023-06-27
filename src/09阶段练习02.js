import React from 'react'


function ListItem({item, delItem}) {
    return (
        <>
            <h1>{item.id}</h1>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <button onClick={()=>(delItem(item.id))}>删除</button>
        </>
    );

}

class Parent extends React.Component {


    state = {
        data: [
            {
                id: 1,
                name: 'dog',
                age: 17
            },
            {
                id: 2,
                name: 'cat',
                age: 18
            },
            {
                id: 3,
                name: 'plane',
                age: 20
            }
        ]
    }

    delItem = (id)=>{
        this.setState({
            data:this.state.data.filter((item)=>(item.id !== id))
        })
    }

    render() {
        return (
            <div>
                {this.state.data.map((item) => (
                    <ListItem key={item.id} item={item} delItem = {this.delItem}></ListItem>
                ))
                }
            </div>
        )
    }
}

export default Parent;
