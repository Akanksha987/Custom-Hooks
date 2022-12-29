import React, { useState,useEffect } from 'react'

function saveValue(key,initialValue){
  const save = JSON.parse(localStorage.getItem(key));
  const saveSession = JSON.parse(sessionStorage.getItem(key));

  if(save){
    return save;
  }

  if(saveSession){
    return saveSession;
  }

  else{
    return initialValue;
  }
}

export default function useLocalStorage(key,initialValue) {
  
  const [value, setValue] = useState(()=>{
    return saveValue(key,initialValue);
  })

  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
    sessionStorage.setItem(key,JSON.stringify(value))
  },[key,value])

  return (
    [value,setValue]
  )
}
