import React, { useCallback } from "react";
import Input from "../components/input/Input";

import "./InputPage.css";

function InputPage() {
  const [value, setValue] = React.useState();

  const onChangeHandler = useCallback((e) => setValue(e.target.value), []);

  return (
    <div className="input-page input-page__container">
      <Input onChange={onChangeHandler} />
      <p>значение инпута: {value}</p>
    </div>
  );
}

export default InputPage;
