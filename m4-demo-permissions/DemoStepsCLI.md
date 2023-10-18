# Demo Permissions from CLI

## Users

`userwithpermissionboundary`, initially, does not have permissions to access S3.
`userwithiamaccess` is used to inspect the user above and, later, attach elevated boundaries

## Steps

From `m4-demo-permissions` EC2 instance, execute the following, as this instance has the named profiles

> HIGHLIGHT THE FACT THAT HAVING CREDENTIALS IN EC2 IS NOT BEST PRACTICE, IT IS JUST FOR DEMO PURPOSES

1. Create a bucket with the user userwithpermissionboundary profile.

`aws s3 mb s3://bucketfordevonawsdemo05122021 --profile userwithpermissionboundary`

2. Our attempt will fail to create the bucket. Let’s investigate.

`aws iam get-user --user-name userwithpermissionboundary --profile userwithiamaccess`

3. View the users’ (userwithpermissionboundary) permissions boundary.

`aws iam get-policy-version --policy-arn arn:aws:iam::458213628860:policy/boundaries-policy --version-id v1 --profile userwithiamaccess`

4. We will then update the users’ permissions boundary to a new permissions boundary that allows for S3 access. To accomplish the update, we will use the elevated permissions of another user (userwithiamaccess) to issue the put-user-permissions-boundary command. This command updates the user (userwithpermissionboundary) to a new permissions boundary that includes S3 access

`aws iam put-user-permissions-boundary --permissions-boundary arn:aws:iam::458213628860:policy/boundaries-elevated-policy --user-name userwithpermissionboundary --profile userwithiamaccess`

5. Determine whether the user has been updated to the new permissions boundary.

`aws iam get-user --user-name userwithpermissionboundary --profile userwithiamaccess`

6. Check the policy with elevated permissions

`aws iam get-policy-version --policy-arn arn:aws:iam::458213628860:policy/boundaries-elevated-policy --version-id v1 --profile userwithiamaccess`

7. Attempt to create an S3 bucket using AWS CLI commands with the same user.

`aws s3 mb s3://bucketfordevonawsdemo05122021 --profile userwithpermissionboundary`

Success!

8. Remove the bucket

`aws s3 rb s3://bucketfordevonawsdemo05122021 --profile userwithpermissionboundary`