import * as React from "react"
import data from '../helpers/data'
import getRandomInt from "../helpers/getRandomInt"
import answerKey from '../helpers/answers'
// markup
const IndexPage = () => {
  const init = getRandomInt(0, (data.length + 1))
  const [current, setcurrent] = React.useState(data[init])
  const [answer, setAnswer] = React.useState(null)
  const submitAnswer = (event) => {
    event.preventDefault()
    data.forEach((elem, i) => {
      if (elem.name === current.name) {
        data.splice(i, 1)
      }
    setcurrent(data[getRandomInt(0, (data.length + 1))])
    })
  }
  return (
   <main className="min-h-screen bg-yellow-50 flex flex-col items-center">
     <h1 className="font-display text-4xl text-center p-4">Who He Play For</h1>
     <p className="font-sans text-center px-4">Can you guess what team these players play for now?</p>
     <p>Array Length: {data.length}</p>
     <p className="font-sans font-bold text-center m-4 text-2xl">{current.name}</p>
     <form onSubmit={submitAnswer}>
       <input type="text" name="team" id="team" onChange={e => setAnswer(e.target.value)}/>
       <br/>
       <input type="submit" value="Submit" />
     </form>
   </main>
  )
}

export default IndexPage
