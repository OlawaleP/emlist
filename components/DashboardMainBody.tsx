import DashboardContent from "./DashboardContent";
import DashboardOverviewCards from "./DashboardOverviewCards";

type Props = {
  currentLink: number;
};

const DashboardMainBody = ({ currentLink }: Props) => {
  return (
    <section className="pt-28 bg-[#F0FDF5] w-full padding-x">
      <div className="grid grid-cols-11 gap-4  py-10">
        <DashboardContent currentLink={currentLink} />
        <DashboardOverviewCards />
      </div>
    </section>
  );
};

export default DashboardMainBody;
