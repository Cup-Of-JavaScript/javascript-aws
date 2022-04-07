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
    //     customerId: 1,
    //     firstName: "Marty", 
    //     lastName: "Burolla",
    //     age: 19, 
    // }
    // let r = await ddbProxy.dcInsertItem(customer);

    // Select One
    // const customerId = 1;
    // let r = await ddbProxy.dcGetItem(customerId);

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