import type { NextApiRequest, NextApiResponse } from 'next';
import clients from '../../../clients.json';

export default function client(req: NextApiRequest, res: NextApiResponse) {
  const { query: { id } } = req;
  const client = clients.filter(i => i.id === parseInt(id as string))[0];
  res.status(200).json(client);
}