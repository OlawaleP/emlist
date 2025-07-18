import { cn } from "@/lib/utils";
import Image from "next/image";

interface ChatUserProfileProps {
  user: any;
  onlineUsers: string[];
}

const ChatUserProfile = ({ user, onlineUsers }: ChatUserProfileProps) => {
  return (
    <div className="flex justify-between items-center px-3 max-sm:px-2 border-b-1 pb-2">
      <div className=" flex items-center gap-3 max-sm:gap-1">
        <div className="relative  w-[60px] h-[60px] max-sm:w-[35px] max-sm:h-[35px] ">
          {user?.profileImage ? (
            <Image
              src={user?.profileImage}
              alt="menu"
              width={88}
              height={88}
              className="object-cover rounded-full min-h-full max-h-full min-w-full max-w-full"
            />
          ) : (
            <p
              className={cn(
                "w-full h-full rounded-full bg-slate-200 mr-2 flex-c justify-center font-bold"
              )}
            >
              {user?.userName?.[0]?.toUpperCase()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 max-sm:gap-0">
          <p className=" sm:text-xl font-semibold">
            {user?.fullName ? user?.fullName : user?.userName}
          </p>
          {onlineUsers.includes(user?._id) && (
            <p className="text-[#5E625F] max-sm:text-sm">Online</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatUserProfile;
