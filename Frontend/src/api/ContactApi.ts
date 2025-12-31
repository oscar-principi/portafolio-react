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
  baseURL: 'https://localhost:7125/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ContactApi = {
  // Este método es el que llamas desde el componente Contact.tsx
  sendContact: async (contact: ContactRequest): Promise<ApiResponse> => {
    try {
      const response = await apiClient.post<ApiResponse>('/contact', contact);
      return response.data;
    } catch (error: any) {
      // Manejo de errores por si la API está caída
      return {
        success: false,
        message: error.response?.data?.message || 'No se pudo conectar con el servidor'
      };
    }
  },
};