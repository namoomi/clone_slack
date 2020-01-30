import { Resolvers } from "src/types/resolver";
import Channel from "../../../../src/entities/Channel";
import {ModifyChannelMutationArgs, modifyChannelResponse} from '../../../../src/types/graphql';

const resolver:Resolvers = {
    Mutation: {
        modifyChannel:async(_,args:ModifyChannelMutationArgs):Promise<modifyChannelResponse>=> {
            const {id, channelName} = args;

            const exist = await Channel.findOne({id});
            if(!exist){
                return{
                    ok:false,
                    error:'no channel you not change ! :0) ',
                    changedName:null
                }
            }
              //업데이트 ->
            exist.channelName = channelName;
            await exist.save();

            return{
                ok:true,
                error:'변경완료',
                changedName:channelName 
            }

        }
    }
};
export default resolver;