import React from 'react';
import { Document, Page, } from '@react-pdf/renderer';
import resume from '../images/resume.pdf'
// Set up the worker that reads the PDF file
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// The component to display the PDF
const ResumePDF = () => {
  const resumePDFUrl = resume; // Replace this with the path to your PDF file

  return (
    <div style={{transform:'translateY(-2rem'}}>
      <button
      style={{transform:'translateY(3rem)'}}>Back to website</button>
      <img src={resume}
      style={{width:'100vw'}}/>
    </div>
  );
};

export default ResumePDF;
