# Serverless-CRUD-app-deployed

Project setup

This project is a simple application that uses basic CRUD operations using AWS Serverless

1. Create a DynamoDb table and you can either choose to a customized name or follow what used in this project
2. Create a Role and attach these two (2) policies:
    CloudWatchLogsFullAccess
   AmazonDynamoDBFullAccess

3. A lambda function usuing the Role created earlier.
--Remember to increase the timeout of the Lambda function under Genera; configurations to 3 mins at least

4. Create an API Gateway using a REST API

5. Deploy the app to S3

More reference can be found on the notes.txt
