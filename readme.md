### Bridg - React Native Starter

This example uses Netlify cloud functions as the execution environment for where Bridg executes DB queries.

Configuring Bridg:

1. Create a Netlify account if you don't have one yet: https://netlify.com
2. Install Netlify CLI: `npm install netlify-cli -g`
3. Create a Netlify project: `ntl init`
4. Create an environment variable in your Netlify project called `DATABASE_URL` with your DB connection string

After your project is set up, you should now be able to push code to your repo, and have Netlify deploy your cloud function.

Starting the app:

1. `npm install`
2. `npm run ios` OR `npm run yarn`
