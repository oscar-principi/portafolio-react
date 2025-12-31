import axios from 'axios';
import { AxiosError } from 'axios';

// Esto es el espejo de tu DTO de C# (Shared)
export interface ContactRequest {
  name: string;
  email: string;
  motivo: string;
  mensaje: string;
}

// Estructura de la respuesta que esperas de tu API
export interface ApiResponse {
  success: boolean;  
  message?: string;
}

// Configuramos la conexión
const apiClient = axios.create({
  // URL de tu API .NET (en desarrollo suele ser localhost)
  baseURL: 'https://portafoliopersonalbackend-h6g9fge4b6ejcvam.canadacentral-01.azurewebsites.net/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ContactApi = {
  sendContact: async (contact: ContactRequest): Promise<ApiResponse> => {
    try {
      const response = await apiClient.post('/contact', contact);
      console.log("Respuesta Exitosa:", response.data); // <--- MIRA ESTO EN LA CONSOLA
      return {
        success: response.data.success ?? response.data.Success,
        message: response.data.message ?? response.data.Message
      };
    } catch (error: any) {
      console.error("Error capturado:", error.response?.data); // <--- Y ESTO
      return {
        success: false,
        message: error.response?.data?.Message || 'Error de conexión'
      };
    }
  },
};