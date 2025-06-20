export default function GradeSubmissions() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-semibold mb-6">Grade Submissions</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assignment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Submitted Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Grade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-4">John Doe</td>
                <td className="px-6 py-4">Data Structures Project</td>
                <td className="px-6 py-4">2024-03-15</td>
                <td className="px-6 py-4">
                  <input type="number" className="w-20 border rounded-md" />
                </td>
                <td className="px-6 py-4">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 