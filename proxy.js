// api/proxy.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: "Missing URL" });
    }

    // Call Baserow API with token (token kept safe in server-side only)
    const response = await axios.get(
      `http://91.99.57.32/api/database/rows/table/710/?user_field_names=true&${url}`,
      {
        headers: {
          Authorization: "Token u2FLiMgoADbHyxbKwAoJVvBSJjIKChWU",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.message);
    res.status(500).json({ error: "Proxy failed" });
  }
}
