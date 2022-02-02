import './Container.css';
import cn from 'classnames';

function Container({ children, color }) {
  return (
    <section
      className={cn('container', {
        [`container_color_${color}`]: color,
      })}
    >
      {children}
    </section>
  );
}

export default Container;
