'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init({
    job_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    required_skills: {
      type: DataTypes.JSON,
      allowNull: false
    },
    experience_level: {
      type: DataTypes.STRING,
      allowNull: false
    }
  
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};