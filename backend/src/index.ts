import { GraphQLServer, PubSub } from "graphql-yoga";
//pubSub :  graphql의웹소켓 
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

const pubSub = new PubSub();
const server = new GraphQLServer({schema, context:{pubSub} });
    
connnection.then(()=>(
    server.start(()=> console.log("My First Graphql server is running on location"))
));