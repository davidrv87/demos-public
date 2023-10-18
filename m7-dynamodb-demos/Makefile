endpoint_url   = http://localhost:9999
table_name     = m7-demo-table

create-ddb-table:
	aws dynamodb create-table \
		--table-name $(table_name) \
		--attribute-definitions AttributeName=title,AttributeType=S AttributeName=year,AttributeType=N \
		--key-schema AttributeName=title,KeyType=HASH AttributeName=year,KeyType=RANGE \
		--provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
		--endpoint-url=$(endpoint_url)

populate-ddb-data:
	aws dynamodb batch-write-item \
		--request-items file://data.json \
		--endpoint-url $(endpoint_url)

list-ddb-tables:
	aws dynamodb list-tables --endpoint-url $(endpoint_url)

scan-ddb-table:
	aws dynamodb scan \
		--table-name $(table_name) \
		--endpoint-url $(endpoint_url)

delete-ddb-table:
	aws dynamodb delete-table \
		--table-name $(table_name) \
		--endpoint-url $(endpoint_url)
