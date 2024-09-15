import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import { faSearch } from "@fontawesome/free-solid-svg-icons";

const SearchInput = ({ search, setSearch }) => {
  return (
    <div className="relative w-full max-w-md ">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
      </span>
      <input
        type="text"
        placeholder="Search by name"
        className="block w-full pl-10 p-2 border border-gray-300 rounded shadow-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
