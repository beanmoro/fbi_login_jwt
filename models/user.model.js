import { pool } from "../database/connection.database.js";

const findOneByEmail = async(email) => {
    const query = {
        text: ` SELECT * FROM USERS
                WHERE EMAIL = $1`,
        values: [email]
    }
    const { rows } = await pool.query(query);
    return rows[0]; 
}

const create = async({ email, password, username}) => {
    const query = {
        text: ` INSERT INTO USERS (EMAIL, PASSWORD)
                VALUES: ($1, $2, $3)
                RETURNING *;`,
        values: [email, password, username]
    }
    const { rows } = await pool.query(query);
    return rows[0];
}

export const UserModel = {
    findOneByEmail,
    create
}