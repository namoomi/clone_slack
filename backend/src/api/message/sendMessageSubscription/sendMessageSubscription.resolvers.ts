const resolvers = {
    Subscription:{
        SendMessageSubscription:{
            subscribe: (_,__,{pubSub}) => {

                return pubSub.asyncIterator('newMessage');
               //pubSub에 newChannel을 받으면 그 채널을 반환하는 수신부 

            }
        }
    }
}

export default resolvers;