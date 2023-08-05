### Bridg - React Native Starter

This example uses Netlify cloud functions as the execution environment for where Bridg executes DB queries.

Push your schema to your DB:

1. Add a DB connection string to `.env`
   - You can add `.env` to your `.gitignore` to prevent your DB string from getting to your repo
2. `npm run prisma:push`

Configuring Bridg with Netlify:

1. Clone/fork this repository and push it to github as a new project
2. Create a Netlify account if you don't have one yet: https://netlify.com
3. Install Netlify CLI: `npm install netlify-cli -g`
4. Create a Netlify project: `ntl init`
   - Choose "Create & configure a new site"
   - Press return through all options
   - The CLI should create this new project linked to your Github repo, if you open the Netlify web app, you should see your new app, and a deploy in progress
5. On Netlify, go to: Site configuration > Environment variables > Add a variable
   - Add `DATABASE_URL` for "key" and your connection string for "values"
6. Go to: Deploys > "Trigger Deploy" dropdown > Clear cache & deploy site
7. In `package.json`, update the "generate" script to point to your netlify application:
   - https://your-netlify-app.netlify.app/.netlify/functions/bridg => https://actual-app-name.netlify.app/.netlify/functions/bridg
   - Just need to update the app name between `https://` and `.netlify.app`
   - I'm aware the generate script is heinous. This is a work in progress and will be unnecessary eventually.
8. `npm run generate`

After your project is set up, you should now be able to push code to your repo, and have Netlify update your cloud function automatically.

Starting the app:

1. `npm install`
2. `npm run ios`
