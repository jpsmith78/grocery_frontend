# Shopping List Front End

#### [link to live site](https://groceries-front.herokuapp.com/)

## Technologies Used
This is a react front end that utilizes a PHP backend that runs a PostgresSQL database.  I used SASS to style the page, and I linked to Font Awesome for my icons.

## Approach Taken
I started by splitting the two database models into different views and splitting the code up into components based on that.  My biggest struggle came from figuring out how to get my backend headers to work so that my routes would all work on the front end.  I was very pleased with how much easier react is getting for me to understand and use.  All of the list sorting occurs on the back end.  I woulld like to get more comfortable creating more views and splitting it up on the front end. I used the Coolors app to find a color scheme, and I used Sass to style my page.

## Additions I Would Like To Make
I definitely want to add a user login.  I'd also like to make a few different views so that the user can sort the lists by recipe or id whatever they want.

## Wins
This was my second time doing a react front end and my understanding of it and my comfort with it were much higher.  
I enjoy the component driven coding very much and see a high value for group projects.

## Technical Difficulties
My biggest stumbling block was getting the state to change on my routes.  It just wasn't working for me for some reason. Right now, I've settled for making a second database call every time the page updates, which isn't the greatest.  Now that I'm more comfortable with react in general, I think I'll be able to make it work.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
