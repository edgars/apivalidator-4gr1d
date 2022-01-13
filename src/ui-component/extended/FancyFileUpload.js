/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-syntax */
import { useRef } from 'react';

function FancyFileUpload() {
    const filesElement = useRef(null);

    const sendFile = async () => {
        const dataForm = new FormData();
        for (const file of filesElement.current.files) {
            dataForm.append('file', file);
        }
        const res = await fetch(`http://localhost:8080/upload`, {
            method: 'POST',
            body: dataForm
        });
        const data = await res.json();
        console.log(data);
    };

    return (
        <div>
            <input type="file" multiple ref={filesElement} />
            <button onClick={sendFile}>Send file</button>
        </div>
    );
}

export default FancyFileUpload;
