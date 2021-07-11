import React from 'react'
import './Item.css'

const Item = (props) => {
    //porops cannot be directly modifieddd , you should try to modify it by assigning it to another variable using let;)
    ///to avoid writing the props
    const{cal,title} = props;
    // console.log(props);
    return (
        <div className="item">
            <h1>Item Name : {title}</h1>
            <br/>
            <h3>You Have Consumed {cal} cals today</h3>
        </div>
    )
}

export default Item;
