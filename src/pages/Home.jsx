import Hero from "components/Home/Hero/Hero";
import SaleRoadmap from "components/Home/SaleRoadmap/SaleRoadmap";
import UpcomingProjects from "components/Home/UpcomingProjects/UpcomingProjects";
import CompletedProjects from "components/Home/CompletedProjects/CompletedProjects";
import ManageStaking from "components/Home/ManageStaking/ManageStaking";
import AvailablePools from "components/Home/AvailablePools/AvailablePools";
import StakingTable from "components/Home/StakingTable/StakingTable";
import AirDrop from "components/Home/AirDrop/AirDrop";
import ProjectDescription from "components/Home/ProjectDescription/ProjectDescription";
import Modals from "components/Home/Modals/Modals";

const Home = () => {
  return (
    <>
      <Hero />
      <SaleRoadmap />
      <UpcomingProjects />
      <CompletedProjects />
      <ManageStaking />
      <AvailablePools />
      <StakingTable />
      <AirDrop />
      <ProjectDescription />
      <Modals />
    </>
  );
};

export default Home;
