import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToolDetails = () => {
  const { toolId } = useParams();
  const [tool, setTool] = useState([]);

  useEffect(() => {
      const url = `http://localhost:5000/tools/${toolId}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [toolId]);
  return (
    <div class="hero min-h-screen bg-base-100 px-12">
      <div class="hero-content flex-col lg:flex-row-reverse p-5">
        <img src={tool.img} alt="..." className="max-w-sm rounded-lg shadow-xl" />
        <div>
          <h1 class="text-3xl font-bold">{tool.name}</h1>
          <p className="">{tool.description}</p>
          <p className="text-xl">Price per unit: {tool.ppu}</p>
          <p className="text-xl">Minimum quantity: {tool.minimumQuantity}</p>
          <p className="text-xl">Maximum quantity: {tool.maximumQuantity}</p>
          <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
