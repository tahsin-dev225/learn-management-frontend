import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";


const layout = ({children}) => {
  return (
    <div className="">
      {/* <Topbar/> */}
      <div className="flex flex-col-reverse lg:flex-row">
        <Sidebar/>
        <div className="w-full pb-14">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;