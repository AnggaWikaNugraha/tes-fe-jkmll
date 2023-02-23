import Type from '../type';

interface IStatusPage {
  isAuthenticated: boolean,
  token: string,
  email: string,
  role: string,
  name: string,
}

interface IAction {
  type: string,
  payload?: {
    isAuthenticated: boolean,
    token: string,
    email: string,
    role: string,
    name: string,
  },
  nameKey?: any,
  valueKey?: string,
}

const StatusPageState: IStatusPage= {
  isAuthenticated: false,
  token: '',
  email: '',
  role: '',
  name: '',
};

export function StatusPageReducer(state = StatusPageState, action: IAction) {
  switch (action.type) {
    case Type.STATUS_PAGE_SET:
      return { ...state, [action.nameKey]: action.valueKey };
    case Type.STATUS_PAGE_SET_MULTIPLE:
      return { ...state, ...action };
    case Type.STATUS_PAGE_RESET:
      return { ...state, [action.nameKey]: action.valueKey };
    case Type.STATUS_PAGE_RESET_ALL:
      return StatusPageState;
    default:
      return state;
  }
}
