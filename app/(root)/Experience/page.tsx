'use client'

import Link from 'next/link';
import React, { useState } from 'react'

const Experience = () => {
  const [formData, setFormData] = useState({
    totalExperience: '',
    phdExperience: '',
    industryExperience: '',
    currentOrganization: '',
    currentDesignation: '',
    servedInVIT: 'NA',
    presentSalary: '',
    expectedSalary: '',
    joinOffer: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="home-content">
      <div className="header mb-4">
        <h1 className="text-2xl font-semibold">Professional Experience Details</h1>
      </div>
      <div className="form-container bg-gray-100 p-6 rounded-md shadow-lg">
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className="form-group">
          <label className="form-label">Total Experience (in years)*</label>
          <input
            type="number"
            name="totalExperience"
            className="form-input"
            placeholder="Enter Your Experience in Number"
            value={formData.totalExperience}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Experience after Ph.D. (in years)</label>
          <input
            type="number"
            name="phdExperience"
            className="form-input"
            placeholder="Enter Your Experience in Number"
            value={formData.phdExperience}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Industry Experience (in years)*</label>
          <input
            type="number"
            name="industryExperience"
            className="form-input"
            placeholder="Enter Your Experience in Number"
            value={formData.industryExperience}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Current Institute/Organization</label>
          <input
            type="text"
            name="currentOrganization"
            className="form-input"
            placeholder="Enter The Name of Organization"
            value={formData.currentOrganization}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Current Designation</label>
          <input
            type="text"
            name="currentDesignation"
            className="form-input"
            placeholder="Enter your Present Role"
            value={formData.currentDesignation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Have you served in VIT before?</label>
          <select
            name="servedInVIT"
             className="p-2 border border-gray-300 rounded"
            value={formData.servedInVIT}
            onChange={handleChange}
          >
            <option value="NA">NA</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Present Salary (Per month in INR)</label>
          <input
            type="number"
            name="presentSalary"
            className="form-input"
            placeholder="Enter Your Salary in Number (Ex: 120000)"
            value={formData.presentSalary}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Expected Salary (Per month in INR)</label>
          <input
            type="number"
            name="expectedSalary"
            className="form-input"
            placeholder="Enter Your Salary in Number (Ex: 1200000)"
            value={formData.expectedSalary}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">When can you join if you are given an offer?</label>
          <select
            name="joinOffer"
             className="p-2 border border-gray-300 rounded"
            value={formData.joinOffer}
            onChange={handleChange}
            required
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-actions">
          <Link href="/previous-page">
            <button type="button" className="btn-secondary">Back</button>
          </Link>
          <button type="submit" className="submit-button dashboard-btn active px-4 py-2 bg-pageGradient text-white rounded">Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Experience;
