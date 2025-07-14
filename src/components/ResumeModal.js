import React from 'react';
import './ResumeModal.css';

function ResumeModal({ open, onClose }) {
  if (!open) return null;
  const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf';

  return (
    <div className="resume-modal-overlay">
      <div className="resume-modal-content">
        <button className="resume-modal-close" onClick={onClose}>&times;</button>
        <iframe
          src={resumeUrl}
          title="Resume"
          className="resume-iframe"
        />
        <a href={resumeUrl} download className="resume-download-btn">Download PDF</a>
      </div>
    </div>
  );
}

export default ResumeModal; 