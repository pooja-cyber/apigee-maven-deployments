### Maven Deployment Examples For Apigee Platform 

#### Summary

This project has simple examples of [Apache Maven](http://maven.apache.org/) configuration for deploying API bundles to [Apigee](http://apigee.com/about/products/apis-and-edge) cloud platfrom. Maven is very popular tool within Enterprise tech mainly used for performing software build management and deployment.

Examples in this project ilustrate how to perform API configuration deployments. [Apigee Maven deployment plugin](https://github.com/apigee/apigee-deploy-maven-plugin) is being used in Maven configuration.

#### Project structure

2 project directories represent 2 separate API projects.

##### simple-api
First **simple-api** is minimal example Apigee API proxy which uses [httpbin.org](http://httpbin.org) as a backend. 

It has **apiproxy** subdirectory (the actual Apigee API proxy bundle) and **deploy** sub directory which contains Maven configuration for deployment (*pom.xml* and *confing.json*).

##### simple-api-with-node.js
Second **simple-api-with-node.js** is again minimal example of Apigee API proxy with Node.js application deployed together as a backend target for API. This project is similar to the first one as it has **apiproxy** subdirectory containing the actual Apigee proxy bundle as well as **deploy** directory with Maven configuration files.

In addition it has **node** directory which contains Node.js application. This application is not dependent on Apigee Edge and can be run localy as independent Node app. If its deployed to Apigee Edge it becomes the backend target for API proxy.

If you are interested to learn more about using Node.js applications in Apigee Edge platform, I have created project on GitHub which describes steps of creating dynamic API mock in Apigee.

##### deployment 

In order to deploy API proxy to Apigee Edge Cloud you have to navigate to **deploy** directory 

    cd /deploy

and run Maven deployment command


    mvn apigee-enterprise:deploy -P{environment name} -Dusername={Apigee user username} -Dpassword={Apigee user password} -Dorganisation={Apigee Edge Organization} clean


Above deployment command requires you to supply Apigee Edge organization name, environment name and username / password for Apigee user who is deploying API.

Check this detailed blog post on [PopularOwl Labs](http://www.popularowl.com) for use cases of Apigee Maven deployment.
Created and maintained by [Saulius Zukauskas](https://plus.google.com/u/0/109035477820783127965/posts).