import axios from "axios";

export default async function handler(req, res) {
  const { method, query, body } = req;

  const baseUrl = process.env.API_BASE_URL;
  const path = query.path || "";
  const targetUrl = `${baseUrl}/${path}`;

  try {
    const response = await axios({
      method,
      url: targetUrl,
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      params: query,
      data: body,
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    const status = error.response?.status || 500;
    const message = error.response?.data || { error: "Something went wrong" };
    res.status(status).json(message);
  }
}
