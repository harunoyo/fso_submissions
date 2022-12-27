import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [score, setScore] = useState(new Uint8Array(anecdotes.length))
  const [maxVotes, setMax] = useState({votes: 0, index: 0})

  
  const handleRandom = () => {
    let min = 0;
    let max = anecdotes.length-1;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleScore = () => {
    const vote = [...score]
    const mostVotes = {...maxVotes}
    vote[selected] += 1
    if (vote[selected] > mostVotes.votes) {
      mostVotes.index = selected
      mostVotes.votes = vote[selected]
      setMax(mostVotes)
    }
    setScore(vote)
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>   
      <button onClick={handleScore}>
      vote
      </button>  
      <button onClick={() => setSelected(handleRandom)}>
      next anecdote
      </button>
      <p>has {score[selected]} votes</p>
      <h1>Most popular anecdote</h1>
      <p>{anecdotes[maxVotes.index]}</p>
    </div>
  )
}

export default App;
