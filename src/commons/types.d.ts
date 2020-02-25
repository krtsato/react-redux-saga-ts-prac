import {rootReducer} from "@redx/example/store"

declare namespace Root {
  export type State = ReturnType<typeof rootReducer>
}
