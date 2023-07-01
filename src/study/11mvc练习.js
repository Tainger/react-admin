import React from 'react'


function ListItem({children}) {
    return (
        <>
            <p>{children}</p>
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
                    <ListItem key={item.id} item={item} delItem = {this.delItem}>
                        {<div>
                            <p>{'this is'}</p>
                        </div>}
                    </ListItem>
                ))
                }
            </div>
        )
    }
}

export default Parent;
