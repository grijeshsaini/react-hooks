import { SyntheticEvent, useRef } from "react"

export const ExampleUseRef = () => {

    const sound = useRef<HTMLInputElement>(null);
    const color = useRef<HTMLInputElement>(null);

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (sound.current === null || color.current === null) {
            return;
        }
        const soundVal = sound.current.value;
        const colorVal = color.current.value;
        console.log(`${soundVal} ... ${colorVal}`);
        sound.current.value = "";
        color.current.value = "";
    }
    
    return (
        <>
            <form onSubmit={submit}>
                <input ref={sound} type="text" placeholder="Sound..."/> <br/>
                <input ref={color} type="color"/> <br/>
                <button> Add </button>
            </form>
        </>
    )
}
