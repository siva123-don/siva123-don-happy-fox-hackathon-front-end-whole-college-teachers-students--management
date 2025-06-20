export default function CreateAssignment() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-semibold mb-6">Create Assignment</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Assignment Title</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Course</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option>Select Course</option>
              <option>CS101</option>
              <option>CS102</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Due Date</label>
            <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Create Assignment
          </button>
        </form>
      </div>
    </div>
  );
} 