import React, { memo, useRef } from 'react';

const Input = memo(({ onChange }) => {
  const renderedTimes = useRef(0);
  renderedTimes.current++;

  return (
    <>
     <input onChange={onChange} />
     <p>компонент отрисовался {renderedTimes.current} раз</p>
    </>
  );
});

export default Input;
