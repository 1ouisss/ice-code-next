export default function Resources() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-red-600 text-3xl font-bold mb-4">Resources</h1>
        <div className="bg-gray-100 border rounded shadow-lg p-6 w-3/4">
          <img
            src="/bons-gestes.png"
            alt="Les Bons Gestes"
            className="mb-4 rounded"
          />
          <p className="text-gray-700 text-center">
            Follow these steps for the best results using our products.
          </p>
        </div>
      </div>
    );
  }
  