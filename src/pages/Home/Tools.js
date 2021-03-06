import React, { useEffect, useState } from "react";
import useTools from "../../hooks/useTools";
import Loading from "../Shared/Loading";
import Tool from "./Tool";

const Tools = () => {
  const [tools] = useTools();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tools?.length > 0) {
      setLoading(false);
    }
  }, [tools]);

  if (loading) {
    return <Loading></Loading>;
  }
  /*   const [tools, SetTools] = useState([]);
  const [loading, setLoading] = useState(true);
  
  if (tools?.length > 0) {
    setLoading(false);
  }
  useEffect(() => {
    fetch("https://shrouded-mountain-11163.herokuapp.com/tools", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        SetTools(data);
      
        
      });
  }, [loading]);

 

  if (loading) {
    return <Loading></Loading>;
  } */

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-8 sm:px-6 px-12 max-w-7xl mx-auto">
      {tools
        .slice(-6)
        .reverse()
        .map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
    </div>
  );
};

export default Tools;
