import './ListElement.css';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import cropText from '../../../utils/cropText';

function ListElement({ text, count, theme }) {
  const isMobile = useMediaQuery({
    query: '(max-width: 480px)',
  });

  return (
    <li
      className={cn('list-element', {
        [`list-element_theme_${theme}`]: theme,
      })}
    >
      <p title={text} className="list-element__text">
        {isMobile ? cropText(text) : text}
      </p>
      {count > 1 && (
        <div
          className={cn('list-element__count', {
            [`list-element__count_theme_${theme}`]: theme,
          })}
        >
          x{count}
        </div>
      )}
    </li>
  );
}

export default ListElement;
