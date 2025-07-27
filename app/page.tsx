import Section from "@/components/Section";
import SideBarMenu from "@/components/SideBar/SideBarMenu";
import SideBarSkile from "@/components/SideBar/SideBarSkil";

export default function Home() {
  return (
    <div className="sm:grid relative  sm:grid-cols-12  gap-4 h-screen  ">
      <div className=" col-span-2 sm:inline hidden ">
        <SideBarSkile />
      </div>
      <div className="col-span-9 w-full ">
        <Section />
      </div>
      <div className=" col-span-2 sm:hidden ">
        <SideBarSkile />
      </div>
      <div className=" w-full   hidden lg:inline ">
        <SideBarMenu></SideBarMenu>
      </div>
    </div>
  );
}
