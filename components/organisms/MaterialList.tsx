import { Material, MaterialListProps } from "@/types";

import CustomPagination from "../molecules/CustomPagination";
import MaterialViewCard from "../molecules/cards/MaterialViewCard";
import ResultMsg from "../atoms/ResultMsg";
import WhiteBgLoader from "../atoms/WhiteBgLoader";

import { useSaveMaterials } from "@/features/materials/hooks/useSaveMaterial";
import { useAddMaterialToCart } from "@/features/cart/hooks/useAddMaterialToCart";
import { useUnsaveMaterial } from "@/features/materials/hooks/useUnSaveMaterial";

const MaterialList: React.FC<MaterialListProps> = ({
  allMaterials,
  totalProducts,
  currentPage,
  totalPages,
  handlePageChange,
  refetchAllMaterials,
}) => {
  const { handleSaveMaterial, isLiking } = useSaveMaterials();
  const { addMaterialToCart, cartLoading } = useAddMaterialToCart();
  const { handleUnsaveMaterial, isUnliking } = useUnsaveMaterial();

  const handleLike = (id: string) => {
    handleSaveMaterial(id, () => {
      refetchAllMaterials();
    });
  };

  const handleUnlike = (id: string) => {
    handleUnsaveMaterial(id, () => {
      refetchAllMaterials();
    });
  };
  return (
    <div className="col-span-7 lg:pl-6 max-lg:col-span-10">
      {cartLoading && <WhiteBgLoader />}
      {isLiking && <WhiteBgLoader />}
      {isUnliking && <WhiteBgLoader />}
      <ResultMsg
        msg={
          totalProducts > 0
            ? `${totalProducts} results found`
            : "No result found"
        }
      />
      <div className="flex flex-col gap-5 lg:h-[calc(100vh-5rem)] overflow-y-auto hide-scrollbar">
        {allMaterials?.map((material: Material) => (
          <MaterialViewCard
            key={material._id}
            material={material}
            addMaterialToCart={addMaterialToCart}
            handleSaveMaterial={handleLike}
            handleUnsaveMaterial={handleUnlike}
          />
        ))}
      </div>
      {totalProducts > 10 && (
        <div className="md:w-2/3 w-full pt-2">
          <CustomPagination
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  );
};

export default MaterialList;
