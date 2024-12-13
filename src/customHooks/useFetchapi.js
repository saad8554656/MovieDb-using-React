import React, { useEffect, useState } from 'react'

export default function useFetchapi(apiPath) {
    var [apidata ,setApidata] = useState([]);

    useEffect(()=>{

        fetch(apiPath)
       .then(response=>response.json())
       .then(val=>{
        setApidata(val.results)
       })
    },[])
  return apidata;
  
}
