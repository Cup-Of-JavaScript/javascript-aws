# DynamoDB
- [AWS DynamoDB Fundamentals ~2h (Skip 4 & 5)](https://app.pluralsight.com/library/courses/aws-dynamodb-fundamentals/table-of-contents) (UI is old)
- [Best Practice](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html)
- [Anatomy of an Item](https://www.dynamodbguide.com/anatomy-of-an-item/)
- [JSON to DynamoDB JSON Tool](https://dynobase.dev/dynamodb-json-converter-tool/#:~:text=DynamoDB%20Converter%20Tool,a%20DynamoDB%2Dcompatible%20JSON%20format.)

# Three Ways to Read/Write with DynamoDB
- [Native](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html)
- [Document Client](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-document-client.html)
- [PartiQL](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.statements.html)

# DynamoDB Datatypes
- [DataTypes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBMapper.DataTypes.html)
- All Numbers: "N"
- Strings: "S" (Useful for storing documents `JSON.parse()`, `JSON.stringify()`)
- Document (Multiple values of different types) "BOOL"
- Set  (Multiple values of the same type) "SS", "NS", "BS"
- List (arrays []) "L"
- Map  (dictionary {}) "M"
- When reading/writing from/to DynamoDB using the native approach, we must specify the data types in our data.  For example:

```
{
    "Name": { "S": "Alex DeBrie" },
    "Age": { "N": "29" },
    "Roles": { "L": 
        [
            { "S": "Admin" }, 
            { "S": "User" }
        ]
    },
    "map" : { 
        "M": {
            "age" : {
                "N": "55"
            }, 
            "name" : {
                "S": "Peter"
            }
        }
    }
}
```

However when using the `DocumentClient`, we can avoid specifying the data types in our data:

```
const params = {
    TableName: TABLE_NAME,
    Item: item // <== Can be any JavaScript flat object.
};
await ddbc.put(params).promise();

```

# DynamoDB Proxy
These files show the three ways to interact with DynamoDB:
- [DDB-Proxy](./ddb/ddb-proxy.js)
- [Client](./ddb/test.js)

# Querying
- [Native DDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.04.html)
- [PartiQL](https://abba.dev/blog/dynamodb-partiql-javascript)
- [Examples](https://www.fernandomc.com/posts/eight-examples-of-fetching-data-from-dynamodb-with-node/)

# DynamoDB PartiQL
DynamoDB supports a subset of the official PartiQL specification.  For example, the `like` keyword
 is not supported in DynamoDB.  PartiQL does not support `join` operations with DynamoDB.

[Statements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.statements.html)
[Functions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-functions.html)

#### Table Scan
Avoid table scans by creating indexes for the fields (up to two) in your where clause.  The pricing details of an index is the same for tables.

```
Using the SELECT statement can result in a full table scan if an equality condition with a partition key is not provided in the WHERE clause.
```
Querying an Index:
```
SELECT * FROM "Customer"."firstName-index" where firstName = 'Tom'
```

# Attributes
- Item (a row)
- Attribute (a column)
- Table (A collection of items)

# Keys
- Primary Keys => Partition key
- Compositie Key => Partition key & sort key (Used to ensure uniqueness)

# Secondary Index
- Indexs that allow querying target attributes

# Capacity Units
- Write Capacity Unit (WCU): 1 write operation per second of 1KB
- Read Capacity Unit (RCU): 1 or 2 read operations per second of 4KB
  - Eventual consistency $ (reading data before it has been throughly stored - dirty reads)
  - Strong consistency $$$ (reading the most up-to-date data after being replicated)
