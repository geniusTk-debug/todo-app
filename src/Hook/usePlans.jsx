import { useCallback, useEffect, useState } from "react";

function usePlans(url) {
    const [data, setData] = useState([]);
    const [selectedPlanId, setSelectedPlanId] = useState(null);
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

    const showPlanDetail = useCallback((id) => {
      setSelectedPlanId(id);
      console.log("same check prevState id : ",id)
    }, []);

    const hidePlanDetail = useCallback(() => {
      setSelectedPlanId(null);
    }, []);
    
    console.log("same check selectedPlan Id : ", selectedPlanId)


 return { data, setData, deleteTodo, showPlanDetail, hidePlanDetail, selectedPlanId };
};

export default usePlans;
