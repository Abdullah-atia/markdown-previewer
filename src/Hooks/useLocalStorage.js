import { useEffect, useState } from "react";

export function useLocalStorage(name) {
    let [data, setData] = useState(null);

    function setItem(value) {
    localStorage.setItem(name, JSON.stringify(value));
    setData(value);
    }

    useEffect(() => {
    setData(JSON.parse(localStorage.getItem(name)));
    }, []);

    return [data, setItem];
}
