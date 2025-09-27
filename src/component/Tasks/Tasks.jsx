import React from 'react';

const Tasks = ({card,InProgress,setInProgress,Resolve,setResolve,TasksResolv, setTasksResolv,RemoveCard,RemoveCostomer,useCostomer ,setcostomerRemove}) => {
    
    const hendelDecrement =()=>{
        
        
         
        
        }
        const hendeleResolv = ()=>{
            
            // 
            RemoveCostomer(card)
            setcostomerRemove(useCostomer)
            setResolve(Resolve+1)
            setTasksResolv([...TasksResolv,card])
            RemoveCard(card)

            if(InProgress>0){
            return setInProgress(InProgress-1)
            
        }
            
           
        
        }
    return (
        <div onClick={()=>hendelDecrement(card)} className=' shadow-lg py-3 mb-5 '>
            <h1>{card}</h1>
            <button onClick={(e)=>{
                e.stopPropagation();
                hendeleResolv()
            }} className=' bg-green-500 text-white rounded-lg px-20 py-1  text-center '>Complete</button>
        </div>
    );
};

export default Tasks;