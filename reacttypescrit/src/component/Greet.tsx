type greetProp = {
    name:string
} 

const Greet = (props:greetProp) => {
  return (
    <div>
        <h2>Welcome {} to my Typescript Class</h2>
    </div>
  )
}

export default Greet