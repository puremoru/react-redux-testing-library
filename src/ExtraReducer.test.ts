import reducer, {
  fetchDummy,
  CounterState,
} from "../src/features/customCounter/customCounterSlice";

describe("extraReducer", () => {
  const initialState: CounterState = {
    mode: 0,
    value: 0,
    username: "",
    status: "idle",
  };
  it("Should output 100 + payload when fulfilled", () => {
    const action = { type: fetchDummy.fulfilled.type, payload: 5 };
    const state = reducer(initialState, action);
    expect(state.value).toEqual(105);
  });
});
