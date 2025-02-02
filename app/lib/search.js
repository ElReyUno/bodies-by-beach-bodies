import pool from '../../lib/mariadb';

export async function searchDatabase(query) {
    let conn;
    try {
        conn = await pool.getConnection();
        const results = await conn.query("SELECT * FROM your_table WHERE MATCH (title, content) AGAINST (? IN NATURAL LANGUAGE MODE)", [query]);
        return results;
    } finally {
        if (conn) conn.release();
    }
}