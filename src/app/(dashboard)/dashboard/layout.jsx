import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";


const layout = ({children}) => {
  return (
    <div className="">
      {/* <Topbar/> */}
      <div className="flex">
        <Sidebar/>
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;