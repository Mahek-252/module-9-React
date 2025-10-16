import React from 'react'

const Firstcomponent = () => {
     let arr = [10,20,30,40,50]
    let litag = arr.map((i)=> <li>{i}</li>)
  return (
    <div>
        <hr />
        First component created
        <h4>Addition {12+34}</h4>
            <ul> {litag}
                {/* {
                    arr.map((i,index)=>{
                        return(
                            <li key={index}>{i}</li>
                        )
                    })
                } */}
            </ul>
    </div>
  )
}
// function Firstcomponent(){
// }
export default Firstcomponent