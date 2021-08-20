import * as React from "react"
import data from '../helpers/data'
import getRandomInt from "../helpers/getRandomInt"
// markup
const IndexPage = () => {
  const init = getRandomInt(0, (data.length + 1))
  const [current, setcurrent] = React.useState(data[init])
  return (
   <main className="min-h-screen bg-yellow-50">
     <h1 className="font-display text-4xl text-center p-4">Who He Play For</h1>
     <p className="font-sans text-center px-4">Can you guess what team these players play for now?</p>
     <p className="font-sans font-bold text-center m-4 text-2xl">{current.name}</p>
   </main>
  )
}

export default IndexPage
