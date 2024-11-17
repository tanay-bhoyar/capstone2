'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const postjobs = () => {
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
    Qualification: '',
    Specilized_Area: '',
    Years_Experience: '',
    Duties_and_res: '',
    Duties_and_res2: '',
    Duties_and_res3: '',
    Eligibility: '',
    Experience: '',
    Selection_procedure: '',
    Department:'',
    Renumeration:'',
    Tenure:'',
    tenthSchool:'',
  });

  const router = useRouter(); // Initialize the router

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

    // After form submission, redirect to a different page
    router.push('/general2'); // Change '/success' to your desired route
  };
  return (
    <div className='home-content'>
    <div className="form-container bg-gray-100 p-6 rounded-md shadow-lg">
          <div className="header mb-4">
            <h1 className='text-2xl font-semibold'>General Information</h1>
          </div>
          <div className="form-container bg-gray-100 p-6 rounded-md shadow-lg">
            <h2 className='section-title'>Personal Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="Category">Category*</label>
                <input
                  type="select"
                  id="Category"
                  name="Category"
                  value={formData.Category}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* Add other form fields here */}
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
          <label htmlFor="Qualification">Qualification*</label>
          <input
            type="text"
            id="Qualification"
            name="Qualification"
            value={formData.Qualification}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Selection_procedure">Specilized Area*</label>
          <input
            className='bigbox'
            type="text"
            id="Selection_procedure"
            name="Selection_procedure"
            value={formData.Selection_procedure}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Years_Experience">Years of Experience*</label>
          <input
            type="number"
            id="Years_Experience"
            name="Years_Experience"
            value={formData.Years_Experience}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <h2>Job Information</h2>

        <div className="form-group">
          <label htmlFor="Duties_and_res">Duties and Responsibilites*</label>
          <input
            type="text"
            id="Duties_and_res"
            name="Duties_and_res"
            value={formData.Duties_and_res}
            onChange={handleInputChange}
            placeholder=""
            required
          />
          <input
            type="text"
            id="Duties_and_res2"
            name="Duties_and_res2"
            value={formData.Duties_and_res2}
            onChange={handleInputChange}
            placeholder=""
            required
          />
          <input
            type="text"
            id="Duties_and_res3"
            name="Duties_and_res3"
            value={formData.Duties_and_res3}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Eligibility">Eligibility*</label>
          <input
            className='bigbox'
            type="text"
            id="Eligibility"
            name="Eligibility"
            value={formData.Eligibility}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Experience">Experience*</label>
          <input
            type="number"
            id="Experience"
            name="Experience"
            value={formData.Experience}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Selection_procedure">Selection procedure*</label>
          <input
            className='bigbox'
            type="text"
            id="Selection_procedure"
            name="Selection_procedure"
            value={formData.Selection_procedure}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <h2>Other Information</h2>

        <div className="form-group">
          <label htmlFor="Department">Department/School*</label>
          <input
            type="Select"
            id="Department"
            name="Department"
            value={formData.Department}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Renumeration">Renumeration*</label>
          <input
            type="text"
            id="Renumeration"
            name="Renumeration"
            value={formData.Renumeration}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Tenure">Tenure*</label>
          <input
            type="text"
            id="Tenure"
            name="Tenure"
            value={formData.tenthSchool}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>
              <div className="form-actions">
                <button type="submit" className="btn-secondary">Cancel</button>
                <button type="submit" className="submit-button dashboard-btn active px-4 py-2 bg-pageGradient text-white rounded">Next</button>
              </div>
            </form>
          </div>
        </div>
        </div>
  )
}

export default postjobs
