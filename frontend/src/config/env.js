const requiredEnv = (value, name) => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
};

export const API_BASE_URL = requiredEnv(import.meta.env.VITE_API_BASE_URL, 'VITE_API_BASE_URL');
export const DASHBOARD_URL = requiredEnv(import.meta.env.VITE_DASHBOARD_URL, 'VITE_DASHBOARD_URL');