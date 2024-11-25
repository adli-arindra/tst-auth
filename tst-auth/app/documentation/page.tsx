import Link from "next/link";

const DocumentationPage: React.FC = () => {
  const data = [
    { method: "GET", route: "/api/public", usage: "Check if the API is working" },
    { method: "GET", route: "/api/secured", usage: "Check if a key is correct" },
    { method: "GET", route: "/api/auth-key", usage: "Returns a new key for the registered account" },
    { method: "POST", route: "/api/msg/send", usage: "Sends a global message to the server" },
    { method: "POST", route: "/api/msg/clear", usage: "Deletes all messages from your account" },
    { method: "GET", route: "/api/msg/view", usage: "Sees all messages from the server" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          API Documentation
        </h1>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-sm">Method</th>
                <th className="px-6 py-3 text-left font-medium text-sm">Route</th>
                <th className="px-6 py-3 text-left font-medium text-sm">Usage</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 border-t border-b border-gray-200 text-sm text-gray-700">
                    <Link href={"/documentation" + item.route} className="text-blue-600 hover:text-blue-800">
                      {item.method}
                    </Link>
                  </td>
                  <td className="px-6 py-4 border-t border-b border-gray-200 text-sm text-gray-700">
                    <Link href={"/documentation" + item.route} className="text-blue-600 hover:text-blue-800">
                      {item.route}
                    </Link>
                  </td>
                  <td className="px-6 py-4 border-t border-b border-gray-200 text-sm text-gray-700">
                    <Link href={"/documentation" + item.route} className="text-blue-600 hover:text-blue-800">
                      {item.usage}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
