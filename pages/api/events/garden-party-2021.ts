import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  if (method === 'POST') {
    try {
      const doc = new GoogleSpreadsheet(process.env.GARDEN_PARTY_SHEET_ID);
      const creds = {
        client_email: process.env.GARDEN_PARTY_GOOGLE_EMAIL,
        private_key: process.env.GARDEN_PARTY_GOOGLE_PRIVATE_KEY,
      };

      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo();

      const sheet = doc.sheetsByIndex[0];

      await sheet.addRow([
        body.name,
        body.nickname || '',
        body.july17 ? 'x' : '-',
        body.july24 ? 'x' : '-',
        body.july31 ? 'x' : '-',
        body.aug7 ? 'x' : '-',
        body.unable ? 'x' : '-',
        body.songRequest || '',
      ]);

      res.json({});
    } catch {
      res.status(500).json({});
    }
  } else {
    res.status(404).json({});
  }
};

export default handler;
