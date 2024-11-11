import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { inc, dec, incByAmount, incByAmountMo, zero } from "./counterSlice"

import s from "./Root.module.css"

export const Root = () => {

    const [state, setState] = useState(0)

    const count = useSelector(q => q.asd.value)
    const dispatch = useDispatch()


    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={() => dispatch(inc())}>+1</button>
                <button onClick={() => dispatch(dec())}>-1</button>
            </div>
            <div>
                <input type="text" value={state} onChange={e => setState(e.target.value)} />
                <button onClick={() => dispatch(incByAmount(+state))}>+X</button>
                <button onClick={() => dispatch(incByAmountMo(+state))}>-X</button>
            </div>
            <button onClick={() => dispatch(zero(), setState(0))}>clear</button>
        </>
    )
}