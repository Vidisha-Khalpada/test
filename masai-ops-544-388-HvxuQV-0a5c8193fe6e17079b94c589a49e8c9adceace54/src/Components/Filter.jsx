import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {useSearchParams } from "react-router-dom";
import GetWatchData from "../Redux/AppReducer/action";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  let [params,setparam]=useSearchParams()
  let [category,setcategory]=useState([])
  let dispatch=useDispatch()
  useEffect(()=>
  {
    setparam({category:category})
    let s=""
    for(let i=0;i<category.length;i++)
    {
        s+="category="+category[i]+"&"
    }
    console.log(s)
    dispatch(GetWatchData(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/watches?${s}`))
  },[category,dispatch])
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog" onChange={(e)=>
          {  
            let value=e.target.value
            let check=e.target.checked
            console.log(value,check)
            if(check)
            {
              setcategory([...category,value])
            }
            else
            {
              let arr=category.filter((ele)=>
              {
                return (ele!==value)
              })
              setcategory(arr)
            }
              
          }}/>
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" onChange={(e)=>
          {  
            let value=e.target.value
            let check=e.target.checked
            console.log(value,check)
            if(check)
            {
              setcategory([...category,value])
            }
            else
            {
              let arr=category.filter((ele)=>
              {
                return (ele!==value)
              })
              setcategory(arr)
            }
              
          }} />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" onChange={(e)=>
          {  
            let value=e.target.value
            let check=e.target.checked
            console.log(value,check)
            if(check)
            {
              setcategory([...category,value])
            }
            else
            {
              let arr=category.filter((ele)=>
              {
                return (ele!==value)
              })
              setcategory(arr)
            }
              
          }}/>
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
