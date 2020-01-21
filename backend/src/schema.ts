import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import { makeExecutableSchema } from "graphql-tools";
import path from "path";


//파일로더를 통해 - graphql 들을 읽어들임
const allTypes: any = fileLoader(path.join(__dirname, "./api/**/*.graphql"));

const allResolvers: any = fileLoader(
  path.join(__dirname, "./api/**/*.resolvers.*")
);

const mergedTypes = mergeTypes(allTypes);
const mergedResolvers: any = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers
});

export default schema;