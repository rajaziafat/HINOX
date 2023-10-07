import Hero from "components/Home/Hero/Hero";
import SaleRoadmap from "components/Home/SaleRoadmap/SaleRoadmap";
import UpcomingProjects from "components/Home/UpcomingProjects/UpcomingProjects";
import CompletedProjects from "components/Home/CompletedProjects/CompletedProjects";
import ManageStaking from "components/Home/ManageStaking/ManageStaking";
import AvailablePools from "components/Home/AvailablePools/AvailablePools";

const Home = () => {
  return (
    <>
      <Hero />
      <SaleRoadmap />
      <UpcomingProjects />
      <CompletedProjects />
      <ManageStaking />
      <AvailablePools />
    </>
  );
};

export default Home;
