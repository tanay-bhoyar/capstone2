'use client'
import React, { useState } from 'react'

const PersonalInformation = () => {
  const [formData, setFormData] = useState({
    salutation: '',
    name: '',
    email: '',
    phone: '',
    gender: '',
    nationality: '',
    postalAddress: '',
    country: '',
    state: '',
    city: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform validation
    const missingFields = Object.entries(formData).filter(([key, value]) => !value);
    if (missingFields.length > 0) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="home-content">
      <div className="header mb-4">
        <h1 className="text-2xl font-semibold">Personal Information</h1>
      </div>
      <div className="form-container bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Fields */}
          {[
            { label: 'Salutation*', name: 'salutation', type: 'select', options: ['Mr.', 'Ms.', 'Dr.'] },
            { label: 'Name as per Aadhar card*', name: 'name', type: 'text' },
            { label: 'Email ID*', name: 'email', type: 'email' },
            { label: 'Phone Number*', name: 'phone', type: 'tel' },
            { label: 'Gender*', name: 'gender', type: 'select', options: ['Male', 'Female', 'Other'] },
            { label: 'Nationality*', name: 'nationality', type: 'text' },
            { label: 'Postal Address*', name: 'postalAddress', type: 'text' },
            { label: 'Country*', name: 'country', type: 'text' },
            { label: 'State*', name: 'state', type: 'text' },
            { label: 'City*', name: 'city', type: 'text' },
          ].map((field) => (
            <div key={field.name} className="form-group flex flex-col">
              <label htmlFor={field.name} className="mb-1 font-medium">{field.label}</label>
              {field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select...</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded"
                  required
                />
              )}
            </div>
          ))}
          {/* Form Actions */}
          <div className="form-actions flex justify-between">
            <button type="button" className="jobs back px-4 py-2 bg-gray-200 rounded">Back</button>
            <button type="submit" className="submit-button dashboard-btn active px-4 py-2 bg-pageGradient text-white rounded">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInformation;
