import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const CostomerCard = ({
  costomer,
  InProgress,
  setInProgress,
  selectCard,
  setselectCard,
  costomerRemove,
  setcostomerRemove,
  RemoveCostomer,
}) => {
  const hendelCount = (title) => {
    setInProgress(InProgress + 1);
    setselectCard([...selectCard, title]);
    toast.success(`${title} added successfully! `, {
      position: "top-right",
      autoClose: 2000,
    });
  };
  const costomerDelete = () => {
    console.log();
    setcostomerRemove([...costomerRemove, costomer]);
    RemoveCostomer(costomer);
  };

  return (
    <div
      onClick={() => hendelCount(costomer.title)}
      className="rounded-2xl p-5 mb-5 card  bg-base-100  shadow-sm"
    >
      <div className=" flex justify-between ">
        <h1 onClick={() => costomerDelete()} className=" ">
          {costomer.title}
        </h1>
        <p
          className={
            costomer.status === "Open"
              ? " bg-[#54CF68] p-2 rounded-lg"
              : " bg-amber-300 p-2 rounded-lg"
          }
        >
          {costomer.status}
        </p>
      </div>
      <p>{costomer.description}</p>
      <div className=" flex justify-around">
        <p>{costomer.id}</p>
        <p>{costomer.priority}</p>
        <p>{costomer.customer}</p>
        <p>{costomer.createdAt}</p>
      </div>
     
    </div>
  );
};

export default CostomerCard;
