import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  fetchDummy,
  selectUsername,
  fetchJSON,
} from "./features/customCounter/customCounterSlice";

const ReduxAync: React.VFC = () => {
  const count = useSelector(selectCount);
  const username = useSelector(selectUsername);
  const dispatch = useDispatch();

  return (
    <div>
      <span data-testid="count-value">{count}</span>
      <button onClick={() => dispatch(fetchDummy(5))}>FetchDummy</button>
      {username && <h1>{username}</h1>}
      <button onClick={() => dispatch(fetchJSON())}>FetchJSON</button>
    </div>
  );
};

export default ReduxAync;
