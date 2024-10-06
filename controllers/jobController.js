const { Job } = require('../models');

exports.recommendJobs = async (req, res) => {
  try {
    const userProfile = req.body;

    if (!userProfile || !userProfile.skills || !userProfile.preferences) {
      return res.status(400).json({ message: 'Invalid user profile data' });
    }


    const jobs = await Job.findAll();

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({ message: 'No jobs found in the database' });
    }

    
    const recommendedJobs = jobs.filter(job => {
      const requiredSkills = job.required_skills || [];

      
      const matchesSkills = requiredSkills.some(skill => 
        userProfile.skills.map(s => s.toLowerCase()).includes(skill.toLowerCase())
      );

  
      const matchesExperience = job.experience_level === userProfile.experience_level;

      const isRemote = job.location.toLowerCase() === "remote";
      const matchesLocation = userProfile.preferences.locations.some(location => 
        isRemote || job.location.toLowerCase() === location.toLowerCase()
      );

      const matchesJobType = job.job_type === userProfile.preferences.job_type;

 
      const matchesRole = userProfile.preferences.desired_roles.some(role => 
        job.job_title.toLowerCase() === role.toLowerCase()
      );


      return matchesSkills && matchesExperience && matchesLocation && matchesJobType && matchesRole;
    });

    
    if (recommendedJobs.length === 0) {
      return res.status(404).json({ message: 'No jobs matched the user profile' });
    }

    
    return res.status(200).json(recommendedJobs.map(job => ({
      job_title: job.job_title,
      company: job.company,
      location: job.location,
      job_type: job.job_type,
      required_skills: job.required_skills,
      experience_level: job.experience_level
    })));

  } catch (error) {

    console.error('Error fetching or filtering jobs:', error);

 
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
