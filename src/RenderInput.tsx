import React, { useState } from "react";

type Props = {
  outputConsole?: (text: string) => void;
};

const RenderInput: React.VFC<Props> = ({ outputConsole }) => {
  const [input, setInput] = useState<string>("");

  const outputValue = () => {
    if (input && outputConsole) {
      outputConsole(input);
    }
  };

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={input}
        onChange={updateValue}
      />
      <button onClick={outputValue}>Console</button>
    </div>
  );
};

export default RenderInput;
