import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { DefaultLayoutWrapper } from "./styles"

export function DefaultLayout() {
  return ( 
    <DefaultLayoutWrapper>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </DefaultLayoutWrapper>
   );
}

