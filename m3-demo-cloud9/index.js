// Import the clients and required commands from AWS SDK v3
const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");
const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");

// Load the configuration
const config = require("./config");

// Instantiate clients
// This clients will use the credentials from Cloud9
const s3Client = new S3Client({ region: "eu-west-3", apiVersion: "2006-03-01" });
const snsClient = new SNSClient({ region: "eu-west-3", apiVersion: "2010-03-31" });

// This function list the buckets of the account in the given region (eu-west-3)
const getListOfBuckets = async () => {
  console.log("Retrieving the list of buckets...")

  // Create the ListBucketsCommand to list buckets and send it using the S# client
  const cmd = new ListBucketsCommand({});
  const response = await s3Client.send(cmd);

  let formattedMsg = "";

  // Format the response
  response.Buckets.forEach(bucket => {
    formattedMsg += `${bucket.Name} created on ${bucket.CreationDate}\n`
  });

  console.log("Done!")
  return formattedMsg;
};

// This function publishes a message in SNS topic
const publishSNSMessage = async (message) => {
  console.log("Publishing the message to SNS topic")

  // Build the input using the topic ARN, the message from the arguments and a subject
  const input = {
    TopicArn: config.topicArn,
    Message: message,
    Subject: config.emailSubject
  };

  // Craete the PublishCommand and send it using the SNS client
  const cmd = new PublishCommand(input);
  await snsClient.send(cmd);
  console.log("Done!")
};

(async () => {
  const buckets = await getListOfBuckets();
  await publishSNSMessage(buckets);
})()

