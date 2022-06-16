import type { NextApiRequest, NextApiResponse } from 'next';
import clients from '../../../clients.json';

export default function client(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(clients);
}
