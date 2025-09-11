import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const getProducts = async () => {
  try {
    const resp = await axiosInstance.get("/products");
    return resp.data.products;
  } catch (err) {
    console.error("Error al obtener productos:", err);
    return [];
  }
};

export const postProduct = async (body) => {
  try {
    const resp = await axiosInstance.post("/products", body);
    return resp.data.products;
  } catch (err) {
    console.error("Error al crear producto:", err);
    return { ok: false };
  }
};

export const postContact = async (body) => {
  try {
    const resp = await axiosInstance.post("/contacts", body);
    return resp.data;
  } catch (err) {
    console.error("Error al enviar contacto:", err);
    return { ok: false };
  }
};

export const postPreferenceMp = async (body) => {
  try {
    const resp = await axiosInstance.post("/checkout", body);
    return resp.data; 
  } catch (err) {
    console.error("Error al crear preferencia de Mercado Pago:", err);
    return { ok: false };
  }
};
