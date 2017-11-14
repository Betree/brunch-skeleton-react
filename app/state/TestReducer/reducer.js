import { Record } from "immutable"
import { createAction, handleActions } from 'redux-actions'


export const reset = createAction('RESET')

const INITIAL_STATE = new Record({
  value: "Hello World"
})

export default handleActions({
  [reset]: () => INITIAL_STATE()
}, INITIAL_STATE())

