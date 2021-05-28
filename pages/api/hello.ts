// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const owm: string | undefined = process.env.OWM_KEY;
const url: string = `https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=${owm}`

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const apiRes = await fetch(url);
  const data = await apiRes.json();

  res.status(200).json({data});
}
