// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const owm: string | undefined = process.env.OWM_KEY;
const url: string = `https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=${owm}`

export default (req: NextApiRequest, res: NextApiResponse) => {
  //res.status(200).json({ name: 'John Doe' })
  console.log(owm);
  (async () => {
    const apiRes = await fetch(url);
    const data = await apiRes.json();

    res.status(200).json({data});
  })();
}
