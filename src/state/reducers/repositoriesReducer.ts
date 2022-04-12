import { ActionType } from './../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  // action
  //     // this is a typeguard
  // if (action.type === 'search_repositories_success') {
  //     // 100% certaintay that 'action' satisfies the
  //     // SearchRepositoriesSuccessAction interface.
  //     action.payload
  // }

  // switch statements also act at type guards
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    //   100% certain that 'action' is SearchRepositoriesSuccessAction
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
export default reducer;
