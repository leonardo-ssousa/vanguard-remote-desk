import type { DevicesResponse } from "../@types/api"
import AxiosInstance from "./axiosInstance"


export const getDevices = async () => {
  try {
    const devices = await AxiosInstance.get<DevicesResponse>("/devices")
    return devices.data
    
  } catch (error) {
    console.error("Erro ao buscar dispositivos:", error)
    throw error
  }
}