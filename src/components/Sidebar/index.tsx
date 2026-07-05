import { LuActivity, LuLogOut, LuMonitor, LuScreenShare, LuUsers } from "react-icons/lu";
import { SidebarWrapper } from "./styles";
import SidebarButton from "./sidebar-button";

function Sidebar() {


  const buttons = [
    {
      title: "Dispositivos",
      activeUrl: "devices",
      icon: LuMonitor,
      path: ""
    },
    {
      title: "Usuários",
      activeUrl: "users",
      icon: LuUsers,
      path: ""
    },
    {
      title: "Conexões",
      activeUrl: "conections",
      icon: LuActivity,
      path: ""
    },
    
  ]

  return ( 
    <SidebarWrapper>
      <header className="logo-continer">
        <div className="icon">
          <LuScreenShare />
        </div>
        <div className="brand">
          <p>Vanguard</p>
          <h1>RemoteDesk</h1>
        </div>
      </header>
      <section className="sidebar-buttons">
        {
          buttons.map( (btn, i) => {
            return <SidebarButton key={i} activeUrl={btn.activeUrl} Icon={btn.icon}>{btn.title}</SidebarButton>
          })
        }
        
      </section>
      <footer>
        <SidebarButton activeUrl="logout" Icon={LuLogOut}>Sair</SidebarButton>
      </footer>
    </SidebarWrapper>
   );
}

export default Sidebar;