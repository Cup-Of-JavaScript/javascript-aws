const { pool } = require("../../postgres-pool");
const ADD_PERSON = "insert into person (book_store_id, person_type_id, first_name, last_name, dob) values ($1, $2, $3, $4, $5) returning book_store_id, person_type_id, first_name, last_name, dob, person_id;"

exports.AddCustomer = async (person2) => {
    let retval = null;
    try {
        let r = await pool.query(ADD_PERSON, [person2.bookStoreId, person2.personTypeId, person2.firstName, person2.lastName, person2.dob]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}