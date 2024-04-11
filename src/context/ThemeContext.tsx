'use client';
import { createContext, useReducer, Dispatch, ReactNode } from 'react';

const DARK: string = '#21222a';
const LIGHT: string = '#f9f9f9';

//action variable;

const TURN_DARK = 'TURN_DARK';
const TURN_LIGHT = 'TURN_LIGHT';

//action type
type ActionType = {
  type: typeof TURN_DARK | typeof TURN_LIGHT;
};

type StateType = {
  theme: String;
  color: String;
};
const initialState: StateType = {
  theme: LIGHT,
  color: DARK,
};

export const ThemeContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => {},
});

const themeReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'TURN_DARK':
      return {
        ...state,
        theme: state.theme === LIGHT ? DARK : LIGHT,
        color: state.theme === LIGHT ? DARK : LIGHT,
      };
    case 'TURN_LIGHT':
      return {
        ...state,
        theme: state.theme === DARK ? LIGHT : DARK,
        color: state.theme === DARK ? LIGHT : DARK,
      };
    default:
      return {
        ...state,
      };
  }
};
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
