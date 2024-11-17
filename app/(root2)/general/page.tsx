'use client'
import React, { useEffect, useState } from 'react'

const general = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Function to handle resize
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsSidebarVisible(false);
    } else {
      setIsSidebarVisible(true);
    }
  };

  useEffect(() => {
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize); // Add event listener
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);
  const [formData, setFormData] = useState({
    Category: '',
    Role: '',
    Project: '',
    Qualification: '',
    Stipend: '',
    Tenure: '',
    Support: '',
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
  };
  return (
    <div className="home-content">
      <div className='form-container bg-gray-100 p-6 rounded-md shadow-lg'>
          <div className="header">
            <h1 className='text-2xl font-semibold'>General Information</h1>
          </div>
          <div className="form-container bg-gray-100 p-6 rounded-md shadow-lg">
            <h2 className='section-title'>Personal Information</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Form fields */}
              <div className="form-group">
                <label htmlFor="Category">Category*</label>
                <input
                  type="text"
                  id="Category"
                  name="Category"
                  value={formData.Category}
                  onChange={handleInputChange}
                  placeholder=""
                  required
                />
              </div>

              <div className="form-group">
          <label htmlFor="Role">Role*</label>
          <input
            type="text"
            id="Role"
            name="Role"
            value={formData.Role}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="project">Project Title*</label>
          <input
            type="text"
            id="tenthSchool"
            name="tenthSchool"
            value={formData.Project}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Qualification">Qualification*</label>
          <input
            type="text"
            id="Project"
            name="Project"
            value={formData.Qualification}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Stipend">Stipend*</label>
          <input
            type="text"
            id="Stipend"
            name="Stipend"
            value={formData.Stipend}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Tenure">Tenure*</label>
          <input
            type="number"
            id="Tenure"
            name="Tenure"
            value={formData.Tenure}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Support">Support Documentation*</label>
          <input
            type="file"
            id="Support"
            name="Support"
            value={formData.Support}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>
              <div className="form-actions">
                <button type="button" className="btn-secondary">Cancel</button>
                <button type="submit" className="submit-button dashboard-btn active px-4 py-2 bg-pageGradient text-white rounded">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default general
