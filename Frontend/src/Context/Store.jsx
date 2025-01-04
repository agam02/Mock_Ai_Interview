import React, { createContext, useEffect, useState } from 'react'

export const storeContext=createContext(null);


const Store = (props) => {


    const [token,setToken]=useState("");


    useEffect(()=>{
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
    },[])

    const contextValue={
      token,
      setToken
    }


  return (
    <storeContext.Provider value={contextValue}>
        {props.children}
    </storeContext.Provider>
  )
}

export default Store