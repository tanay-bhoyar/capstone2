"use client"; // Mark the component as a Client Component

import React from 'react';

const pastJobs = () => {
  const handleFilterClick = () => {
    // Implement filter logic here
    console.log("Filter button clicked");
  };

  const handleExportClick = () => {
    // Implement export logic here
    console.log("Export to Excel button clicked");
  };

  return (
    <section className='home'>
    <div className="home-content">
      <div className="header">
        <h1 className='heading'>Current Jobs</h1>
      </div>
      <div className="filters">
        <input type="date" id="startDate" defaultValue="2023-01-01"  className='date-picker'/>
        <input type="date" id="endDate" defaultValue="2023-03-10" className='date-picker'/>
        <button id="filterButton" onClick={handleFilterClick}>
      
        </button>
      </div> 
      <table className="jobs-table">
        <thead>
          <tr>
            <th className='bg-gray-25 dashboard-table content-center'>Sl. No.</th>
            <th className='bg-gray-25 dashboard-table content-center'>User ID</th>
            <th className='bg-gray-25 dashboard-table content-center'>Applications</th>
            <th className='bg-gray-25 dashboard-table content-center'>Department School</th>
            <th className='bg-gray-25 dashboard-table content-center'>Role</th>
          </tr>
        </thead>
        <tbody id="jobTableBody">
          {/* Job rows will be populated here */}
        </tbody>
      </table>
    </div>
    </section>
  );
};

export default pastJobs;
