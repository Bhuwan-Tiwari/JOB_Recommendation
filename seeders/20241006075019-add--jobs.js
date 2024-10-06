'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
  await queryInterface.bulkInsert('Jobs',[
    {
      "id": 1,
      "job_title": "Software Engineer",
      "company": "Tech Solutions Inc.",
      "required_skills": JSON.stringify(["JavaScript", "React", "Node.js"]),
      "location": "San Francisco",
      "job_type": "Full-Time",
      "experience_level": "Intermediate",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 2,
      "job_title": "Data Scientist",
      "company": "Data Analytics Corp.",
      "required_skills": JSON.stringify(["Python", "Data Analysis", "Machine Learning"]),
      "location": "Remote",
      "job_type": "Full-Time",
      "experience_level": "Intermediate",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 3,
      "job_title": "Frontend Developer",
      "company": "Creative Designs LLC",
      "required_skills": JSON.stringify(["HTML", "CSS", "JavaScript", "Vue.js"]),
      "location": "New York",
      "job_type": "Part-Time",
      "experience_level": "Junior",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 4,
      "job_title": "Backend Developer",
      "company": "Web Services Co.",
      "required_skills": JSON.stringify(["Python", "Django", "REST APIs"]),
      "location": "Chicago",
      "job_type": "Full-Time",
      "experience_level": "Senior",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 5,
      "job_title": "Machine Learning Engineer",
      "company": "AI Innovations",
      "required_skills": JSON.stringify(["Python", "Machine Learning", "TensorFlow"]),
      "location": "Boston",
      "job_type": "Full-Time",
      "experience_level": "Intermediate",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 6,
      "job_title": "DevOps Engineer",
      "company": "Cloud Networks",
      "required_skills": JSON.stringify(["AWS", "Docker", "Kubernetes"]),
      "location": "Seattle",
      "job_type": "Full-Time",
      "experience_level": "Senior",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 7,
      "job_title": "Full Stack Developer",
      "company": "Startup Hub",
      "required_skills": JSON.stringify(["JavaScript", "Node.js", "Angular", "MongoDB"]),
      "location": "Austin",
      "job_type": "Full-Time",
      "experience_level": "Intermediate",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 8,
      "job_title": "Data Analyst",
      "company": "Finance Analytics",
      "required_skills": JSON.stringify(["SQL", "Python", "Tableau"]),
      "location": "New York",
      "job_type": "Full-Time",
      "experience_level": "Junior",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 9,
      "job_title": "Quality Assurance Engineer",
      "company": "Reliable Software",
      "required_skills": JSON.stringify(["Selenium", "Java", "Testing"]),
      "location": "San Francisco",
      "job_type": "Contract",
      "experience_level": "Intermediate",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      "id": 10,
      "job_title": "Systems Administrator",
      "company": "Enterprise Solutions",
      "required_skills": JSON.stringify(["Linux", "Networking", "Shell Scripting"]),
      "location": "Remote",
      "job_type": "Full-Time",
      "experience_level": "Senior",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
  );
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
