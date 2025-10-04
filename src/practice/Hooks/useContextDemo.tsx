
import { createContext, useContext, useState } from "react";

const UserContext = createContext("");

function Component1() {

    const [user, setUser] = useState('sameer');

    return(
        <>
            <UserContext.Provider value={user}>
                <div>I am Component 1 </div>
                <div>Hello <b>{user}</b></div>
                <Component2 />
            </UserContext.Provider>
        </>
    )
}

export default Component1;

function Component2(){
 return(
        <>
            <div>I am Component 2 </div>
            <Component3 />
        </>
    )
}

function Component3(){
      const user = useContext(UserContext);
 return(
        <>
         
            <div>I am Component 3 </div>
            <div>Hello <b>{user} again</b>`</div>
        </>
    )
}


/* 


PROPS Drilling issue with 3 components

import { useState } from "react";

function Component1() {

    const [user, setUser] = useState('sameer');

    return(
        <>
            <div>I am Component 1 </div>
            <div>Hello <b>{user}</b></div>
            <Component2 user={user}/>
        </>
    )
}

export default Component1;

function Component2(props: {user: string}){
 return(
        <>
            <div>I am Component 2 </div>
            <Component3 user={props.user}/>
        </>
    )
}

function Component3(props: {user: string}){
 return(
        <>
         
            <div>I am Component 3 </div>
            <div>Hello <b>{props.user} again</b></div>
        </>
    )
}
    */