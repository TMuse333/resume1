import React from 'react';
import { Document, Page, pdfjs } from '@react-pdf/renderer';
import resume from 'src/images/resume.pdf'
// Set up the worker that reads the PDF file
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// The component to display the PDF
const ResumePDF = () => {
  const resumePDFUrl = 'path_to_your_resume.pdf'; // Replace this with the path to your PDF file

  return (
   <img src={}/>
  );
};

export default ResumePDF;
