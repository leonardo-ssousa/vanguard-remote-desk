import type { DevicesResponse, DeviceResponse } from "../@types/api";
import AxiosInstance from "./axiosInstance";

export const getDevices = async () => {
  try {
    const devices = await AxiosInstance.get<DevicesResponse>("/devices");
    return devices.data;
  } catch (error) {
    console.error("Erro ao buscar dispositivos:", error);
    throw error;
  }
};

export const getDevice = async (id: string) => {
  try {
    const devices = await AxiosInstance.get<DeviceResponse>(`/device/${id}`);
    return devices.data;
  } catch (error) {
    console.error("Erro ao buscar dispositivos:", error);
    throw error;
  }
};

export const getConectionUri = async (id: string) => {
  try {
    const uri = await AxiosInstance.get<string>(`/conn-uri/${id}`);
    return uri.data;
  } catch (error) {
    console.error("Erro ao buscar dispositivos:", error);
    throw error;
  }
};

export const getBashTerminalUri = async (id: string) => {
  try {
    const uri = await AxiosInstance.get<string>(`/bash-uri/${id}`);
    return uri.data;
  } catch (error) {
    console.error("Erro ao buscar dispositivos:", error);
    throw error;
  }
};
