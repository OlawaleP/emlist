import Image from "next/image";

import { useSendMessage } from "../hooks/useSendMessage";

import CustomButton from "@/components/atoms/CustomButton";

const ChatForm = ({ user }: { user: any }) => {
  const { message, setMessage, handleSendMessage } = useSendMessage();

  return (
    <form
      onSubmit={(e) => handleSendMessage(e, user?._id)}
      className="w-full flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        {" "}
        <div className="flex items-center">
          <label htmlFor="smiley">
            <Image
              src="/icons/emoji-happy.svg"
              width={15}
              height={15}
              alt="search"
              className="object-contain w-6 h-6 cursor-pointer"
            />
          </label>
          <input
            style={{ fontSize: "16px" }}
            type="file"
            id="smiley"
            className="invisible h-0 w-0"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="smiley">
            <Image
              src="/icons/attach-square.svg"
              width={15}
              height={15}
              alt="search"
              className="object-contain w-6 h-6 cursor-pointer"
            />
          </label>
          <input
            style={{ fontSize: "16px" }}
            type="file"
            id="smiley"
            className="invisible h-0 w-0"
          />
        </div>
      </div>
      <div className="flex-1 w-full px-3 max-sm:px-2 ">
        <input
          style={{ fontSize: "16px" }}
          type="text"
          placeholder="Type your message here...."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="outline-none flex-1 w-full px-1 bg-white "
        />
      </div>
      <CustomButton type="submit">Send Message</CustomButton>
    </form>
  );
};

export default ChatForm;
