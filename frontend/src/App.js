import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState('');
    
    // Fetch data from the backend on component mount
    useEffect(() => {
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        if (backendUrl) {
            axios.get(`${backendUrl}/`)
                .then(response => setData(response.data))
                .catch(error => console.error('Error fetching data from backend:', error));
        }
    }, []);

    return (
        <div>
            <h1>Frontend</h1>
            <p>{data}</p>
            <a href={`${process.env.REACT_APP_BACKEND_URL}/`} target="_blank" rel="noopener noreferrer">
                Go to Backend Entry Point
            </a>
        </div>
    );
}

export default App;
