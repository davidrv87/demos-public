# Demo SAM

## Steps
1. Run `sam build`
2. Run `sam local start-api`
3. Test from Postman
  - `http://localhost:3000/weather`
  - `http://localhost:3000/weather?lat=-76.29&lon=0.0` (Antartica)
4. Run `sam deploy --guided --profile david-aai-cli`
  - Stack name `m13-devops-sam`
5. Show CloudFormation progress
6. Get the API URL from the output
7. Test the deployed version
  - `<API_URL>/weather`
  - `<API_URL>/weather?lat=-76.29&lon=0.0` (Antartica)
8. Show AWS Add-on in VS Code and invoke Lambda direcly
9. Destroy the stack `sam delete --stack-name m13-devops-sam --profile david-aai-cli`
10. Show Cloud Formation progress
