import { createConnection } from 'typeorm';

/*
  this file simply mounts the connection to the database and
  fetch the data from the ormconfig.json file
*/

createConnection();
