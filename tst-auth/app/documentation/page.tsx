const DocumentationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">API Documentation</h1>
          <p className="text-lg text-gray-600">Overview of the available API endpoints</p>
        </header>

        {/* Endpoint Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800">GET /api/users</h2>
          <p className="text-lg text-gray-700 mb-4">
            Retrieve a list of all users from the database.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Response</h3>
            <pre className="bg-gray-200 text-gray-600 p-4 rounded-lg">
              {`[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "admin"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "role": "user"
  }
]`}
            </pre>
          </div>
        </section>

        {/* Endpoint Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800">POST /api/users</h2>
          <p className="text-lg text-gray-700 mb-4">
            Create a new user in the database.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Request Body</h3>
            <pre className="bg-gray-200 text-gray-600 p-4 rounded-lg">
              {`{
  "name": "New User",
  "email": "new.user@example.com",
  "password": "password123"
}`}
            </pre>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Response</h3>
            <pre className="bg-gray-200 text-gray-600 p-4 rounded-lg">
              {`{
  "id": 3,
  "name": "New User",
  "email": "new.user@example.com",
  "role": "user"
}`}
            </pre>
          </div>
        </section>

        {/* Example Error Handling */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800">Error Handling</h2>
          <p className="text-lg text-gray-700 mb-4">
            The API returns standard HTTP error codes.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Example Error</h3>
            <pre className="bg-gray-200 text-gray-600 p-4 rounded-lg">
              {`{
  "error": "Invalid request",
  "message": "Missing required field: email"
}`}
            </pre>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 mt-16">
          <p>API Documentation | Created with <span className="text-red-500">♥</span> by Your Name</p>
        </footer>
      </div>
    </div>
  );
};

export default DocumentationPage;
