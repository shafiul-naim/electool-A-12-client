import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToolDetails = () => {
  const { toolId } = useParams();
  const [tool, setTool] = useState([]);

  useEffect(() => {
      const url = `tools.json/${toolId}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [toolId]);
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={tool.img} alt="..." />
        <div>
          <h1 class="text-5xl font-bold">{tool.name}</h1>
          <p className="">{tool.description}</p>
          <p className="text-xl">Price per unit: {tool.ppu}</p>
          <p className="text-xl">Minimum quantity: {tool.minimumQuantity}</p>
          <p className="text-xl">Maximum quantity: {tool.maximumQuantity}</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
