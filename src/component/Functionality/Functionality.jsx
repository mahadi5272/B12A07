import React, { use, useState } from "react";
import CostomerCard from "../../CostomerCard/CostomerCard";
import Tasks from "../Tasks/Tasks";
import DeleteTask from "../DeleteTask/DeleteTask"
import TaskResolve from "../TaskResolv/TaskResolv"


const Functionality = ({ CostomersPromis, InProgress, setInProgress,TasksResolv,setTasksResolv,Resolve,setResolve, RemoveCostomer ,costomerRemove,setcostomerRemove}) => {
  const useCostomer = use(CostomersPromis);
  const [costomerTickt,setcostomerTickt]=useState([...useCostomer])
  const [selectCard,setselectCard] = useState([])


    const RemoveCard =(p)=>{
    const Deletecard = selectCard.filter(card=>card !== p)
    setselectCard(Deletecard)
    const DeleteCostomer = costomerTickt.filter(costomer=>costomer.title!==p)
    setcostomerTickt(DeleteCostomer)
    console.log(DeleteCostomer )
  }






  return (
    <div className="max-sm:grid-cols-1 grid grid-cols-2 gap-5 max-w-[1200px] m-auto">
      <div className="">
        <h1 className=" font-bold">Customer Tickets</h1>
        <div className="max-sm:grid-cols-1  grid grid-cols-2 gap-10 ">
          {costomerTickt.map((costomer) => (
            
            <CostomerCard
              costomer={costomer}
              InProgress={InProgress}
              setInProgress={setInProgress} selectCard={selectCard}
              setselectCard={setselectCard} costomerRemove={costomerRemove} setcostomerRemove={setcostomerRemove} RemoveCostomer={RemoveCostomer}
            ></CostomerCard>

          ))
          
          }
        </div>
      </div>
      <div className=" text-center">
        <h1 className=" font-bold">Task Status</h1>
        <div>
          
          <p>Select a ticket to add to Task Status</p>
          <div className="grid grid-cols-1">
            {selectCard.map(card=><Tasks  setResolve={setResolve} Resolve={Resolve} card={card} InProgress={InProgress} setInProgress={setInProgress} TasksResolv={TasksResolv} setTasksResolv={setTasksResolv} RemoveCard={RemoveCard} useCostomer={useCostomer}  RemoveCostomer={ RemoveCostomer} costomerRemove={costomerRemove} setcostomerRemove={setcostomerRemove}> </Tasks>)}
          </div>
        </div>
        <div>
          
            <h1>Resolved Task</h1>
           <div className=" grid grid-cols-1 ">
             {TasksResolv.map(TaskResolv=><TaskResolve TaskResolv={TaskResolv}></TaskResolve>)}
             
           </div>
        </div>
      </div>
      
    </div>
    
  );
  
};

export default Functionality;
