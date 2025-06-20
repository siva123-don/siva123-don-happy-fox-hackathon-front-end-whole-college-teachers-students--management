export default function PerformanceAnalytics() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-semibold mb-6">Performance Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Class Average</h2>
            <div className="h-64 bg-white rounded-lg border p-4">
              {/* Add your chart component here */}
              <p className="text-center text-gray-500">Chart Placeholder</p>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Assignment Completion</h2>
            <div className="h-64 bg-white rounded-lg border p-4">
              {/* Add your chart component here */}
              <p className="text-center text-gray-500">Chart Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 