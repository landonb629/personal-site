# Passing Environment Variables to a React App

Environment variables can be helpful when trying to conditionally pass an API endpoint to your react apps. An example of this would be using an API endpoint of http://localhost:3032 when developing locally but, when going to production that would need to change to something like https://backend-api.dev.com. If we don't use environment variables then, we are going to need to change that everytime we go back and forth from production

### Types of Environment Variables 

React has two types of environment variables:
    - build time 
    - run time 