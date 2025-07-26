import Section from "@/components/Section";
import SideBarMenu from "@/components/SideBar/SideBarMenu";
import SideBarSkile from "@/components/SideBar/SideBarSkil";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4 h-screen p-4 ">
      <div className=" col-span-2 ">
        <SideBarSkile />
      </div>
      <div className="col-span-9 ">
        <Section />
      </div>
      <div className=" col-span-1 ">
        <SideBarMenu></SideBarMenu>
      </div>
    </div>
  );
}
