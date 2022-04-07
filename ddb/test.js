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

    // INSERT JS BLOB
    // const data = {
    //     firstName: "Joe",
    //     lastName: "Smith",
    //     cats: ["Gypsy", "Lily"],
    //     age: 33
    // }
    // const r = await ddbProxy.dcInsertInfoForCustomerId(5, data);

    // SELECT ONE
    // const customerId = 1;
    // const r = await ddbProxy.dcGetItem(customerId);

    // SELECT INFO
    //const r = await ddbProxy.dcGetInfoForCustomer(5);

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

    // INSERT ONE
    // const r = await ddbProxy.nInsert(4, "John", "Doe");

    // SELECT ONE
    // const r = await ddbProxy.nGetItem(3);

    console.log(r);
}

documentClient();
//partiQL();
//native();
