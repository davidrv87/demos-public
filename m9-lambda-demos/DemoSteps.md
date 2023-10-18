# Demo rekognition

## Constraints

🚨 Rekognition is not available in all regions. Use `eu-central-1` for this demo

## Steps

0. SHOW AND DISCUSS https://docs.aws.amazon.com/lambda/latest/dg/chapter-layers.html - GO TO PACKAGING
1. Install dependencies locally for the Rekognition layer `npm i @aws-sdk/client-rekognition`
2. Zip the layer
```sh
mkdir nodejs
mv node_modules package* nodejs
zip -r rekognition-layer.zip nodejs
```
3. Upload the layer to Lambda (`Node 16`)
4. Create `m9-lambda-demo` (`Node 16` runtime) and attach the layer
5. Update the execution role: add `AmazonRekognitionFullAccess` and `AmazonS3ReadOnlyAccess`
6. Show the code `rekognition.js` code and then create the Lambda function and DEPLOY
7. Create the Event Notification (`rekognition-ingestion`) in the bucket `rekognition-ingest-bucket-for-lambda` for the `ingest/` folder for `.png` extension
8. Ask the students for something to draw, draw it and save it with `.png` extension (🚨 AND NO SPACES IN THE NAME 🚨)
9. Upload the file to the `ingest` folder in the bucket.
10. Show Cloudwatch logs and see the labels that Rekognition guessed
11. Go back to Lambda and show how versions and aliases can be created
