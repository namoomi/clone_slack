import { Resolvers } from "src/types/resolver";
import {CreateChannelMutationArgs, createChannelResponse} from "../../../../src/types/graphql";
import Channel from "../../../../src/entities/Channel";
const resolvers:Resolvers={
    Mutation: {
        createChannel:async(_, args:CreateChannelMutationArgs):Promise<createChannelResponse>=> {
            try {
                const { channelName } = args;
                const existChannel = await Channel.findOne({channelName:channelName});
                //명시적으로 {channelName:channelName} 안해주면 에러 id가 primary여서 그런가>> WHERE "Channel"."id" IN ($1) LIMIT 1 -- PARAMETERS: ["고독한이남흔방"]
                
                if(existChannel){
                    return{
                        ok:true
                        ,error:"이미 존재하는 채널입니다."
                    }
                }
                
                await Channel.create({
                    channelName
                }).save();

                return {
                    ok:true
                    ,error:"생성완료"
                };
                
            }catch(error) {
                return {
                    ok:true
                    ,error:null
                };
            }
        }
    }
}

export default resolvers;