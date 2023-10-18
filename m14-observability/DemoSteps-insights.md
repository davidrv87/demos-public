# Application Insights

🚨 Use eu-central-1

## Pre-req
- Lambda `get-fibonacci`
- Lambda `get-math-operations`
- Both Lambdas tagged so we can create the Resource Group

## Steps

1. Go to `AWS Resource Groups`
2. Create a new Resource Group > Tag based
3. For tags, use:
  - Environment: `dev`
  - Team: `backend`
4. Name: `MyBackendTeam`
5. Go to `CloudWatch` > `Insights` > `Application Insights`
6. Add an application > Resource group based application
7. Select `MyBackendteam` resource group > Next > Next > Next
8. Once created, show `Configuration History` for the Info notifications
9. Show a particular Lambda from Components
