import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const hendaluserAdd = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUsers = {name, email};

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },

            body:JSON.stringify(newUsers)
        })
        
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("Wow Your Data Is Added")
                e.target.reset();
            }
        })

        


        e.preventDefault();

    }


    return (
        <div>
            <h2>Please Add An User</h2>
            <form onSubmit={hendaluserAdd}>
                <input type="text" ref={nameRef} />
                <input type="email" name="" id="" ref={emailRef} />
                <input type="submit" value="Add" />
                
            </form>
        </div>
    );
};

export default AddUser;