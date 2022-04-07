const ddbProxy = require('./ddb-proxy.js');

const main = async () => {
    //const r = await ddbProxy.pQueryItems('Marty Burolla');

    // const d = {
    //     CUSTOMER_ID: 4,
    //     CUSTOMER_NAME: "test"
    // }
    //await ddbProxy.pInsertItem(d);

    // const i = {
    //     CUSTOMER_ID: 6, // Partion key is required.
    //     firstName: "Marty", 
    //     lastName: "Burolla",
    //     age: 19, 
    //     cats: [
    //         {
    //             name: "Gypsy", 
    //             color: "black"
    //         }
    //     ]
    // }
    // await ddbProxy.dcInsertItem(i);


    let r = await ddbProxy.dcGetItem(6);
    console.log(r);

}

main();
