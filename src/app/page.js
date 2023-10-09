'use client'
//Import area
//Import DefacultImport from 'someLibrary/./someLocation'
import { useState } from 'react'
import styles from './page.module.css'


//Defenation area
let name1 = 'Hello World-1'  //Globale variable
//a variale defined outside function defenation is called globale variable
export default function Home() {

  //2.1 Hooks area
  // const [variable, setVariableFunction] = useState(Initial Data)
  const [name3, setVariableFunction] = useState('Hello World 3 - defined using Hook')
  let name2 = 'Hello World-2'
  //Every Function return something
  //Every function return some html i.e. JSX
  return (
    <main  >
      <h1>{name1} `&gt;` this is Globale variable</h1>
      <h1>{name2} `&gt;`This is a Local variable</h1>
      <h1>{name3} `&gt;`This is a Hook variable</h1>
    </main>
  )
}

//Export area