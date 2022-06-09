import React from 'react';

import Cards from '../components/Cards'

import { useQuery } from '@apollo/client'
import { QUERY_JARGONS } from '../utils/queries'

const mockData = [
  {
    jargonBody: "JSON",
    jargonDef: "JavaScript Object Notation"
  },
  {
    jargonBody: "AFK",
    jargonDef: "Away From Keyboard"
  }
]


const Homepage = () => {
  const {loading, data} = useQuery(QUERY_JARGONS)
  const jargonData = data?.jargons
  console.log(data)
  return (
    <div style={{ paddingBottom: "200px"}}> 

      <h1>Homepage</h1>
      {jargonData.map((Jargon)=> (
        <Cards 
        body = {Jargon.jargonBody}
        def = {Jargon.jargonDef}
        />
      ))}
     

    </div>
  )
}

export default Homepage