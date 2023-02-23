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

const x = JSON.parse(localStorage.getItem('persist:root') || '{}') ;
const viewState: any= x.StatusViewReducer ? JSON.parse(x.StatusViewReducer) : {
  view: 1
};

export function StatusViewReducer(state = viewState, action: any) {
  switch (action.type) {
    case Type.SET_VIEW_DELIVERY:
      return {
        ...state,
        view: 1
      }
    case Type.SET_VIEW_PAYMENT:
      return {
        ...state,
        view: 2
      }
    case Type.SET_VIEW_FINISH:
      return {
        ...state,
        view: 3
      }
    case Type.SET_VIEW:
      return {
        ...state,
        view: action.view
      }
    default:
      return state;
  }
}