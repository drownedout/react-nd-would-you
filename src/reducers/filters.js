import {
  TOGGLE_FILTER,
  QuestionFilter,
} from "../actions/filters"

const filter = (
  state = QuestionFilter.UNANSWERED,
  action
) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return action.filter
    default:
      return state
  }
}

export default filter;
