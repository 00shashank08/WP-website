import {useState, useEffect} from 'react';
const useFetch = (url) => {
    const [data,setdata]=useState(null);
    const [ispending ,setispending]=useState(true);

    useEffect(()=> {
        setTimeout(()=>{
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(data =>{
            setdata(data);
            setispending(false);
        })
    },1000)},[url]);
    
    return ({data,ispending});

}
 
export default useFetch;
