import MaterialsData from "./MaterialsData";

const DashboardMaterialContent = () => {
  return (
    <div className="flex flex-col w-full gap-6">
      <MaterialsData shadow={false} />
    </div>
  );
};

export default DashboardMaterialContent;
