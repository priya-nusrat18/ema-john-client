import React from 'react';

const Inventory = () => {

    const handeAddProduct = () =>{
        const product = {}
        fetch('https://rocky-harbor-58398.herokuapp.com/addProducts' , {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(product)
        })
    }
    return (
        <div>
            <form action="">
                <p><span>name : </span><input type="text" /></p>
                <p><span>price:</span><input type="text" /></p>
                <p><span>quantity:</span><input type="text" /></p>
                <p><span>image :</span><input type="file" /></p>
            <button onClick={handeAddProduct}> add product</button>
            </form>
        </div>
    );
};

export default Inventory;