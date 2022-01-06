import React, { useState,useEffect } from "react";
import axios from 'axios'
import Header from "./components/ui/Header";
import "./App.css";
import CharacterGrid from "./components/charatcters/CharacterGrid";
import Search from "./components/ui/Search";

const App = () => {
  const[items, setItems] = useState([])
  const[isLoading, setisLoading] = useState(true)
  const[query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      console.log(result.data)

      setItems(result.data)
      setisLoading(false)
    }
    fetchItems()
  },[query])

  return (
    <div className="App">
      <Header/>
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
};

export default App;
