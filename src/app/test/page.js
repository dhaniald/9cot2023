'use client'

import { Button } from '@mui/material';
//1. Import area
import React, { useEffect, useState } from 'react'

//Defenation area
export default function page() {
    // 2.1 Hooks area
    const [name5, setName4] = useState('Sumit')  //Hooks 1
    console.log('Hello');

    useEffect(() => {  //Hook 2
        console.log(`Hello ${name5}, page loaded sucessfully, do anything now`)
    }, [])

    //2.2 Function defenation area
    const test1 = () => {
        console.log("Hello")
        let x = prclsompt("Please enter your name")
        console.log(x)
        setName4(x)
    }
    // 2.3 Function returning JSX
    return (
        <>  <div>Hello {name5}</div>
            <div>Test page</div>
            <Button variant="contained" onClick={() => { test1() }}>Enter Your name</Button>
        </>)
}

//3.Export area
//3.1 Default export
