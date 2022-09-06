type greetProp = {
    name:string,
    season:number
} 

const Greet = (props:greetProp) => {
  return (
    <div>
        <h2> Welcome {props.name} to my Typescript {props.season} Class </h2>
    </div>
  )
}

export default Greet