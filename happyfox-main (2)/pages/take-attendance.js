export default function TakeAttendance() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-semibold mb-6">Take Attendance</h1>
        <div className="mb-4">
          <select className="w-full p-2 border rounded-md mb-4">
            <option>Select Class</option>
            <option>CS101 - Morning Session</option>
            <option>CS102 - Afternoon Session</option>
          </select>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Present</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Absent</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">
                    <input type="radio" name="attendance-1" className="form-radio" />
                  </td>
                  <td className="px-6 py-4">
                    <input type="radio" name="attendance-1" className="form-radio" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Submit Attendance
          </button>
        </div>
      </div>
    </div>
  );
} 