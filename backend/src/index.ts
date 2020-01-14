import { GraphQLServer } from "graphql-yoga";
import connnection from "./ormConfig";
import schema from './schema';


/*
스키마(파일)로 전환 
//인자값과 리턴되는 값의 타입을 지정 ---스키마 
const typeDefs=`
    type Query{
        sayHello: String!
    }
`;

//함수의 비즈니스 로직이 실제로 들어가는 부분 
const resolvers = {
    Query: {
    sayHello:() => "Hi there :0)"
    }
};
const server = new GraphQLServer({typeDefs, resolvers});

*/

const server = new GraphQLServer({schema});
    
connnection.then(()=>(
    server.start(()=> console.log("My First Graphql server is running on location"))
));