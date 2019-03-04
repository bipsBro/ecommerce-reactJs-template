const SET_LOADING = 'SET_LOADING';

const defaultState = {
  loading: false,
};

export default function reducer (state = defaultState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}

export function setLoading (isLoading) {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
}
