/* TypeScript 3.8 stable がリリースされ次第
types, reducers, selectors, operations を書き換える

・ドメイン内で使用する関数と型はすべて export const hoge = {} で宣言する
  ・曖昧さ排除のため export default は使用しない
    ・型の default export は行えないため 設計に統一感が持てない
  ・ファイル末尾の // Referenced from outside ~ コメントが付いた一括 export を削除
    ・隠蔽化に管理コストが掛かるとスケールしにくいため

・代わりにこの index.ts で export * as fuga from "~" する
  ・index の責務が直感的になる
  ・ドメイン外部からはこの index を参照してもらう
    ・TodosTypes
    ・todosSelectors
    ・todosOperations
    ・todosReducers
*/

export {TodosDispatch, TodosState, Todos, Todo} from "./types"
export {todosSelectors} from "./selectors"
export {todosOperations} from "./operations"
export {todosReducers} from "./reducers"
