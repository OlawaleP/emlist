import { useBlacklistBusiness } from "@/features/services/hooks/useBlacklistBusiness";

interface PublicExpertInfoProfileProps {
  serviceInfo: any;
  handleOpen: () => void;
  handleCompare: (businessId: string) => void;
  handleLike: (businessId: string) => void;
  handleUnlike: (businessId: string) => void;
}

const PublicExpertInfoProfile = ({
  serviceInfo,
  handleOpen,
  handleCompare,
  handleLike,
  handleUnlike,
}: PublicExpertInfoProfileProps) => {
  const { load, handleBlacklistBuisness } = useBlacklistBusiness();

  return (
    <section className="w-full flex items-end justify-between gap-8 flex-wrap">
      PublicExpertInfoProfile
    </section>
  );
};

export default PublicExpertInfoProfile;
