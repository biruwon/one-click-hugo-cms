export default async (req: Request) => {
    const headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    const url = 'https://api.weather.gov/points/39.7456,-97.0892';
  
    try {
      const resp = await fetch(url, { headers: req.headers });
      const data = await resp.json();
      console.log({ url, data }); // THIS WORKS
      return Response.json({ data }, { headers });
    } catch (error) {
      console.log({ url, headers, error });
      return Response.json({ error: "No available data" }, { headers });
    }
  };