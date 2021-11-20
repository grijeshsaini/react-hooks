import { useReducer } from "react"

type ExampleUseReducerState = {
    message: string
}

type Action = {
    type: string
}

export const ExampleUseReducer = () => {

    const [number, setNumber] = useReducer((number: number, newNumber: number) => number + newNumber, 0);
    const [checked, toogle] = useReducer(
        (checked: string) => checked === "checked" ? "notchecked" : "checked", "notchecked"
    );

    const initialState: ExampleUseReducerState = {
        message: "G"
    }

    function reducer(state:ExampleUseReducerState , action: Action): ExampleUseReducerState {
        switch (action.type) {
            case "yell" : 
                return {
                    message: `Hey! ${state.message}`
                };
            case "whisper":
                return {
                    message: `excuse me ${state.message}`
                }
            default:
                return initialState;
        }
    }

    const [state, dispatch] = useReducer(
        reducer,
        initialState
    )

    return (
        <section>
            <h3 onClick={() => setNumber(1)}>{number}</h3>
            <div>
                <input type="checkbox" value={checked} onChange={toogle}/>
                <p>{checked === "checked" ? "Not Checked" : "Checked"}</p>
            </div>

            <p> Hello : {state.message}</p>
            <button onClick={() => dispatch({type: "yell"})}>Yell</button>
            <button onClick={() => dispatch({type: "whisper"})}>whisper</button>
        </section>
    )
}