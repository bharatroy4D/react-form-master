import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = e => {
        setValue(e.target.value)
    }
    return [value, handleChange]

    // const onchange = e => {
    //     setValue(e.target.value);
    // }

    //     return{
    //         value, onchange
    //     }
}
export default useInputState;