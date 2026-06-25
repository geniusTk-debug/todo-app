import { useEffect } from "react";



export default function Api({addPlan}) {
 
 let url = 'http://localhost:3000/plan';

  useEffect(() => {
    fetch(url)
  .then(res => res.json())
  .then(data => {
    addPlan(data)
    console.log("planss")
  })
  }, [url, addPlan])
     {/*addPlan((prevState) => [...prevState,

      {
        id: id,
        todo: todoText,
        time: new Date().toLocaleTimeString()
      }

    ])

    e.target.reset();

      //Optional
    //showInput(false);*/}
    
    
    
    return (
       <>
       </>
  )
}

