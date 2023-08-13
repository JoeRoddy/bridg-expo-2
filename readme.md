### Bridg - React Native Starter

This example uses Netlify cloud functions as the execution environment for running DB queries. (We need a secure place for Bridg to talk to the DB)

There is nothing special about Netlify here. This would work on any cloud provider / deployed JavaScript evironment. Some other potential options:

- AWS Lambda
- Firebase Functions
- Express app deployed on Render, Heroku, wherever
- Next.js API route

(You probably get the idea)

### Push your schema to your DB:

1. Add a DB connection string to `.env`
   - You can add `.env` to your `.gitignore` now, or rename it `.env.local`
2. `npm run prisma:push`

### Configuring Bridg with Netlify:

1. Clone/fork this repository and push it to Github as a new project
2. Create a Netlify account if you don't have one yet: https://netlify.com
3. Install Netlify CLI: `npm install netlify-cli -g`
4. Create a Netlify project: `ntl init`
   - Choose "Create & configure a new site"
   - Press return through all options
   - The CLI should create this new project linked to your Github repo, if you open the Netlify web app, you should see your new app, and a deploy in progress
5. On Netlify, go to: Site configuration > Environment variables > Add a variable
   - Add `DATABASE_URL` for "key" and your connection string for "values"
6. Go to: Deploys > "Trigger Deploy" dropdown > Clear cache & deploy site
7. `npm run generate`

Your mobile app should now be able to run queries via Bridg running on your Netlify cloud function.

### Running the app

1. `npm install`
2. `npm run ios` or `npm run android`
