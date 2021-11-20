import { useState } from "react"
import {FaStar} from "react-icons/fa";

type Selected = {
    selected?: boolean
    onSelect: () => void
};

type Stars = {
    totalStars?: number
}

const createArray = (length: number) => [
    ...Array(length)
];

const Star = ({selected = false, onSelect}: Selected) => {
    return <FaStar color={selected ? "red" : "gray"} onClick={onSelect}/>
}

const StarRating = ({totalStars = 5}: Stars) => {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
        <>
            {
                createArray(totalStars).map((_, i) => (
                    <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)}/>
                ))
            }
            <p>{selectedStars} of {totalStars}</p>
        </>
    )
    
}

export const ExampleUseState = () => {
    const [status, setStatus] = useState("Not Finished");
    const [checked, setChecked] = useState("checked");
    return (
        <div>
            <div>
                <h3>Example 1 - Click button to change state</h3>
                <h3>The work is: {status}</h3>
                <button onClick={() => setStatus("Finished")}>Finish</button>
            </div>

            <div>
                <h3>Example 2 - Click button to change checkbox state</h3>
                <input type="checkbox" value={checked} onChange={() => setChecked(checked === "checked" ? "notchecked" : "checked")}/>
                <p>{checked === "checked" ? "Not Checked" : "Checked"}</p>
            </div>

            <div>
                <h3>Example 3 - Start Rating</h3>
                <StarRating totalStars={5}/>            
            </div>
            
        </div>
    )
}
