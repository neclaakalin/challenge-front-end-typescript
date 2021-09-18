# How to Run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Task for Front End Developer (TypeScript)

## First steps

1. Fork this repo
2. Create a single-page application for a blogging website with Angular 2+ (or other JavaScript framework)
3. Use TypeScript if your framework of choice supports it
4. Prepare a pull request and let us know that you are done

## General guidelines

- Use common sense and don't spend too much time on a single task if you get stuck
- This task might not specify every single detail of how it should be implemented. When in doubt, improvise and go with a solution that you think would work best for a project like this

## Requirements

- Use the latest version of Angular
- Use the API to retrieve data (details below)
- Make sure the app is responsive and looks clean
- Use components where applicable

<strong>Keep in mind that candidates who used TS and/ or Angular 2+ will have an upper hand during the initial filtering.</strong>

## Functional requirements

The website should have the following pages (components):

**Homepage**

Should contain a list of all blog posts.

**Post page**

Should contain post title, full-content, post author details, a link to the post's edit page.

**Post creation page**

Should contain a form for creating a new post. It should have 2 inputs: title and post body. Once the form is submitted it should make a `POST` request to a corresponding API endpoint with all inputs in the request body.

**Post edit page**

The form should be the same as with post creation. The only difference is that inputs should be pre-filled and that the app should run a `PUT` request to another endpoint.

## API guidelines

Use this API service that provides random data for a blog project like this:
https://jsonplaceholder.typicode.com/

For example, to retrieve a list of all available posts you would run a `GET` request to the following URL:

```
https://jsonplaceholder.typicode.com/posts
```

Similarly, you would run a `PUT` request to the following URL to update a post with an ID of `3`:

```
https://jsonplaceholder.typicode.com/posts/3
```

Please note that when updating or creating new entries, the API might not save the changes. That is fine as long as you make the necessary `POST` / `PUT` requests.

### Few tips

- We always prefer the code that is robust, easy to read and re-usable
- Make design user friendly
- Have fun!
