This repository contains the source code for my Full Stack Certification project, which is a Stack Overflow clone. The project is focused on collaboration among users to ask and answer questions on a variety of subjects, with a particular emphasis on high school-level education. Additionally, it includes premium features that allow users to ask priority questions for faster resolution.

Dependencies
Frontend
@stripe/react-stripe-js: ^1.10.0
@stripe/stripe-js: ^1.36.0
@testing-library/jest-dom: ^5.16.5
@testing-library/react: ^13.4.0
@testing-library/user-event: ^13.5.0
aws-jwt-verify: ^3.1.0
axios: ^0.27.2
bootstrap: ^5.2.1
bootstrap-icons: ^1.9.1
dotenv: 8.2.0
jwt-decode: ^3.1.2
nodemon: ^2.0.20
react: ^18.2.0
react-bootstrap: ^2.5.0
react-dom: ^18.2.0
react-jwt: ^1.1.7
react-redux: ^8.0.2
react-router-dom: ^6.3.0
react-scripts: 5.0.1
react-stars: ^2.2.5
redux: ^4.2.0
redux-devtools-extension: ^2.13.9
redux-thunk: ^2.4.1
sweetalert: ^2.1.2
web-vitals: ^2.1.4
Backend
@stripe/react-stripe-js: ^1.10.0
@stripe/stripe-js: ^1.36.0
axios: ^0.27.2
bcrypt: ^5.0.1
body-parser: ^1.20.0
cookie-parser: ^1.4.5
cors: ^2.8.5
dotenv: 8.2.0
express: ^4.18.1
express-validator: ^6.14.2
googleapis: ^107.0.0
heroku: ^7.63.4
jsonwebtoken: ^8.5.1
morgan: ^1.10.0
nodemailer: ^6.7.8
nodemon: ^2.0.20
passport: ^0.6.0
passport-google-oauth2: ^0.2.0
passport-jwt: ^4.0.0
pg: ^8.5.1
sequelize: ^6.21.6
stripe: ^10.8.0
Project Overview
The Full Stack Certification project is a Stack Overflow-like platform with the following key features:

User Authentication: Users can create accounts and log in using Passport for user validation.

Question and Answer CRUD: Users can create, read, update, and delete questions and answers.

Rating System: Questions and answers can be rated by users, providing feedback on their quality.

Filtering: There is a two-level filtering system for questions, allowing users to filter by subject and rating.

User Profiles: Users have profiles that display their activity and contributions.

Admin Dashboard: Administrators have access to a dashboard for managing and deleting questions.

How to Use
Clone the repository to your local machine.
Install the frontend and backend dependencies using npm install in the respective frontend and backend directories.
Configure your environment variables, including API keys and database credentials, in the .env files.
Run the frontend and backend servers using npm start in their respective directories.
Feel free to explore and customize this Stack Overflow clone for your own educational or collaborative projects. If you encounter any issues or have questions, please don't hesitate to open an issue or reach out for support.
Cohorte 28a - Grupo 6 

Deploy Front: https://study-rooms-gilt.vercel.app/

Deploy DB: https://studyrooms-deploy.herokuapp.com/

