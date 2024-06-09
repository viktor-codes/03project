import { useState, useEffect } from "react";
import Header from "./Header";

function App() {
    const API_URL = "https://jsonplaceholder.typicode.com/";
    const [reqType, setreqType] = useState("users");
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}${reqType}`);
                const data = await response.json();
                setItems(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchItems();

    }, [reqType]);
    return (
        <div className="App">
            <Form reqType={reqType} setreqType={setreqType} />
        </div>
    );
}

export default App;
