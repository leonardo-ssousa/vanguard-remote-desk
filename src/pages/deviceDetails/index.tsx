import { useEffect, useState } from "react";
import {
  ActiveSessionCard,
  ActiveConectionLeft,
  ConectionOrigin,
  ConectionRoute,
  DevicesDetailsPageWrapper,
  PageSection,
  HistoryConectionLeft,
} from "./styles";
import type { Device } from "../../@types";
import { Button } from "../../components/ui/Button";
import {
  LuArrowLeft,
  LuArrowRight,
  LuChevronDown,
  LuComputer,
  LuKeyRound,
  LuMonitor,
  LuPencil,
  LuRadio,
  LuTerminal,
  LuWifi,
} from "react-icons/lu";
import { LivePulse } from "../../components/ui/LivePulse";
import { Pill } from "../../components/ui/Pill";
import { useDevices } from "../../Contexts/DevicesContext";
import { useParams } from "react-router-dom";
import { getDevice } from "../../API";

export const DevicesDetailsPage = () => {
  const { handleShareScreen, handleBashTerminal } = useDevices();
  const { id } = useParams() as { id: string };
  const [currentDevice, setCurrentDevice] = useState<Device>();

  const getCurrentDevice = async () => {
    const device = await getDevice(id)
    setCurrentDevice(device.data)
  }

  useEffect(() => {
      getCurrentDevice()
  }, []);

  return (
    <DevicesDetailsPageWrapper>
      {currentDevice && (
        <>
          <section className="backward">
            <Button StartIcon={LuArrowLeft} buttonType="tertiary">
              Voltar para dispositivos
            </Button>
          </section>
          <header>
            <section className="device-infos">
              <section className="title">
                <h2>{currentDevice.name || "Sem nome"}</h2>
                <LivePulse isActive={currentDevice?.isOnline || false}>
                  {currentDevice.isOnline ? "Online" : "Offline"}
                </LivePulse>
              </section>
              <section className="details">
                <LuMonitor />
                <p>{currentDevice.fullOs.split("/")[1]}</p>
                <p className="spacer">|</p>
                <LuComputer />
                <p>{currentDevice.accessId}</p>
              </section>
            </section>

            <section className="device-actions">
              <Button StartIcon={LuPencil}>Renomear</Button>
              <Button StartIcon={LuKeyRound}>Alterar senha</Button>
              <Button StartIcon={LuTerminal} onClick={() => handleBashTerminal(currentDevice.id)}>Terminal</Button>
              <Button StartIcon={LuMonitor} onClick={() => handleShareScreen(currentDevice.id)} buttonType="primary">
                Espelhar Tela
              </Button>
            </section>
          </header>
          <main>
            <PageSection>
              <h4>Conexão Ativa</h4>
              <ActiveSessionCard $active>
                <ActiveConectionLeft>
                  <LivePulse isActive />
                  <ConectionRoute>
                    <p>Leonardo Silva</p>
                    <LuArrowRight className="icon" />
                    <p>PC - Recepção</p>
                  </ConectionRoute>
                  <ConectionOrigin>
                    <LuMonitor />
                    <p>Windows</p>
                  </ConectionOrigin>
                </ActiveConectionLeft>
                <section className="right">
                  <div className="session-infos">
                    <p className="title">TEMPO DE SESSÃO</p>
                    <p className="time">42m 18s</p>
                  </div>
                  <Button>Encerrar</Button>
                </section>
              </ActiveSessionCard>

              <ActiveSessionCard $active={false}>
                <ActiveConectionLeft>
                  <LuRadio />
                  <ConectionRoute>
                    <p>Nenhuma sessão ativa no momento.</p>
                  </ConectionRoute>
                </ActiveConectionLeft>
                <section className="right">
                  <Button StartIcon={LuWifi}>Iniciar sessão</Button>
                </section>
              </ActiveSessionCard>
            </PageSection>

            <PageSection>
              <h4>Histórico de conexões · 2</h4>
              <ActiveSessionCard $active>
                <HistoryConectionLeft>
                  <ConectionRoute className="conection-route">
                    <Pill>#1382</Pill>
                    <p>Antonio Carlos</p>
                  </ConectionRoute>
                  <ConectionOrigin>
                    <p>Acessou em 04/07/2026 09:12</p>
                  </ConectionOrigin>
                </HistoryConectionLeft>
                <section className="right">
                  <div className="session-infos">
                    <p className="time">42m 18s</p>
                  </div>
                  <LuChevronDown />
                </section>
              </ActiveSessionCard>

              <ActiveSessionCard $active>
                <HistoryConectionLeft>
                  <ConectionRoute className="conection-route">
                    <Pill>#1278</Pill>
                    <p>Leonardo Sousa</p>
                  </ConectionRoute>
                  <ConectionOrigin>
                    <p>Acessou em 04/07/2026 09:12</p>
                  </ConectionOrigin>
                </HistoryConectionLeft>
                <section className="right">
                  <div className="session-infos">
                    <p className="time">42m 18s</p>
                  </div>
                  <LuChevronDown />
                </section>
              </ActiveSessionCard>
            </PageSection>
          </main>
        </>
      )}
    </DevicesDetailsPageWrapper>
  );
};
