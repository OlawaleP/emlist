"use client";

import CustomModal from "@/components/atoms/CustomModal";

import { useSocketContext } from "@/lib/context/SocketContext";

import ChatUserProfile from "@/features/messages/component/ChatUserProfile";
import { ChatMessages } from "@/features/messages/component/ChatMessages";
import ChatForm from "@/features/messages/component/ChatForm";

interface ContactExpertModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
}

const ContactExpertModal = ({
  isOpen,
  onClose,
  user,
}: ContactExpertModalProps) => {
  const userId = user?._id;

  const { onlineUsers } = useSocketContext();

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} width="lg">
      <div className="w-full  py-4 max-sm:py-3 ">
        <ChatUserProfile user={user} onlineUsers={onlineUsers} />
        <ChatMessages user={user} />
        <ChatForm user={user} />
      </div>
    </CustomModal>
  );
};

export default ContactExpertModal;
