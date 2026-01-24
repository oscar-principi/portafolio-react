import axios from 'axios';

export interface ContactRequest {
  name: string;
  email: string;
  motivo: string;
  mensaje: string;
}

export interface ApiResponse {
  success: boolean;  
  message?: string;
}

// Configuramos la conexión
const apiClient = axios.create({
  baseURL: 'https://portafoliopersonalbackend-h6g9fge4b6ejcvam.canadacentral-01.azurewebsites.net/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ContactApi = {
  sendContact: async (contact: ContactRequest): Promise<ApiResponse> => {
    try {
      const response = await apiClient.post('/contact', contact);
      console.log("Respuesta Exitosa:", response.data);
      return {
        success: response.data.success ?? response.data.Success,
        message: response.data.message ?? response.data.Message
      };
    } catch (error: any) {
      console.error("Error capturado:", error.response?.data); 
      return {
        success: false,
        message: error.response?.data?.Message || 'Error de conexión'
      };
    }
  },
};