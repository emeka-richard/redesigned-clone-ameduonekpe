// import React from 'react'
// Function to get the time of post
const getDate = (date: string) => {
  return new Date(date).toDateString().slice(4, 15);
};

const VacancyList = [
  {
    title: "Research Assistant",
    aboutJob:
      "We are seeking a motivated and detail-oriented Junior Business Analyst to join our team. In this role, you will play a vital role in analyzing business processes, identifying areas for improvement, and providing strategic recommendations to enhance operational efficiency and drive business growth. You will work closely with stakeholders from various departments to understand their needs, gather requirements, and translate them into actionable insights and solutions.",
    jd: [
      "Work closely with business stakeholders to understand their needs, objectives, and challenges.",
      "Elicit, document, and analyze business requirements, processes, and workflows.",
      "Translate business requirements into clear and concise functional specifications for technical teams.",
      "Collaborate with technology teams to design solutions that meet business needs.",
      "Propose innovative and practical solutions to address business challenges.",
    ],
    qualifications: [
      "Bachelor's degree in business administration, Economics, Finance, Computer Science, or a related field.",
      "2 Years plus experience as a Business Analyst or similar role.",
      "Strong analytical skills with the ability to collect, organize, and analyze complex data sets.",
      "Excellent written and verbal communication skills to effectively interact with stakeholders at all levels.",
    ],
    postedDate: getDate("2024-5-10"),
  },
  {
    title: "Financial Analyst Intern (Nigeria-Remote)",
    aboutJob:
      "Token Metrics is looking for a Financial Analyst intern to join our team. You will spend your day analyzing huge amounts of financial data and preparing various accounting and financial reports. To excel in this role, you need proven knowledge of various financial forecasting and corporate finance models." +
      "<br /><br />" +
      "The duration of the Token Metrics internship program is 3 months. It is an evaluative unpaid internship with the possibility of return offers, depending on the company's needs.",
    jd: [
      "Analyzing financial data",
      "Researching macroeconomic and microeconomic conditions",
      "Evaluating capital expenditures and asset depreciation",
      "Establishing and evaluating records, statements, and profit plans",
    ],
    qualifications: [
      "Bachelor's degree in business administration, Economics, Finance, Computer Science, or a related field.",
      "Knowledge of US Generally Accepted Accounting Principles",
      "Proficiency with spreadsheets, databases, and financial software applications",
      "Deep understanding of the financial system and institutions",
    ],
    postedDate: getDate("2024-5-8"),
  },
];

export default VacancyList;
