import React from "react";

type Props = {
  frameworks?: {
    id: number;
    item: string;
  }[];
};

const FrameworkList: React.VFC<Props> = ({ frameworks }) => {
  if (!frameworks || !frameworks.length) {
    return <h1>No data !</h1>;
  }

  return (
    <div>
      <ul>
        {frameworks.map(({ id, item }) => {
          return <li key={id}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default FrameworkList;
