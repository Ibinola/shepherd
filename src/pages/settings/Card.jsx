
const Card = ({ title, children, onEdit }) => {
    return (
      <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{title}</h3>
          {onEdit && (
            <button className="text-blue-500 hover:text-blue-700" onClick={onEdit}>
              ✎
            </button>
          )}
        </div>
        <div className="mt-4">
          {children}
        </div>
      </div>
    );
  };
  export default Card