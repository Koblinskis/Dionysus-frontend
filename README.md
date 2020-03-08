
[Check out Dionysus here!](https://ecstatic-easley-06cd2c.netlify.com/)

  

Related repos: [Client](https://github.com/Koblinskis/Dionysus-frontend), [Server](https://github.com/Koblinskis/Dionysus-backend)
# Dionysus Client

The Dionysus project is a web application for users to store data. The users can create an account that will be stored by an Express API backend on a MongDB Database. The application also is taking security into concern as unauthorized users cannot access the functionally of the site. Users can create a list that they can store to the database that only they can access and modify. 

  

![Screenshot](https://raw.githubusercontent.com/Koblinskis/Dionysus-frontend/master/screenshot.png)

The Dionysus frontend uses the React framework and React Hooks to compontize the application. This web app is styled using material-ui's styled components to make a consistent and beautiful website. Material-ui also allows the user to pick between different themes that they desire, allowing for a more user friendly and enjoyable experience. The routing in Dionysus is handled though React-router.  The router has been setup in a way that prevents non-users from accessing private routes, and for allowing public routes that anyone can access giving a more secure website for users. The private routes require a valid JWT issued by the Express API backend.

This is deployed on Netlify.

## How to run the client
Create `.env.development` file in the root of the project. That file needs to contain a reference to a running version of the server. Find out how to run the server by clicking [here](https://github.com/Koblinskis/Dionysus-backend). 
```
REACT_APP_NODE_URL="http://localhost:3001/"
```
**Step to run:**

 1. `npm install`
 2. `npm run start`
