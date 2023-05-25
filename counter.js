//steps

const { createStore } = require("redux");

//initial state
const initialState = {
  count: 0,
};
//actions- action actions creator
//action increment
{
  type: "INCREMENT";
}
//action decrement
{
  type: "DECREMENT";
}
//action reset
{
  type: "RESET";
}
//action increment_by
{
  type: "INCREMENT_BY_AMOUNT";
}

//action creator
const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};
const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};
const resetAction = () => {
  return {
    type: "RESET",
  };
};
const incrementByAction = (anyAmount) => {
  return {
    type: "INCREMENT_BY_AMOUNT",
    payload: anyAmount,
  };
};
//reducer

const counterReducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "RESET") {
    return {
      count: 0,
    };
  } else if (action.type === "INCREMENT_BY_AMOUNT") {
    return {
      count: state.count + action.payload,
    };
  }
};

//store

const store = createStore(counterReducer);

//get state

// const stateData = store.getState();

//subscribe to store

store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

//dispatch action

//store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());

//store.dispatch(decrementAction());

//store.dispatch(resetAction());

//dispatch action with payload

store.dispatch(incrementByAction(100));
store.dispatch(incrementByAction(100));
store.dispatch(decrementAction());
