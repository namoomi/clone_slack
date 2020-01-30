import { Resolvers } from "src/types/resolver";
import { ModifyMessageMutationArgs, modifyMessageResponse } from "src/types/graphql";
import Message from "../../../../src/entities/Message";

const resolver:Resolvers={
  Mutation: {
      modifyMessage: async(_,args:ModifyMessageMutationArgs):Promise<modifyMessageResponse> => {
        const {id, contents} = args;

        const exist = await Message.findOne({id});
        if(!exist){
            return {
                ok:false,
                error:'no message'
            }
        }

        exist.contents = contents;
        await exist.save();

        return {
            ok:true,
            error:null
        }
      }
  }  
};
export default resolver;