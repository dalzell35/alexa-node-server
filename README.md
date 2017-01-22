# alexa-node-server
Simple nodejs alexa api gateway for receiving requests on your own server from alexa aws service, and sending conformant responces

# Getting Started
Follow *shameless plug* my tutorial on '<a href="https://peterbelcher.com/creating-a-web-service-based-alexa-skill">creating a web service based alexa skill</a>'
to get set up with a sample application, triggers and utterances<br/><br/>
Next, ensure your web server is set up and has nodeJS up and running. Great tutorial from digitalocean at:<br/>
https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04
<br/><br/>
Next, amazon requires that any request to a non lambda function is made using HTTPS. If you have not already done this,
digitalocean again have a nice tutorial. Check out the links below (depending on your web server):<br/>
https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-14-04<br/>
https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-14-04<br/><br/>
Finally, its time to configure the application. Review the config/dev.json file, and update the links to point to your
certificate files, and AWS user id.

##A Note on awsUser & Moving From Development
Also mention aws user and other val. Need to use the user object in prod. As dev only accessible to you, can limit to being from your account
Add a note about trigger names and how they map to this app

# Need More Help with NodeJS Applications?
More information about a basic nodeJS app can be found via another *shameless plug* tutorial i've written, located at:<br/>
http://peterbelcher.com/super-simple-app-api-using-nodejs/
