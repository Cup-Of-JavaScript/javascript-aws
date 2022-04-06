# DynamoDB
- [AWS DynamoDB Fundamentals ~2h (Skip 4 & 5)](https://app.pluralsight.com/library/courses/aws-dynamodb-fundamentals/table-of-contents) (UI is old)
- [Best Practice](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html)
- [Anatomy of an Item](https://www.dynamodbguide.com/anatomy-of-an-item/)
-[JSON to DynamoDB JSON](https://dynobase.dev/dynamodb-json-converter-tool/#:~:text=DynamoDB%20Converter%20Tool,a%20DynamoDB%2Dcompatible%20JSON%20format.)


# Notes
- DynamoDB is "similar" to MongoDB
- No defined schema

# Attributes
- Item (a row)
- Attribute (a column)
- Table (A collection of items)

# Keys
- Primary Keys => Partition key
- Compositie Key => Partition key & sort key (Used to ensure uniqueness)

# Allowed Datatypes
- Scalar (One value at a time): `String`, `Integer`, `Null`, `Boolean`
- Document (Multiple values of different types)
- Set  (Multiple values of the same type)
- List (arrays []) "L"
- Map  (dictionary {}) "M"

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

# Secondary Index
- Indexs that allow querying target attributes
- 

# Capacity Units
- Write Capacity Unit (WCU): 1 write operation per second of 1KB
- Read Capacity Unit (RCU): 1 or 2 read operations per second of 4KB
  - Eventual consistency $ (reading data before it has been throughly stored - dirty reads)
  - Strong consistency $$$ (reading the most up-to-date data after being replicated)



https://youtu.be/QLkkexbQ0qs

