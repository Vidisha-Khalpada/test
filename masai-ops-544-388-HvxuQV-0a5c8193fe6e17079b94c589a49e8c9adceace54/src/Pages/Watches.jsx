import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";
import GetWatchData from "../Redux/AppReducer/action";
import WatchCard from "../Components/WatchCard";
const Watches = () => {
  const storedata=useSelector((storedata)=>
  {
    console.log(storedata)
    return storedata.watch.watches
  })
  const dispatch=useDispatch()
  useEffect(()=>
  {
    dispatch(GetWatchData(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/watches`))
  },[dispatch])
  return (
    <div>
      <Filter />
      <div>
        {/* Map through the watch list here using WatchCard Component */}
        {
          storedata.map((ele,i)=>
          {
            return <WatchCard key={i} id={ele.id} image={ele.image} name={ele.name} category={ele.category}/>
          })
        }
      </div>
    </div>
  );
};

export default Watches;
