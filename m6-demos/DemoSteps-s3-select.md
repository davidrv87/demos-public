# Using S3 Select

1. Upload the `ProductCatalog.json` file to a bucket
2. Select the object and go to Actions > Query with S3 Select
3. Select Format `JSON`
4. Select JSON content type `Document`
5. No compression
6. Run the following query `SELECT p FROM s3object[*].Products[*] p where p.id=3`
7. Run the following query to just get the price `SELECT p.price FROM s3object[*].Products[*] p where p.id=3`
