//
// File: test.js
// Auth: Martin Burolla
// Date: 4/7/2022
// Desc: Test client for DynamoDB Proxy.
//

const ddbProxy = require('./ddb-proxy.js');

const documentClient = async () => {
   
    // INSERT ONE
    // const customer = {
    //     customerId: 2,
    //     firstName: "Marty", 
    //     lastName: "Burolla",
    //     age: 19, 
    //     zip: 14519
    // }
    // const r = await ddbProxy.dcInsertItem(customer);

    // SELECT ONE
    // const customerId = 1;
    // const r = await ddbProxy.dcGetItem(customerId);

    // QUERY
    // const r = await ddbProxy.dcQuery();

    // UPDATE
    // const r = await ddbProxy.dcUpdate(1, "John", "Smith");

    // DELETE
    //const r = await ddbProxy.dcDelete(1);

    console.log(r);
}

const partiQL = async () => {

    // INSERT ONE
    // await ddbProxy.pInsertItem(3, "Patty", "Same");

    // SELECT ONE
    // const r = await ddbProxy.pGetItem(1);

    // QUERY
    // const r = await ddbProxy.pQuery(2);

    // UPDATE
    // const r = await ddbProxy.pUpdate(3, "Patty2", "Same2");

    // DELETE
    // const r = await ddbProxy.pDelete(2);

    console.log(r);

}

const native = async () => {

}


//documentClient();
partiQL();
// native();