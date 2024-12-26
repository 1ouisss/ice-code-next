export default function Shop() {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-center mb-8">Shop QR Code Packs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['qr_pack1.png', 'qr_pack2.png', 'qr_pack3.png'].map((image, index) => (
              <div
                key={index}
                className="border rounded-lg shadow hover:shadow-lg transition p-4"
              >
                <img
                  src={`/${image}`}
                  alt={`QR Pack ${index + 1}`}
                  className="h-40 w-full object-cover mb-4"
                />
                <h2 className="text-xl font-medium mb-2">QR Code Pack {index + 1}</h2>
                <p className="text-gray-600">A description of the QR code pack goes here.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  