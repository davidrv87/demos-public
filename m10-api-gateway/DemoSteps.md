# Demo usage of API Gateway

## Pre-req
- Lambda `get-fibonacci`
- Lambda `get-math-operations`

## Steps

1. Create REST API `m11-demo-api`
2. Add resource & method `GET /fibonacci` and assign `get-fibonacci` Lambda function (Use Lambda Proxy Integration unchecked)
  - In `Method Request`:
    - Set `Request Validator` to `Validate query string parameters and headers`
    - In `URL Query String Parameters` add `amount` and set it as `Required`
  - In `Integration Request` add a Mapping Template
    - Mark `When there are no templates defined (recommended)` and set `application/json` as Content-Type
    - Set the template to:
```
#set($amountParam = $input.params("amount"))
{
  "amount": "$amountParam"
}

📝 https://velocity.apache.org/engine/2.0/vtl-reference.html

```
  - In `Method Response` add `400` status
  - In `Integration Response`
    - For the `200` add the following `application/json` template
```
#set($result = $input.path('$.result'))
{
    "amount": $result.amount,
    "series": "$result.series"
}
```
  - Add another `integration response` for the `400` status with the following values
      - Lambda Error Regex `\[BadRequest\].*`
      - Add the following `application/json` template
```
{
  "errorMessage": $input.json('$.errorMessage')
}
```
  - Test without `amount`, with `amount=10` and `amount=bad`

✅ CONTINUE HERE ✅
4. Go to Actions > Deploy API and create a new stage `dev`
5. Test from Postman
6. Update the `Integration Response` of the `GET /fibonacci` by setting the 200 Mapping template to
```
#set($result = $input.path('$.result'))
{
    "amount": $result.amount,
    "series": "$result.series",
    "key": "I'm from the canary release"
}
```
7. Go to Stages > dev > Canary and set it to 50/50%
8. Go to Resources > Actions > Deploy API > dev (Canary Enabled)
9. Test the `/fibonacci` a few times
10. Promote the Canary
11. Test again and show that only the new version is available
