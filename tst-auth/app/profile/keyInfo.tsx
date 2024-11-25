const KeyInfo: React.FC = () => {
    return (
      <div className="flex items-center justify-between mt-8 px-4">
        {/* Key Display Box */}
        <div className="flex-1 px-6 py-2 border-4 border-gray-700 bg-white rounded-xl shadow-md mr-4">
          <h1 className="text-md text-gray-600 truncate">EXAMPLE-KEY</h1>
        </div>
  
        {/* Generate Button */}
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Generate
        </button>
      </div>
    );
  };
  
  export default KeyInfo;
  