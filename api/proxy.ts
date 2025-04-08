import axios from "axios";

export default async function handler(req, res) {
  const apiUrl = process.env.VITE_BASE_URL;
  const apiKey = process.env.VITE_API_KEY;

  try {
    const response = await axios({
      method: req.method,
      url: apiUrl + req.url,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      data: req.method === "POST" ? req.body : undefined,
    });

    res.status(response.status).json(response.data);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
