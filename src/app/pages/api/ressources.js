import connectMongo from '../../connectMongo';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Here you can fetch different resources like blog posts or helpful documents
    try {
      const resources = [
        { title: 'First Aid Guide', link: '/first-aid-guide' },
        { title: 'QR Code Stickers', link: '/qr-code-stickers' }
      ];

      res.status(200).json({ resources });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching resources' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
