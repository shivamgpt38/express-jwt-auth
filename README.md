## What is Express-jwt-auth
Express jwt auth is a simple express authentication application using jwt

### How to run

1. **Open your terminal and navigate to where you'd like to store the project**

2. **Clone the repo using:** 
`git clone https://github.com/shivamgpt38/express-jwt-auth.git`

3. **cd into your newly created repo:** 
`cd express-jwt-auth/`

4. **Run npm install to install all the node package dependencies:** 
`npm install`

5. **After installation run:**
`npm start`

### API Routes to hit
    
* /api/sign-up    (for user signup) 

  POST endpoint for new user signing up, body contains email, username, and password fields   
* /api/login    (to get token)

  POST endpoint for receiving token when logging in, body contains username and password fields, returns token
* /api/authprotectedroute    (to check auth)

  GET endpoint to verify if token is valid, returns decoded token
