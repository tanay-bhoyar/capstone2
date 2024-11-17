import React from 'react'

const Home = () => {
  const jobApplications = [
    { id: 1, jobId: '74662', role: 'Associate Professor For SCOPE', date: '01 Mar 2023', category: 'Faculty', status: 'REJECTED' },
    { id: 2, jobId: '74662', role: 'Associate Professor For SCOPE', date: '01 Mar 2023', category: 'Admin', status: 'SELECTED' },
    { id: 3, jobId: '74662', role: 'Associate Professor For SCOPE', date: '01 Mar 2023', category: 'Faculty', status: 'IN PROGRESS' },
    { id: 4, jobId: '74662', role: 'Associate Professor For SCOPE', date: '01 Mar 2023', category: 'Faculty', status: 'REJECTED' },
  ];
  return (
    <section className='home'>
      <div className="home-content">
          <div className="">
            <h1 className='heading'>Jobs you have Applied</h1>
          </div>
          <div className="filters">
            <input type="date" className="date-picker" defaultValue="2024-10-04" />
            <select className="filter-dropdown">
              <option value="all">Field Type - All Type</option>
            </select>
          </div>

          <table className="jobs-table">
            <thead>
              <tr>
                <th className='bg-gray-25 dashboard-table content-center'>S.No</th>
                <th className='bg-gray-25 dashboard-table content-center'>Job ID</th>
                <th className='bg-gray-25 dashboard-table content-center'>Role Name - Dept</th>
                <th className='bg-gray-25 dashboard-table content-center'>Applied On</th>
                <th className='bg-gray-25 dashboard-table content-center'>Job Category</th>
                <th className='bg-gray-25 dashboard-table content-center'>Job Status</th>
              </tr>
            </thead>
            <tbody>
              {jobApplications.map((job, index) => (
                <tr key={job.id}>
                  <td className='dashboard-content'>{index + 1}</td>
                  <td className='dashboard-content border-gray-25'>{job.jobId}</td>
                  <td className='dashboard-content'>{job.role}</td>
                  <td className='dashboard-content'>{job.date}</td>
                  <td className='dashboard-content'>{job.category}</td>
                  <td className='dashboard-content'>
                    <span className={`status ${job.status.replace(' ', '-').toLowerCase()}`}>
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </section>
  )
}

export default Home
