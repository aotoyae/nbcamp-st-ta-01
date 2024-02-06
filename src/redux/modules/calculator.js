const PLUS_N = "caculator/PLUS_N";
const MINUS_N = "caculator/MINUS_N";

export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload,
  };
};

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const calculator = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_N:
      return { number: state.number + action.payload };
    case MINUS_N:
      return { number: state.number - action.payload };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
