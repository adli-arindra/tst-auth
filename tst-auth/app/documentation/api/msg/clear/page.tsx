// pages/api-docs.tsx
import Link from 'next/link';
import React from 'react';

const ApiDocs = () => {
  const endpoints = [
    {
      method: 'POST',
      endpoint: '/api/msg/clear',
      description: 'Clears all the messages from the server that was sent by the account associated',
      queryParams: [
        { name: 'key', type: 'string', required: true, description: 'The key generated in the profile page' },
        // { name: 'limit', type: 'number', required: false, description: 'Number of users per page.' },
      ],
      response: {
        status: true,
        message: "All of your messages was successfully deleted"
        // data: [
        //   { id: 1, name: 'Alice', email: 'alice@example.com' },
        //   { id: 2, name: 'Bob', email: 'bob@example.com' },
        // ],
      },
    }
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen text-gray-700">
      <h1 className="text-3xl font-bold mb-6">API Documentation</h1>
      {endpoints.map((endpoint, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold">
            <span className="uppercase text-blue-600">{endpoint.method}</span> {endpoint.endpoint}
          </h2>
          <p className="text-gray-700 mt-2">{endpoint.description}</p>

          {endpoint.queryParams && endpoint.queryParams.length > 0 && (
            <>
              <h3 className="mt-4 font-semibold">Body Parameters</h3>
              <table className="min-w-full mt-2 border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Type</th>
                    <th className="px-4 py-2 border">Required</th>
                    <th className="px-4 py-2 border">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {endpoint.queryParams.map((param, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-2 border">{param.name}</td>
                      <td className="px-4 py-2 border">{param.type}</td>
                      <td className="px-4 py-2 border">{param.required ? 'Yes' : 'No'}</td>
                      <td className="px-4 py-2 border">{param.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          <h3 className="mt-4 font-semibold">Example Response</h3>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-800">
            {JSON.stringify(endpoint.response, null, 2)}
          </pre>
        </div>
      ))}
      <Link href="/documentation" className="btn btn-primary">Back</Link>
    </div>
  );
};

export default ApiDocs;
