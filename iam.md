# IAM
[AWS re:Invent 2018](https://youtu.be/YQsK4MtsELU)

### PARC Model
```
{
  "Statement" :[{
      "Effect": "effect",  (Allow/Deny)
      "Principal":"principal", (the "who")
      "Action":"action", 
      "Resource":"arn",
      "Condition": {
          "condition": {
              "key": "value"
          }
      }
  }]
}
```

#### Principal
The entity that is allowed or denied access. 

- You may not see the principal often, because we attach policies to principals (IAM User or Role) most of the time.
- When attaching a policy to a bucket we will need to specify the principle (the who)

[All Types of Principals](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html)

Common types of principals:

### Service Principal [List](service-principals.md)
```
"Principal": {
    "Service": [
        "ecs.amazonaws.com",
        "elasticloadbalancing.amazonaws.com"
   ]
}
```

### ARN Principal
```
"Principal":{
    "AWS":"arn:aws:iam::account-number-without-hyphens:user/username"
}
```

### Any Principal
```
"Principal" : { "AWS" : "*" }
```

### IAM Role Principals
```
"Principal": { 
    "AWS": "arn:aws:iam::AWS-account-ID:role/role-name" 
}
```









# Videos
[Identity and Access Management on AWS: Policies and Permissions](
https://app.pluralsight.com/library/courses/identity-access-management-aws-policies-permissions/table-of-contents)


