import { useEffect, useState } from "react";

function usePlans(url) {
    const [data, setData] = useState([]);
      useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
        .catch(err => console.log(err))
      }, [url]);

    const deleteTodo = async (id) => {
      try{
        const response =  await fetch(`http://localhost:3000/plans/${id}`, {
      method: 'DELETE'
      });
      
      if (!response.ok) {
           throw new Error ('Failed to delete. Check your internet connection or try again later',response.status)
      } else {
           const updatedData = await response.json();
           
           console.log(updatedData);
        }
      } catch (err) {
          console.error(err.message);
      }
    };
    



 return { data, setData, deleteTodo };
};

export default usePlans;