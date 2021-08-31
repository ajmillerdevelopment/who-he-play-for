import * as React from "react"
import data from '../helpers/data'
import getRandomInt from "../helpers/getRandomInt"
import checkAnswers from '../helpers/checkAnswers'
// markup
const IndexPage = () => {
  const init = getRandomInt(0, (data.length + 1))
  const [current, setcurrent] = React.useState(data[init])
  const [answer, setAnswer] = React.useState(null)
  const submitAnswer = (event) => {
    event.preventDefault()
    console.log(`checking ${current.name}`)
    console.log(checkAnswers(answer, current))
    data.forEach((elem, i) => {
      //set a new player to guess
      if (elem.name === current.name) {
        data.splice(i, 1)
      }
    setcurrent(data[getRandomInt(0, (data.length))])
    })
  }
  console.log(current)
  return (
   <main className="min-h-screen bg-yellow-50 flex flex-col items-center">
     <h1 className="font-display text-4xl text-center p-4">Who He Play For?</h1>
     <p className="font-sans text-center px-4">Can you guess what team these players play for now?</p>
     <p className="font-sans text-center px-4">{data.length}/60</p>
     <p className="font-sans font-bold text-center m-4 text-2xl">{current.name}</p>
     <img src={current.img} alt={current.name} className="rounded shadow-2xl"/>
     <form onSubmit={submitAnswer}>
       <input type="text" className="rounded shadow-lg border-2 p-1 m-4 border-gray-600" name="team" id="team" onChange={e => setAnswer(e.target.value)}/>
       <br/>
       <input type="submit" value="Submit" />
     </form>
   </main>
  )
}

export default IndexPage
