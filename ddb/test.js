//
// File: test.js
// Auth: Martin Burolla
// Date: 4/7/2022
// Desc: Test client for DynamoDB Proxy.
//

const ddbProxy = require('./ddb-proxy.js');

const documentClient = async () => {
   
    // INSERT ONE
    // Works fine for a flat structure.
    const customer = {
        customerId: 1,
        firstName: "Adraina", 
        lastName: "Cheeks",
        age: 27, 
        zip: 29501
    }
    const r = await ddbProxy.dcInsertItem(customer);

    // INSERT JS BLOB
    // Works for any type of nested structure.
    // const data = {
    //     firstName: "Joe",
    //     lastName: "Smith",
    //     cats: [{
    //             name: "Gypsy",
    //             color: "Black"
    //         },
    //         {
    //             name: "Gabby",
    //             color: "Brown"
    //         }],
    //     age: 33
    // }
    // const r = await ddbProxy.dcInsertInfoForCustomerId(6, data);

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
