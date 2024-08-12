import React, { useEffect, useState } from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const AgentMails = () => {
    const [mails, setMails] = useState([]);

    useEffect(() => {
        // Fetch mails data from the backend
        // Example: axios.get('/api/agent/mails').then(response => setMails(response.data));
    }, []);

    return (
        <div className="p-6 ml-64 mt-16">
            <div className="bg-lightBg p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Mails</h2>
                {mails.length > 0 ? (
                    mails.map((mail) => (
                        <div key={mail.id} className="p-4 border-b border-gray-200">
                            <h3 className="text-lg font-semibold">{mail.subject}</h3>
                            <p className="text-darkText">{mail.body}</p>
                            <div className="flex items-center space-x-2 mt-2">
                                <FaEnvelopeOpenText />
                                <span>{mail.sender}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No mails available</p>
                )}
            </div>
        </div>
    );
};

export default AgentMails;
