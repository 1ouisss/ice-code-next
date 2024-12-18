export default async function handler(req, res) {
    if (req.method === 'GET') {
      // Dummy data for shop
      const products = [
        { id: 1, name: 'Buy 1 QR Code', price: 5 },
        { id: 2, name: 'Buy 5 QR Codes', price: 20 }
      ];
  
      res.status(200).json({ products });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  