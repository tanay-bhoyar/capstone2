'use client'

import Link from 'next/link';
import React, { useState } from 'react'

const DocumentUpload = () => {
  const [formData, setFormData] = useState({
    resume: null,
    transcript: null,
    experienceCertificates: null,
    appliedBefore: '',
    previousAttendanceDate: '',
    declarationConfirmed: false,
  });

  const handleInputChange = (e: { target: { name: any; value: any; type: any; files: any; }; }) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] }); // Store the file object
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (e: { target: { checked: any; }; }) => {
    setFormData({ ...formData, declarationConfirmed: e.target.checked });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
    // Add logic to handle form submission (e.g., upload files)
  };
  return (
    <div className="home-content">
          <div className="form-container bg-gray-100 p-6 rounded-md shadow-lg">
            <h2 className="section-title">Resume</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="resume">Upload your Resume</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="transcript">Upload your Transcript</label>
                <h4>(merge all transcripts into a single pdf file and upload)</h4>
                <input
                  type="file"
                  id="transcript"
                  name="transcript"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="experienceCertificates">Upload all your experience Certificates*</label>
                <h4>(merge all experience Certificates into a single pdf file and upload)</h4>
                <input
                  type="file"
                  id="experienceCertificates"
                  name="experienceCertificates"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="appliedBefore">Whether you have applied/attended previously in VIT-AP*</label>
                <input
                  type="text"
                  id="appliedBefore"
                  name="appliedBefore"
                  value={formData.appliedBefore}
                  onChange={handleInputChange}
                  placeholder="YES or NO"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="previousAttendanceDate">If yes, date of attended to the Technical round.</label>
                <input
                  type="date"
                  id="previousAttendanceDate"
                  name="previousAttendanceDate"
                  value={formData.previousAttendanceDate}
                  onChange={handleInputChange}
                />
              </div>
              
              <h2>Declaration</h2>
              <div className="form-group">
                <input
                  type="checkbox"
                  id="declaration"
                  name="declarationConfirmed"
                  className='flex-inline'
                  checked={formData.declarationConfirmed}
                  onChange={handleCheckboxChange}
                  required
                />
                <label htmlFor="declaration" className="deck"> I confirm that I have not been convicted by a court in India for any criminal offense and/or sentenced to imprisonment. These are no criminal proceedings pending against me before any court in India. I have not been issued a warrant or summons for appearance or a warrant for arrest by any court in India. I certify that the above statements made by me are true, complete and correct. I agree that in case VIT at any time that the information given by me in this form is not correct or incomplete, VIT will have the right to withdraw my letter of appointment or to terminate my appointment at any time without notice or compensation.</label>
              </div>

              <div className="form-actions">
                <Link href="/previous-page"><button type='button' className='btn-secondary'>Back</button></Link>
                <button type="submit" className="submit-button dashboard-btn active px-4 py-2 bg-pageGradient text-white rounded">Submit</button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default DocumentUpload
