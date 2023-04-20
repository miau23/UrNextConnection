import { get, child , ref, getDatabase, onValue} from 'firebase/database';
import React, { useEffect} from 'react';
import {NavBar} from '../Tools/NavBar';


export const HomePage = () => {
    const database = ref(getDatabase(), 'users/');
    var keys = new Set();
    useEffect(() => {
        getAllUsers();
    }, []);
    
   function getAllUsers(){
        onValue(database, (snapshot) => {
            snapshot.forEach(childSnapshot => {
                keys.add(childSnapshot.key)
            })
        })
        console.log(keys.size);
        keys.forEach(value=>{
            console.log(value)
        })
        /*keys.forEach(onyen => {
            get(child(database2, 'users/'+ onyen))
            .then((snapshot) => {
                if(snapshot.exists()){
                    console.log(snapshot.val())
                }
                else{
                   console.log('no data found');
                }
            }) .catch((error) => {
                console.log(error);
            })
        })*/
    }


    return (
    <div>
        <NavBar></NavBar>
    </div>
    )
}