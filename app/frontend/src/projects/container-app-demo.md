# Demo application for Azure container apps

# Project motivations 
I wanted to try this project to continue building off the skills I have learned while exploring web development. I intend to use this project as a test application when running kubernetes, and container technologies from azure and AWS.

The motivation behind this project came from reading a reddit post. This post talked about doing a software engineering interview where this individual was asked to create a full stack casino application that allowed users to authenticate, deposit/withdraw from their accounts, and play the games.

### Application features

- /api/v1/auth -> user can register and login to their account
- /api/v1/transaction -> user can deposit, withdrawl, and check their transaction history
- /api/v1/games -> list all games, play a single game, create a game 

### Architecture / Tech Stack 

I plan on hosting this application on Azure container apps.

Tech stack: 
- Azure container apps (Compute)
- Github Actions (CI/CD)
- CosmosDB (DB)
- Terraform (IaC) 

###  the local dev environment 

to run the application locally, run the following commands: 

``` docker-compose build ```

``` docker-compose up ```


### Steps to deploy on your own 

1. Deploy the underlying infrastructure 

``` cd terraform/infra ```

NOTE: you can run terraform init, if you want to review what you are deploying first 

``` terraform init && terraform apply -auto-approve ``` 

**This may take up to 10 minutes**


2. build and push the application containers 

- login to the az cli first 

``` az login ``` 

- run the build script (build.sh), the script accepts one argument 

``` ./build.sh v1.0 ``` 


3. deploy the application 

``` cd terraform/app ``` 

The following variables will need to be inputted to the variables.tf file located in the terraform/app directory.

- backend-tag: you supply this value to the build script (ex: v1.0)
- frontend-tag: you supply this value to the build script (ex: v1.0)
- acr-password: run the following az cli command to get this value 

``` az acr credential show -n casinomernregistry ```

- cors_domain: this value will be supplied as an output when the infrastructure deployment is completed
- db_password: run the following AZ cli command to get this value 

``` az cosmosdb keys list --name casino-db --resource-group casino-mern-app ``` 


4. visit the application 

run the following command to find the fqdn 

``` az containerapp show --name casino-frontend --resource-group casino-mern-app | jq .properties.latestRevisionFqdn ``` 

put the FQDN in a browser with https:// in front

if done correctly, you should be able to see the following image

![app](app.png "app")


### CI/CD 

The CI/CD setup for this project is very simple. the Application will get built when you commit to the main branch. This can be from a direct commit, or a merge into the main branch. the CD portion is a manually triggered pipeline, you can check whether or not you're going to deploy the frontend, backend, or both. 

There is a blank pipeline present, i'm working on learning to write unit + integration tests with Jest. Eventually, I'll write the testing pipeline to run those tests on every commit.

**NOTE: if you want to use CI/CD the following secrets need to be added: 
    - ACR_USERNAME
    - ACR_PASSWORD
    - AZURE_CREDENTIALS