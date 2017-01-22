# alexa-node-server
Simple nodejs alexa api gateway for receiving requests on your own server from alexa aws service, and sending conformant responces

# Getting Started
Follow (*shameless plug*) my tutorial on '<a href="https://peterbelcher.com/creating-a-web-service-based-alexa-skill">creating a web service based alexa skill</a>'
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
Whilst the skill is in dev mode, we have used the aws.user.userId field to validate access to the endpoint. When you update the config file
with your own userId, it prevents any other alexa function or user from using the application, which is great in dev.<br/>However once you
get to production, you would be advised to replace this with a check and lookup against your own user database, so others can actually use
your skill too!
<br/><br/>
You can find your aws user id by triggering a sample call from the aws alexa console, and grab your id from the request content it generates

# Need More Help with NodeJS Applications?
More information about a basic nodeJS app can be found via another (*shameless plug*) tutorial i've written, located at:<br/>
http://peterbelcher.com/super-simple-app-api-using-nodejs/
