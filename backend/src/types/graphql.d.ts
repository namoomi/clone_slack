export const typeDefs = ["type createChannelResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  createChannel(channelName: String!): createChannelResponse\n  modifyChannel(id: Int!, channelName: String!): modifyChannelResponse\n  modifyMessage(id: Int!, contents: String!): modifyMessageResponse\n  SendMessage(nickname: String!, contents: String!, thumbnail: String!, innerChannelId: Int!): SendMessageResponse!\n}\n\ntype Subscription {\n  CreateChannelSubscription: Channel\n  SendMessageSubscription: Message\n}\n\ntype getChannelResponse {\n  ok: Boolean!\n  error: String\n  channels: [Channel]\n}\n\ntype Query {\n  getChannel: getChannelResponse\n  GetMessages(innerChannelId: Int!): GetMessagesResponse!\n}\n\ntype modifyChannelResponse {\n  ok: Boolean!\n  error: String\n  changedName: String\n}\n\ntype Channel {\n  id: Int!\n  channelName: String!\n  messages: [Message]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype GetMessagesResponse {\n  ok: Boolean!\n  error: String\n  messages: [Message]\n}\n\ntype modifyMessageResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype SendMessageResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Message {\n  id: Int!\n  nickname: String!\n  contents: String!\n  innerChannel: Channel!\n  innerChannelId: Int!\n  createAt: String!\n  updateAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  getChannel: getChannelResponse | null;
  GetMessages: GetMessagesResponse;
}

export interface GetMessagesQueryArgs {
  innerChannelId: number;
}

export interface getChannelResponse {
  ok: boolean;
  error: string | null;
  channels: Array<Channel> | null;
}

export interface Channel {
  id: number;
  channelName: string;
  messages: Array<Message> | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Message {
  id: number;
  nickname: string;
  contents: string;
  innerChannel: Channel;
  innerChannelId: number;
  createAt: string;
  updateAt: string | null;
}

export interface GetMessagesResponse {
  ok: boolean;
  error: string | null;
  messages: Array<Message> | null;
}

export interface Mutation {
  createChannel: createChannelResponse | null;
  modifyChannel: modifyChannelResponse | null;
  modifyMessage: modifyMessageResponse | null;
  SendMessage: SendMessageResponse;
}

export interface CreateChannelMutationArgs {
  channelName: string;
}

export interface ModifyChannelMutationArgs {
  id: number;
  channelName: string;
}

export interface ModifyMessageMutationArgs {
  id: number;
  contents: string;
}

export interface SendMessageMutationArgs {
  nickname: string;
  contents: string;
  thumbnail: string;
  innerChannelId: number;
}

export interface createChannelResponse {
  ok: boolean;
  error: string | null;
}

export interface modifyChannelResponse {
  ok: boolean;
  error: string | null;
  changedName: string | null;
}

export interface modifyMessageResponse {
  ok: boolean;
  error: string | null;
}

export interface SendMessageResponse {
  ok: boolean;
  error: string | null;
}

export interface Subscription {
  CreateChannelSubscription: Channel | null;
  SendMessageSubscription: Message | null;
}
