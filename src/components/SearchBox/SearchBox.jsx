import { useId } from "react";

const SearchBox = ({ value, onSearch }) => {
  const searchId = useId();
  return (
    <div>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        id={searchId}
        value={value}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
