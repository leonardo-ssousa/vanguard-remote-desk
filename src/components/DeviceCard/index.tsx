import { LuMonitor, LuScreenShare, LuSquareTerminal } from "react-icons/lu"
import { DeviceCardWrapper, DeviceBusinessTag, DeviceActionButton } from "./styles"
import type { Devices } from "../../@types"

interface DeviceCardProps {
  device: Devices;
}

export const DeviceCard = ({ device }:DeviceCardProps) => {

  const handleShareScreen = () => {
    window.location.href = `rustdesk://connection/new/${device.accessId}?password=Leo15401999`
  }

  const handleBashTerminal = () => {
    window.location.href = `rustdesk://terminal/${device.accessId}?password=Leo15401999`
  }

  return (
    <DeviceCardWrapper>
      <header>
        <div>
          <h4>{device.name || "Sem nome"}</h4>
          <p>{device.accessId}</p>
        </div>
        <div>
          <p>Online</p>
        </div>
      </header>

      <main>
        <div className="os">
          <LuMonitor />
          <p>{device.fullOs?.split("/")[0]}</p>
        </div>
        <div className="actions">
          <DeviceActionButton onClick={handleBashTerminal}>
            <LuSquareTerminal />
          </DeviceActionButton>
          <DeviceActionButton onClick={handleShareScreen}>
            <LuScreenShare />
          </DeviceActionButton>
        </div>
      </main>

      <footer>
        <DeviceBusinessTag>{device.businessId}</DeviceBusinessTag>
        <p>Agora</p>
      </footer>
    </DeviceCardWrapper>
  )
}