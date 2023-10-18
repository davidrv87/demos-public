# How to pre-sign URLS from the CLI

1. Run `aws s3 presign s3://developing-on-aws-dummy-bucket-for-demos/aws-logo.png --expires-in 15 --region eu-west-3 --profile david-aai-cli`
2. Show how the image can be seen
3. Wait 15 seconds and refresh the browser
4. The URL has expired
