import { RekognitionClient, DetectLabelsCommand } from "@aws-sdk/client-rekognition"

const rekognitionClient = new RekognitionClient({ version: '2016-06-27', region: 'eu-central-1'})

export const handler = async(event) => {
  // Get the event from S3
  const bucketName = event.Records[0].s3.bucket.name
  const objectKey = event.Records[0].s3.object.key

  // Create the input for the Rekognition command
  const input = {
    Image: {
      S3Object: {
        Bucket: bucketName,
        Name: objectKey
      }
    },
    MaxLabels: 3
  }

  // Build the command and send
  const cmd = new DetectLabelsCommand(input)
  const response = await rekognitionClient.send(cmd)

  // Extract the labels
  const { Labels: labels } = response
  const result = labels.map(label => `Label: ${label.Name}, Confidence: ${label.Confidence}`)

  console.log(JSON.stringify(result, undefined, 2))

  return result
}
