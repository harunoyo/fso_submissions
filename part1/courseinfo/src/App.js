const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
  <div>
    <p>
      {props.part} {props.ex}
    </p>
  </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        <Part part={props.input[0].name} ex={props.input[0].exercises} />
        <Part part={props.input[1].name} ex={props.input[1].exercises} />
        <Part part={props.input[2].name} ex={props.input[2].exercises} />
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.input[0].exercises + 
      props.input[1].exercises + props.input[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    { 
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
    ]
  }

  return (
    <div>
      <Header text={course.name}/>
      <Content input={course.parts} />
      <Total input={course.parts} />
    </div>
  )
}

export default App;
