import { Resolvers } from "src/types/resolver";
import Channel from "../../../../src/entities/Channel";
import {  getChannelResponse } from "src/types/graphql";

const resolvers:Resolvers = {
    Query: {
        getChannel: async(_):Promise<getChannelResponse> => {//promise타입은 <>내부에
            //메세지 꺼내오기 위해서 동기함수로 정의 
            //로직 시작
            try{
                //const {channelName} = args; //const innerChannelId = args.innerChannelId;

                const channel = await Channel.find();//select .. where innerChannelId = innerChannelId

                if(!channel || channel.length == 0){
                    return {
                        ok: false,
                        error:"not found channels",
                        channels : null
                    }
                }

                return {
                    ok: true,
                    error:null,
                    channels : channel
                }

            

            }catch( error ){
                return {
                    ok : false,
                    error : error.messages, //javscript지원
                    channels : null
                }
            }
        }
    }
}

export default resolvers;