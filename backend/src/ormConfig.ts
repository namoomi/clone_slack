import {ConnectionOptions, createConnection, Connection} from "typeorm";
//함수는 createConnection뿐
//나머지는 typeorm에서 제공해주는 명세서? 같은

import dotenv from "dotenv";
dotenv.config();

//DB커넥션 옵션
const connectionOptions:ConnectionOptions = {
    type: "postgres",
    database : "slack",
    synchronize:true,
    logging:true,
    entities: ["entities/**/*.*"], //typeorm으로 db나 테이블을 만들때, 정보를 작성해주는 곳
    host: process.env.DB_HOST,
    port: 5432,
    username:process.env.DB_USERNAME,  
    password:process.env.DB_PASSWORD
}

//Promise 동기화로 만들어줌
//Connection이 수행되지 않을 경우 create되지 않는다는거여 ? 
const connection:Promise<Connection> = createConnection(connectionOptions);

export default connection;