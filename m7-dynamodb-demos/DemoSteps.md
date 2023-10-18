# Working with NoSQL Workbench and PartiQL

## NoSQL Workbeanch

1. Launch the application
2. Launch DynamoDB locally by running `docker-compose up`. This will start a container listening on port `9999`
3. Create the connection in NoSQL Workbench > Operation Builder > Add Connection > Local
  - Mention all the profiles listed in the application (comming from the ~/.aws/credentials)
4. Create a table by running `make create-ddb-table`
5. Populate the data by running `make populate-ddb-data`
6. Inspect the data using commands

## PartiQL

Run some commands to query the data using PartiQL

`select * from "m7-demo-table"`
`select * from "m7-demo-table" where running_time > 115`
