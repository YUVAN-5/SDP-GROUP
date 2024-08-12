// components/MailsList.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const MailsList = () => {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const response = await axios.get('/api/mails');
        setMails(response.data);
      } catch (error) {
        console.error('Error fetching mails:', error);
      }
    };

    fetchMails();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mails</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {mails.length === 0 ? (
          <p>No mails found.</p>
        ) : (
          <ul>
            {mails.map((mail) => (
              <li key={mail.id} className="border-b py-2">
                <p className="font-semibold">{mail.subject}</p>
                <p>{mail.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MailsList;
