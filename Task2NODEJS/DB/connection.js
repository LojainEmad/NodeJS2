import mysql2 from 'mysql2';


const connection = mysql2.createConnection({
    host: 'localhost',
    database: 'msp',
    user: 'root',
    port:3306,
    password:'W@2915djkq#'
  });

  export default connection;