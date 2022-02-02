import './SortSelect.css';
import { sortOptions } from '../../utils/sortUtils';

function SortSelect({ sortIndex, setSortIndex }) {
  return (
    <select
      onChange={(e) => setSortIndex(+e.target.value)}
      value={sortIndex}
      className="sort-select"
    >
      {sortOptions.map((element, i) => (
        <option key={i} value={i}>
          {element.label}
        </option>
      ))}
    </select>
  );
}

export default SortSelect;
