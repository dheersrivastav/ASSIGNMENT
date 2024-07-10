                                                                            OVERVIEW

{{      
                😊DEPENDENCY🤓  

🔴🔴npm install react react-dom react-router-dom firebase react-modal json-server styled-components🔴🔴

🔴🔴 git clone https://github.com/your-repo/firebase-auth-project.git

     cd my-app
     
     npm install
     npm start

}}




 ✅Firebase Authentication Project:
 
 1. This project demonstrates user registration, login, email verification, and sending an authentication token to a mock backend endpoint using Firebase and React.

 ✅Table of Contents:


1.Getting Started

2.Project Structure

3.Dependencies

4.Firebase Setup

5.Running the Project

6.Setting Up JSON Server

7.Functionality

8.User Registration

9.Email Verification

10.Sending Authentication Token

11.Error Handling

# or

✅Getting Started

Project Structure

# or ✅

my-app/
├── public/

│   ├── index.html

│   └── ...

├── src/

│   ├── API/

│   │   └── api.js

│   ├── components/

│   │   ├── Register.js

│   │   ├── Login.js

│   │   └── ProtectedComponent.js

│   ├── context/

│   │   └── AuthContext.js

│   ├── pages/

│   │   ├── Home.js

│   │   └── ProtectedPage.js

│   ├── firebase.js

│   ├── App.js

│   ├── index.js

│   └── App.css

├── db.json

├── .gitignore

├── package.json
├── README.md
└── ...

# or
✅Dependencies:

The project relies on the following npm packages:

🔴react
🔴react-dom
🔴react-router-dom
🔴firebase
🔴react-modal
🔴json-server
🔴Install them using npm or yarn:
# or


✅FIREBASE SETUP

🔴Create a Firebase project in the Firebase Console.

🔴Register your app with Firebase.

🔴Add Firebase SDK to your project:

🔴Go to your Firebase project settings and copy the Firebase config object.

🔴Create a firebase.js file in the src directory and add the Firebase configuration.

🔴Running the Project

🔴Start the development server:


npm start

# or
Open your browser and navigate to http://localhost:3000.

# or

✅Setting Up JSON Server

Create db.json file in the root directory of your project:

# or

✅json
{
  "users": []
}
Start JSON Server:


json-server --watch db.json --port 3001
JSON Server will run at http://localhost:3001 and will be used to simulate sending the authentication token to a backend endpoint.

# or
✅FUNCTIONALITY:-

User Registration

Users can register with their first name, last name, email, and password. During registration, the app checks if the email is already in use and displays appropriate messages.

✅EMAIL VERIFICATION:

After registration, a verification email is sent to the user's email address. Users must verify their email before logging in.

✅Sending Authentication Token

Upon successful registration, the app fetches the user's authentication token and sends it to the mock backend endpoint (http://localhost:3001/users) for demonstration purposes.

✅Error Handling

The app handles various errors such as email already in use, registration errors, and backend issues, displaying appropriate messages to the user.

IMAGES

![Screenshot 2024-07-10 193659](https://github.com/dheersrivastav/ASSIGNMENT/assets/123939027/3c830e91-9f15-4c89-9f68-0e565db1bf7b)


