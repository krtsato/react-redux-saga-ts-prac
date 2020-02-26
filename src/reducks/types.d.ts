import {rootReducer} from "@redx/store"

declare namespace Root {
  export type State = ReturnType<typeof rootReducer>
}
