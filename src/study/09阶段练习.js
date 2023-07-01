import React from 'react'

class Parent extends React.Component {


    state = {
        data:[
            {
                id:1,
                name: 'dog',
                age: 17
            },
            {
                id:2,
                name: 'cat',
                age: 18
            },
            {
                id:3,
                name: 'plane',
                age: 20
            }
        ]
    }

    render() {

        return (
            <div>
                {   this.state.data.map((item)=>(
                    <div>
                        <h1>{item.id}</h1>
                        <p>{item.name}</p>
                        <p>{item.age}</p>
                    </div>
                    ))
                }
            </div>
        )
    }
}

export default Parent;
