import { Icon } from "@/components/atoms/Icon";

interface SocialButtonProps {
  provider: "Google" | "Facebook";
  onClick?: any;
}

export const SocialButton = ({ provider, onClick }: SocialButtonProps) => (
  <button className="flex-c justify-center w-full border-1 rounded-lg sm:h-12 h-11 min-h-11 border-[#1A201B] sm:text-lg font-semibold">
    Continue with {provider}
    <Icon
      src={`/images/${provider.toLowerCase()}.svg`}
      alt={`${provider} icon`}
    />
  </button>
);
