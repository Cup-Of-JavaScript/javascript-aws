# DynamoDB
[AWS DynamoDB Fundamentals ~2h (Skip 4,5)](https://app.pluralsight.com/library/courses/aws-dynamodb-fundamentals/table-of-contents) (UI is old)

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

# Capacity Units
- Write Capacity Unit (WCU): 1 write operation per second of 1KB
- Read Capacity Unit (RCU): 1 or 2 read operations per second of 4KB
  - Eventual consistency $ (reading data before it has been throughly stored - dirty reads)
  - Strong consistency $$$ (reading the most up-to-date data after being replicated)

https://youtu.be/QLkkexbQ0qs

