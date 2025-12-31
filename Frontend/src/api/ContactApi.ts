import axios from 'axios';

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
      
      // Forzamos la lectura tanto en mayúsculas como en minúsculas por seguridad
      return {
        success: response.data.success ?? response.data.Success,
        message: response.data.message ?? response.data.Message
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.Message || error.response?.data?.message || 'No se pudo conectar con el servidor'
      };
    }
  },
};