const resolvers = {
    Subscription:{
        CreateChannelSubscription:{
            subscribe: (_,__,{pubSub}) => {

                return pubSub.asyncIterator('newChannel');
               //pubSub에 newChannel을 받으면 그 채널을 반환하는 수신부 

            }
        }
    }
}

export default resolvers;