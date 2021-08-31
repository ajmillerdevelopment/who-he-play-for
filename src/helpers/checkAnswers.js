import answers from './answers'
const checkAnswers = (submitted, current) => {
    let returnValue = null
    if (submitted === null) {
        returnValue = 'bad syntax'
        return returnValue
    }
    submitted = submitted.toLowerCase()
    submitted = submitted.trim()
    current.team = current.team.toLowerCase()
    console.log(`submitted: ${submitted} current: ${current.team}`)
    if (submitted === current.team) {
        console.log(`Marking True...`)
        returnValue = 'correct'
        return returnValue
    }
    answers.forEach((elem) => {
        if (elem.team === current.team) {
            console.log(`match`)
            if (submitted === elem.city || submitted === elem.mascot || submitted === elem.full) {
                console.log(`Marking True...`)
                returnValue = 'correct'
            }
            else if (elem.alts) {
                elem.alts.forEach((alt) => {
                    if (submitted === alt) {
                        console.log(`Marking True...`)
                        returnValue = 'correct'
                    }
                })
            }
        }
        if (!returnValue) {
            console.log(`comping ${submitted} and ${elem.team}`)
            if (submitted === elem.team || submitted === elem.city || submitted === elem.mascot || submitted === elem.full) {
                console.log(`Marking False...`)
                returnValue = 'false'
            } 
            if (elem.alts) {
                elem.alts.forEach((alt) => {
                    if (submitted === alt) {
                        console.log(`Marking False...`)
                        returnValue = 'false'
                    }
                })
            }
        }
    if (!returnValue) {
        console.log(`Marking Bad Syntax...`)
        returnValue = 'bad syntax'
    }
    })
    return returnValue
}
export default checkAnswers