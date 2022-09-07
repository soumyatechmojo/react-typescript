type greetProp = {
    name:string,
    season:number,
    isLoggedin: boolean
} 

const Greet = (props:greetProp) => {
  return (
    <div>
        <h2> 
          {
            props.isLoggedin ? `Welcome ${props.name} to my Typescript ${props.season} Class` : 'Welcome Soumyadeep'
          }
          </h2>
    </div>
  )
}

export default Greet