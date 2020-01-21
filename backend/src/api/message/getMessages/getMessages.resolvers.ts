import { Resolvers } from "src/types/resolver";
import Message from "../../../../src/entities/Message";
import { GetMessagesQueryArgs, GetMessagesResponse } from "src/types/graphql";

const resolvers:Resolvers = {
    Query: {
        GetMessages: async(_,args:GetMessagesQueryArgs):Promise<GetMessagesResponse> => {//promise타입은 <>내부에
            //메세지 꺼내오기 위해서 동기함수로 정의 
            //로직 시작
            try{
                const {innerChannelId} = args; //const innerChannelId = args.innerChannelId;

                const messages = await Message.find({innerChannelId});//select .. where innerChannelId = innerChannelId

                return {
                    ok: true,
                    error:null,
                    messages : messages
                }

            }catch( error ){
                return {
                    ok : false,
                    error : error.messages, //javscript지원
                    messages : null
                }
            }
        }
    }
}

export default resolvers;