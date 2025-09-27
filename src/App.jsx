import "./App.css";
import Navber from "./component/Navber";
import Banner from "./banner/Banner";
import Footer from "./component/Footer/Footer"
import Functionality from "./component/Functionality/Functionality"
import { useState } from "react";

  



const CostomerData = async ()=>{
  const res = await fetch("/Coustmer.json")
  return res.json()
}          
const CostomersPromis = CostomerData()



function App() {
  // const [TicatCostomer,setTicatCostomer]=useState([...CostomersPromis])
  // console.log(setTicatCostomer)
 
  const [InProgress,setInProgress] = useState(0);
  const [Resolve,setResolve] = useState(0); 
  
  const [TasksResolv,setTasksResolv]=useState([])
  console.log(TasksResolv)
  const [costomerRemove,setcostomerRemove]=useState([])
  console.log(costomerRemove)




  const RemoveCostomer =()=>{
    

    
    // const deletItem =costomerRemove.filter(item=>item.title!==title)
    // setcostomerRemove(deletItem)
    // const Deletecostomor = costomerRemove.filter(costomer=>console.log(costomer.title))
    // 
  }
 
  
  
  
  return (
    <>
      <Navber></Navber>
      <Banner InProgress={InProgress} Resolve={Resolve}></Banner>
      <Functionality CostomersPromis={CostomersPromis} InProgress={InProgress} setInProgress={setInProgress}   Resolve={Resolve} setResolve={setResolve} TasksResolv={TasksResolv} setTasksResolv={setTasksResolv}   RemoveCostomer={ RemoveCostomer} costomerRemove={costomerRemove} setcostomerRemove={setcostomerRemove}></Functionality>
      <Footer></Footer>
     
      
    </>
  );
}


export default App;
