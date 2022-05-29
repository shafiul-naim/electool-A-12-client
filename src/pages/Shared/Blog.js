import React from "react";

const Blog = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-8 sm:px-6 px-12 max-w-7xl mx-auto my-8 ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How will you improve the performance of a React Application?
          </h2>
          <p>
            1.Use the Production Build 2.Create React App 3.Single-File Builds
            4.Brunch 5.Browserify 6.Rollup 7.Profiling Components with the
            DevTools Profiler 8.Avoid Reconciliation 9.shouldComponentUpdate In
            Action 10.Virtualize Long Lists
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            There are Four Kinds of React State to Manage. <br /> 1. Local
            state: Local state is most often managed in React using the useState
            hook
            <br />
            2. Global state: Global state is data we manage across multiple
            components. <br />
            3. Server state <br />
            4. URL state
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">How does prototypical inheritance work?</h2>
          <p>
            Every object contains [[Prototype]] with its methods and properties
            .To add methods and properties in objects The Prototypal Inheritance
            is a featured in javascript . It is a method by which an object can
            inherit the properties and methods of another object. we can get and
            set the [[Prototype]] of an object,by using Object.getPrototypeOf
            and Object.setPrototypeOf. Nowadays, in modern language, it is being
            set using __proto__.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h2>
          <p>
            let result = arrayOfObject.find(data = {">"} data.name === 'random
            value');
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is a unit test? Why should write unit tests?
          </h2>
          <p>
            Unit testing is technique using which individual modules are
            tested. 
            <br />
            If there are any issues by the developer
            himself thats why it is needed. It is concerned with functional correctness of the
            standalone modules. The main aim is to isolate each unit of the
            system to identify, analyze and fix the defects.Unit testing allows software developers to actually think through the design of the software.And it help them to determine what to do next 
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
