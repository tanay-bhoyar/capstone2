'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Education = () => {
  const [formData, setFormData] = useState({
    tenthSchool: '',
    tenthBoard: '',
    tenthYear: '',
    tenthPercentage: '',
    higherSecondarySchool: '',
    higherSecondaryBoard: '',
    higherSecondaryYear: '',
    higherSecondaryPercentage: '',
  });

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="home-content">
      <div className="header mb-4">
        <h1 className="text-2xl font-semibold">Education Details</h1>
      </div>
      <div className="form-container bg-gray-100 p-6 rounded-md shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="section-title">Education Details - 10th Standard</h2>
          <div className="form-group">
            <label htmlFor="tenthSchool">Name of the School/Institute*</label>
            <input
              type="text"
              id="tenthSchool"
              name="tenthSchool"
              value={formData.tenthSchool}
              onChange={handleInputChange}
              placeholder="Enter Your School Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tenthBoard">Name of the Board*</label>
            <input
              type="text"
              id="tenthBoard"
              name="tenthBoard"
              value={formData.tenthBoard}
              onChange={handleInputChange}
              placeholder="Enter the Board Name [Eg: AP State Board, CBSE]"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tenthYear">Year of Completion*</label>
            <input
              type="month"
              id="tenthYear"
              name="tenthYear"
              value={formData.tenthYear}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tenthPercentage">Percentage or CGPA Obtained*</label>
            <input
              type="number"
              id="tenthPercentage"
              name="tenthPercentage"
              value={formData.tenthPercentage}
              onChange={handleInputChange}
              placeholder="Enter Your Score"
              required
            />
          </div>

          <h2 className="section-title">Education Details - Higher Secondary</h2>
          <div className="form-group">
            <label htmlFor="higherSecondarySchool">Name of the School/Institute*</label>
            <input
              type="text"
              id="higherSecondarySchool"
              name="higherSecondarySchool"
              value={formData.higherSecondarySchool}
              onChange={handleInputChange}
              placeholder="Enter Your School Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="higherSecondaryBoard">Name of the Board*</label>
            <input
              type="text"
              id="higherSecondaryBoard"
              name="higherSecondaryBoard"
              value={formData.higherSecondaryBoard}
              onChange={handleInputChange}
              placeholder="Enter the Board Name [Eg: AP State Board, CBSE]"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="higherSecondaryYear">Year of Completion*</label>
            <input
              type="month"
              id="higherSecondaryYear"
              name="higherSecondaryYear"
              value={formData.higherSecondaryYear}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="higherSecondaryPercentage">Percentage or CGPA Obtained*</label>
            <input
              type="number"
              id="higherSecondaryPercentage"
              name="higherSecondaryPercentage"
              value={formData.higherSecondaryPercentage}
              onChange={handleInputChange}
              placeholder="Enter Your Score"
              required
            />
          </div>
          <h2 className='section-title'>Education Details-Under Graduation</h2>

        <div className="form-group">
          <label htmlFor="higherSecondarySchool">Name of the University/Institute*</label>
          <input
            type="text"
            id="higherSecondarySchool"
            name="higherSecondarySchool"
            value={formData.higherSecondarySchool}
            onChange={handleInputChange}
            placeholder="Enter Your University/Institute Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryBoard">Name of the Degree*</label>
          <input
            type="text"
            id="higherSecondaryBoard"
            name="higherSecondaryBoard"
            value={formData.higherSecondaryBoard}
            onChange={handleInputChange}
            placeholder="Enter the Degree Type Degree (Eg. B.Tech. M.Tech. B.Ed Etc)"
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="higherSecondaryBoard">Name of the Major*</label>
            <input
                type="text"
                id="higherSecondaryBoard"
                name="higherSecondaryBoard"
                value={formData.higherSecondaryBoard}
                onChange={handleInputChange}
                placeholder="Enter the Major Type[Eg: Computer Science]"
                required
            />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryYear">Year of Completion*</label>
          <input
            type="month"
            id="higherSecondaryYear"
            name="higherSecondaryYear"
            value={formData.higherSecondaryYear}
            onChange={handleInputChange}
            required
          />
        </div>

        
        <div className="form-group">
          <label htmlFor="higherSecondaryPercentage">Percentage or CGPA Obtained*</label>
          <input
            type="number"
            id="higherSecondaryPercentage"
            name="higherSecondaryPercentage"
            value={formData.higherSecondaryPercentage}
            onChange={handleInputChange}
            placeholder="Enter The Number you Obtained"
            required
          />
        </div>

        <h2 className='section-title'>Education Details-Post Graduation</h2>

        <div className="form-group">
          <label htmlFor="higherSecondarySchool">Name of the University/Institute*</label>
          <input
            type="text"
            id="higherSecondarySchool"
            name="higherSecondarySchool"
            value={formData.higherSecondarySchool}
            onChange={handleInputChange}
            placeholder="Enter Your University/Institute Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryBoard">Name of the Degree*</label>
          <input
            type="text"
            id="higherSecondaryBoard"
            name="higherSecondaryBoard"
            value={formData.higherSecondaryBoard}
            onChange={handleInputChange}
            placeholder="Enter the Degree Type Degree (Eg. B.Tech. M.Tech. B.Ed Etc)"
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="higherSecondaryBoard">Name of the Major*</label>
            <input
                type="text"
                id="higherSecondaryBoard"
                name="higherSecondaryBoard"
                value={formData.higherSecondaryBoard}
                onChange={handleInputChange}
                placeholder="Enter the Major Type[Eg: Computer Science]"
                required
            />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryYear">Year of Completion*</label>
          <input
            type="month"
            id="higherSecondaryYear"
            name="higherSecondaryYear"
            value={formData.higherSecondaryYear}
            onChange={handleInputChange}
            required
          />
        </div>

        
        <div className="form-group">
          <label htmlFor="higherSecondaryPercentage">Percentage or CGPA Obtained*</label>
          <input
            type="number"
            id="higherSecondaryPercentage"
            name="higherSecondaryPercentage"
            value={formData.higherSecondaryPercentage}
            onChange={handleInputChange}
            placeholder="Enter The Number you Obtained"
            required
          />
        </div>     

        <h2 className='section-title'>Education Details-Phd</h2>

        <div className="form-group">
          <label htmlFor="higherSecondarySchool">Name of the University/Institute*</label>
          <input
            type="text"
            id="higherSecondarySchool"
            name="higherSecondarySchool"
            value={formData.higherSecondarySchool}
            onChange={handleInputChange}
            placeholder="Enter Your University/Institute Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryBoard">Name of the Degree*</label>
          <input
            type="text"
            id="higherSecondaryBoard"
            name="higherSecondaryBoard"
            value={formData.higherSecondaryBoard}
            onChange={handleInputChange}
            placeholder="Enter the Degree Type Degree (Eg. B.Tech. M.Tech. B.Ed Etc)"
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="higherSecondaryBoard">Name of the Major*</label>
            <input
                type="text"
                id="higherSecondaryBoard"
                name="higherSecondaryBoard"
                value={formData.higherSecondaryBoard}
                onChange={handleInputChange}
                placeholder="Enter the Major Type[Eg: Computer Science]"
                required
            />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryYear">Year of Completion*</label>
          <input
            type="month"
            id="higherSecondaryYear"
            name="higherSecondaryYear"
            value={formData.higherSecondaryYear}
            onChange={handleInputChange}
            required
          />
        </div>             

        <h2 className='section-title'>Education Details-PDF</h2>

        <div className="form-group">
          <label htmlFor="higherSecondarySchool">Name of the University/Institute*</label>
          <input
            type="text"
            id="higherSecondarySchool"
            name="higherSecondarySchool"
            value={formData.higherSecondarySchool}
            onChange={handleInputChange}
            placeholder="Enter Your University/Institute Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryBoard">Name of the Discipline*</label>
          <input
            type="text"
            id="higherSecondaryBoard"
            name="higherSecondaryBoard"
            value={formData.higherSecondaryBoard}
            onChange={handleInputChange}
            placeholder="Enter the Major Type[Example Computer Science]"
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="higherSecondaryBoard">PDF Status*</label>
            <input
                type="text"
                id="higherSecondaryBoard"
                name="higherSecondaryBoard"
                value={formData.higherSecondaryBoard}
                onChange={handleInputChange}
                placeholder="Select Status Type"
                required
            />
        </div>

        <div className="form-group">
          <label htmlFor="higherSecondaryYear">Year of Completion*</label>
          <input
            type="month"
            id="higherSecondaryYear"
            name="higherSecondaryYear"
            value={formData.higherSecondaryYear}
            onChange={handleInputChange}
            required
          />
        </div>

          <div className="form-actions">
            <button type="button" className="btn-secondary">Back</button>
            <Link href='/general'><button type="submit" className="submit-button dashboard-btn active px-4 py-2 bg-pageGradient text-white rounded">Next</button></Link>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Education;
