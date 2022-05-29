import React from "react";
import { VscFeedback } from 'react-icons/vsc';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

const BusinessSummary = () => {
  return (
    <div className="stats shadow-2xl lg:w-full  lg:mx-auto sm:w-full sm:px-2 stats-vertical lg:stats-horizontal mt-16 py-20 px-12">
      
      <div className="stat place-items-center">
      <div className="stat-value text-teal-500 mb-3"><FiUsers size={72}></FiUsers></div>
        <div className="stat-title">Users</div>
        <div className="stat-value text-secondary">400</div>
        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
      </div>
      
      <div className="stat place-items-center">
      <div className="stat-value text-teal-500 mb-3"><BiPurchaseTagAlt size={72}></BiPurchaseTagAlt></div>
        <div className="stat-title">Purchase</div>
        <div className="stat-value text-primary">31K</div>
        <div className="stat-desc ">From January 1st to February 1st</div>
      </div>
      


      <div className="stat place-items-center">
      <div className="stat-value text-teal-500 mb-3"><AiOutlineUsergroupAdd size={72}></AiOutlineUsergroupAdd></div>
        <div className="stat-title">New Registers</div>
        <div className="stat-value text-secondary">100</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>

      <div className="stat place-items-center">
      <div className="stat-value text-teal-500 mb-3"><VscFeedback size={72}></VscFeedback></div>
        <div className="stat-title">Feedbacks</div>
        <div className="stat-value text-neutral">1000+</div>
        <div className="stat-desc">Happy Client</div>
      </div>
    </div>
  );
};

export default BusinessSummary;
