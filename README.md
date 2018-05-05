#Allergy Storm - Forecasting Safety

![Allergy Storm](http://i.imgur.com/Ua80D2q.png)


<h3>1.What is Allergy Storm:</h3>

<p>Allergy Storm is a Single-Page Web Application created for the contest FiiCode 2018. It's purpose is to remind it's users about an allergy they have, at a time they choose.</p>
<p>Being also a type of social platform, Allergy Storm allows the people who use it to create a small group, in which the participants can talk to eachother. Once the date of the reminder, set by the owner of the group, comes, everyone in that group will be notified about the allergy specified by the creator.</p>

<h3>2.Requirements:</h3>

<i>Taken directly from the React Docs:</i>

<blockquote>
React supports all popular browsers, including Internet Explorer 9 and above, although <a href="https://reactjs.org/docs/javascript-environment-requirements.html">some polyfills are required</a> for older browsers such as IE 9 and IE 10.
</blockquote>

<blockquote>
<b>Note</b>

We don’t support older browsers that don’t support ES5 methods, but you may find that your apps do work in older browsers if polyfills such as <a href="https://github.com/es-shims/es5-shim">es5-shim and es5-sham</a> are included in the page. You’re on your own if you choose to take this path.
</blockquote>

- plus an internet connection.

<h3>3.Technologies used:</h3>

<h4><u>a. Front-end:</u></h4>

<ul>
<li>
ReactJS
</li>
<li>
ReactRouter 4
</li>
<li>
Redux Thunk
</li>
<li>
Sass
</li>
<li>
Ant Design - UI library
</li>
</ul>

<p>Javascript is formatted with jscs's airbnb standard.</p>
<p>We use Webpack 3.8.1 for compiling.</p>
<p>Babel is used for React, but also for the "life-saving" Object Spread Operator from ES7.</p>

<h4><u>b. Back-end:</u></h4>

<ul>
<li>
NodeJS with ExpressJS
</li>
<li>
MongoDB
</li>
<li>
Cluster Service
</li>
<li>
Other production modules for Express
</li>
</ul>

<p>Express is configured to run for production, with the compression and cluster service modules enabled.</p>
<p>A DDoS protection is in place for Express and as mentioned before, a cluster service in case one of the server instances fails against a DDos.</p>
<p>To prevent a person from creating too many groups in a short period of time, we have limited it to 3 per hour. Any further requests will result in a response status 429 Too Many Requests.</p>
<p>Authentication is based on JWT. The token expires after 24 hours if the user does not check the Remember me CheckBox. If he does, he will be remembered until he logs out.</p>
<p>The JWT is verified in BaseApp and a middleware called <b>authValidationMiddleware</b> checks if the token is valid.</p>

<h3>4.Installation:</h3>

<h4>This project has been developed on a system with the following:</h4>

<b>Please take note of these if you wish to run it locally without encountering any issues</b>

<ul>
<li>
Ubuntu 16.04 LTS
</li>
<li>
Node 9.10.1
</li>
<li>
npm 5.6.0
</li>
<li>
webpack 3.8.1
</li>
<li>
MongoDB 3.4.10, git version: 078f28920cb24de0dd479b5ea6c66c644f6326e9
</li>
</ul>

<h4>Installation steps:</h4>

<p>Create a folder in the root folder named db-config.</p>
<p>In it create a file called index.json</p>
<p>Paste the following in index.json and modify DATABASE_NAME and YOUR_SECRET_KEY to ones of your choice:</p>

```javascript
{
  "dbUri": "mongodb://localhost/DATABASE_NAME",
  "jwtSecret": "YOUR_SECRET_KEY"
}
```

<p>Install MongoDB: <a href="https://docs.mongodb.com/v3.4/installation/">Click here for a guide for v3.4</a></p>

<p>A database dump will can be found in the root folder under the name fiicode2018DB/

Import it using mongorestore:

```shell
mongorestore -d DATABASE_NAME fiicode2018DB/
```

</p>

<b>Unless you do this, the application will not work at all.</b>
<br/>
<b>Be mindful of your MondoDB version as the dump may not work on newer versions ( not tested )</b>

<p>
Next install Node and npm locally. <a href="https://www.npmjs.com/get-npm">Click here for a guide</a>
</p>

<p>After you install the above, go to the root folder and run:</p>

```shell
npm install
```

<p>to install all modules required for running the application.</p>

<b>I have configured NodeMailer to work for an email created only with the purpose of the contest. Please do not abuse it as I will make the password public.</b>

<p>To start a development server use this command:</p>

```shell
npm start
```

<p>To run a production cluster service:</p>

```shell
npm run cluster-server
```

<p>If you wish to rebuild the project with your own version of Node for development:</p>

```shell
npm run bundle
```

<p>If you wish to rebuild the project with your own version of Node for production:</p>

```shell
npm run bundle-p
```

<b>Sometimes the <i>bcrypt</i> module does not install correctly. To reinstall it just run:</b>

```shell
npm install bcrypt --save
```

<h3>5.How to test the application:</h3>

<p>This section is not for me to tell you how to evaluate it but to tell you how to disabled production mode.</p>

<p>If you want to be able to add more than 3 groups/hour, remove <b>createGroupLimiter</b> middleware from the /allergies/save-group route in /res/handlers/allergies.js</p>

<p>To remove the DDoS limit, delete this line from index.js ( the server file in the root folder ): </p>

```javascript
app.use(ddos.express);
```

<h3>6.Information sources:</h3>

<ul>
<li>
<a href="https://acaai.org/">https://acaai.org/</a> - Full text for the allergy pages and videos.
</li>
<li>
<a href="http://www.allergenonline.org/databasebrowse.shtml">http://www.allergenonline.org/databasebrowse.shtml</a> - The protein based allergens table.
</li>
</ul>

<p>For the authentication I have used <a href="https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt">this guide</a> about 1 year ago. Since then I have modified it to match my needs, just in case it was raising any issues.</p>