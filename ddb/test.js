const ddbProxy = require('./ddb-proxy.js');

const main = async () => {
    const r = await ddbProxy.queryItems();
    console.log(r);
}

main();
