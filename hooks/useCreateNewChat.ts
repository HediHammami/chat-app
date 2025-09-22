import { streamClient } from "@/lib/stream";

export const useCreateNewChat = () => {
  const createNewChat = async ({
    members,
    createdBy,
    groupName,
  }: {
    members: string[];
    createdBy: string;
    groupName?: string; //Optional group name for grp chats
  }) => {
    const isGroupChat = members.length > 2; //More than 2 people = group chat

    //only check for existing chats for 1-1 converstations
    if (!isGroupChat) {
      const existingChannel = await streamClient.queryChannels(
        {
          type: "messaging",
          members: { $eq: members }, //Exact match for 1-1 chats
        },
        { created_at: -1 },
        { limit: 1 }
      );
      if (existingChannel.length > 0) {
        const channel = existingChannel[0];
        const channelMembers = Object.keys(channel.state.members);

        //for 1-1 chats, ensure exactly the same 2 members
        if (
          channelMembers.length === 2 &&
          members.length === 2 &&
          members.every((member) => channelMembers.includes(member))
        ) {
          console.log("Existing 1-1 chat found");
          return channel;
        }
      }
    }

    const channelId = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`; //generate unique id

    try {
      const channelData: {
        members: string[];
        created_by_id: string;
        name?: string;
      } = {
        members,
        created_by_id: createdBy,
      };

      if (isGroupChat) {
        channelData.name =
          groupName || `Group chat (${members.length} members)`;
      }

      const channel = streamClient.channel(
        isGroupChat ? "team" : "messaging",
        channelId,
        channelData
      );

      await channel.watch({
        presence: true,
      });

      return channel;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return createNewChat;
};
