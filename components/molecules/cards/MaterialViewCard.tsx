import Image from "next/image";

import CustomButton from "@/components/atoms/CustomButton";
import DisplayCardPrice from "@/components/atoms/DisplayCardPrice";
import FavoriteButton from "@/components/atoms/FavouriteButton";
import MaterialCardInfo from "../MaterialCardInfo";
import UserProfileLink from "../UserProfileLink";

import { Material } from "@/types";

export interface MaterialCardProps {
  material: Material;
  addMaterialToCart: (id: string) => void;
  handleSaveMaterial: (id: string) => void;
  handleUnsaveMaterial: (id: string) => void;
}

const MaterialViewCard: React.FC<MaterialCardProps> = ({
  material,
  addMaterialToCart,
  handleSaveMaterial,
  handleUnsaveMaterial,
}) => {
  return (
    <div className="w-full grid md:grid-cols-5 grid-cols-6 gap-3 py-4 sm:px-6 px-2 hover:bg-gray-100 duration-300 shadow rounded-2xl">
      <Image
        src={material.images[0]?.imageUrl || "/images/Logo.svg"}
        width={140}
        height={100}
        alt="service"
        className={`md:col-span-1 col-span-2 w-full sm:h-36 h-28 rounded-lg max-sm:hidden ${
          !material.images[0]?.imageUrl
            ? "object-contain shadow px-2"
            : "object-cover"
        }`}
      />
      <div className="sm:col-span-4 col-span-6 flex justify-between max-md:flex-col md:gap-10 gap-2">
        <div className="flex flex-col gap-2 flex-1">
          <MaterialCardInfo material={material} />
          <div className="flex items-center sm:py-2">
            <UserProfileLink user={material.userId} />
          </div>
        </div>
        <div className="flex items-center md:flex-col md:items-end justify-between">
          <div className="max-sm:hidden">
            <DisplayCardPrice
              currency={material.currency}
              price={material.price}
            />
          </div>

          <CustomButton
            type="button"
            onClick={() => addMaterialToCart(material._id)}
          >
            Add to Cart
          </CustomButton>
        </div>
      </div>
      <div className="col-span-1 max-md:hidden" />
      <div className="md:col-span-4 col-span-6 border-t border-[#B8B9B8] flex items-center justify-end sm:gap-10 gap-5 py-2">
        <FavoriteButton
          liked={material.liked}
          onSave={() => handleSaveMaterial(material._id)}
          onUnsave={() => handleUnsaveMaterial(material._id)}
        />
      </div>
    </div>
  );
};

export default MaterialViewCard;
