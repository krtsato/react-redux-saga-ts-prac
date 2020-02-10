import {connect} from "react-redux"
import {bindActionCreators, Dispatch} from "redux"
import {CounterComp} from "@comp/example/counterApp/counter"
import {ColorfulBeads} from "@comp/example/counterApp/colorfulBeads"
import {CounterState} from "@redx/example/counterApp/reducers"
import {add, decrement, increment, CounterAction} from "@redx/example/counterApp/actions"

// CounterBeads を 描画する

type StateProps = {
  count: number
}

type DispatchProps = {
  add: (amount: number) => void
  decrement: VoidFunction
  increment: VoidFunction
}

const mapStateToProps = (state: CounterState): StateProps => ({count: state.count})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: (amount): CounterAction => dispatch(add(amount)),
  decrement: (): CounterAction => dispatch(decrement()),
  increment: (): CounterAction => dispatch(increment())
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterComp)
