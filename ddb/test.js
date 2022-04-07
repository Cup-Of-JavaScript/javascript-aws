//
// File: test.js
// Auth: Martin Burolla
// Date: 4/7/2022
// Desc: Test client for DynamoDB Proxy.
//

const ddbProxy = require('./ddb-proxy.js');

const documentClient = async () => {
   
    // Insert One
    // const customer = {
    //     customerId: 2,
    //     firstName: "Marty", 
    //     lastName: "Burolla",
    //     age: 19, 
    //     zip: 14519
    // }
    // const r = await ddbProxy.dcInsertItem(customer);

    // Select One
    // const customerId = 1;
    // const r = await ddbProxy.dcGetItem(customerId);

    // Query
    // const r = await ddbProxy.dcQuery();

    // Update
    // const r = await ddbProxy.dcUpdate(1, "John", "Smith");

    // Delete
    //const r = await ddbProxy.dcDelete(1);

    console.log(r);
}

const native = async () => {

}

const partiQL = async () => {
    //const r = await ddbProxy.pQueryItems('Marty Burolla');

    // const d = {
    //     CUSTOMER_ID: 4,
    //     CUSTOMER_NAME: "test"
    // }
    //await ddbProxy.pInsertItem(d);
}


documentClient();
// native();
// partiQL();