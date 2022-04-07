# DynamoDB
- [AWS DynamoDB Fundamentals ~2h (Skip 4 & 5)](https://app.pluralsight.com/library/courses/aws-dynamodb-fundamentals/table-of-contents) (UI is old)
- [Best Practice](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html)
- [Anatomy of an Item](https://www.dynamodbguide.com/anatomy-of-an-item/)
-[JSON to DynamoDB JSON Tool](https://dynobase.dev/dynamodb-json-converter-tool/#:~:text=DynamoDB%20Converter%20Tool,a%20DynamoDB%2Dcompatible%20JSON%20format.)
- [DynamoDB JSON Mapper Library](https://www.npmjs.com/package/dynamodb)

# DynamoDB Datatypes
- [DataTypes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBMapper.DataTypes.html)
- All Numbers: "N"
- Strings: "S"
- Document (Multiple values of different types) "BOOL"
- Set  (Multiple values of the same type) "SS", "NS", "BS"
- List (arrays []) "L"
- Map  (dictionary {}) "M"
- When reading/writing from/to DynamoDB NATIVELY, we must specify the data types in our data.  For example:

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

However when using the Document Client, we can avoid specifying the data types:

```
const params = {
    TableName: TABLE_NAME,
    Item: item // <== Can be any JavaScript flat object.
};
await ddbc.put(params).promise();

```

# Three Ways to Interact with DynamoDB
- [Native](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html)
- [Document Client](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-document-client.html)
- [PartiQL](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.statements.html)

# Pros & Cons
- Pros: Fast, scaleable, relatively easy
- Cons: Does not like highly nested data

# Querying
- [Native DDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.04.html)
- [PartiQL](https://abba.dev/blog/dynamodb-partiql-javascript)
-[Examples](https://www.fernandomc.com/posts/eight-examples-of-fetching-data-from-dynamodb-with-node/)

# Notes
- DynamoDB is "similar" to MongoDB
- No defined schema unlike reltional databases, however DynamoDB is easy to use with flat documents
- Up to us to create unique ids for documents

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
