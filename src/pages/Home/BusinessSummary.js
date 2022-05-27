import React from "react";
import { VscFeedback } from 'react-icons/vsc';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

const BusinessSummary = () => {
  return (
    <div class="stats shadow-2xl lg:w-full  lg:mx-auto sm:w-full sm:px-2 stats-vertical lg:stats-horizontal mt-16 py-20 px-12">
      
      <div class="stat place-items-center">
      <div class="stat-value text-teal-500 mb-3"><FiUsers size={72}></FiUsers></div>
        <div class="stat-title">Users</div>
        <div class="stat-value text-secondary">400</div>
        <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
      </div>
      
      <div class="stat place-items-center">
      <div class="stat-value text-teal-500 mb-3"><BiPurchaseTagAlt size={72}></BiPurchaseTagAlt></div>
        <div class="stat-title">Purchase</div>
        <div class="stat-value text-primary">31K</div>
        <div class="stat-desc ">From January 1st to February 1st</div>
      </div>
      


      <div class="stat place-items-center">
      <div class="stat-value text-teal-500 mb-3"><AiOutlineUsergroupAdd size={72}></AiOutlineUsergroupAdd></div>
        <div class="stat-title">New Registers</div>
        <div class="stat-value text-secondary">100</div>
        <div class="stat-desc">↘︎ 90 (14%)</div>
      </div>

      <div class="stat place-items-center">
      <div class="stat-value text-teal-500 mb-3"><VscFeedback size={72}></VscFeedback></div>
        <div class="stat-title">Feedbacks</div>
        <div class="stat-value text-neutral">1000+</div>
        <div class="stat-desc">Happy Client</div>
      </div>
    </div>
  );
};

export default BusinessSummary;
