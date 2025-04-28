import { SocialButton } from "./SocialButton";

const SocialLoginSection = () => (
  <div className="w-full flex flex-col gap-3 pt-4">
    <div className="w-full flex items-center justify-between gap-2">
      <div className="flex-1 w-full h-[1px] bg-light-brown block" />
      <h6 className="sm:text-lg font-semibold mx-2">OR</h6>
      <div className="flex-1 w-full h-[1px] bg-light-brown" />
    </div>
    <SocialButton provider="Google" />
    <SocialButton provider="Facebook" />
  </div>
);

export default SocialLoginSection;
