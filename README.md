# Welcome To JOB_Recommendation

## Setup The Project

- Clone the repository on your local
- Execute `npm install` on the same path as root directory of your project
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_LOGIN_PASS>,
    "database": "Job_Recomendation",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`

## Tables

### User
-name
-experience_level
-skills
-desired_roles
-locations
-job_type


### Job
-job_title
-company
-location
-job_type
-required_skills
-experience_level

