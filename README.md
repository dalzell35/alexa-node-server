# alexa-node-server
Simple nodejs alexa api gateway for receiving requests on your own server from alexa aws service, and sending conformant responces

Note that the alexa server requires an HTTPS connection, so enure to set up certs, and note we use https module.
Set location of certs in config file
Based on letsencrypt. Add link for letsencrypt nginx & apache tutorial
Also mention aws user and other val. Need to use the user object in prod. As dev only accessible to you, can limit to being from your account
Add a note about trigger names and how they map to this app
