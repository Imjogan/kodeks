import './List.css';
import cn from 'classnames';
import { useMemo } from 'react';
import ListElement from './ListElement';
import { sortOptions, sortFunctions } from '../../utils/sortUtils';

function List({ items, theme, sortIndex }) {
  const sortedItems = useMemo(() => {
    const { key } = sortOptions[sortIndex];
    const currentSortFn = sortFunctions[key];
    return [...items].sort((a, b) => currentSortFn(a[key], b[key]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, sortIndex, sortFunctions]);

  return (
    <ul className="list">
      {sortedItems.length > 0 ? (
        sortedItems.map((item) => (
          <ListElement theme={theme} key={item.id} {...item} />
        ))
      ) : (
        <span
          className={cn('list__empty', {
            [`list__empty_theme_${theme}`]: theme,
          })}
        >
          * Пусто *
        </span>
      )}
    </ul>
  );
}

export default List;
