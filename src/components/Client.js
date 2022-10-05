import { useEffect, useState } from "react";

function Client() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {typeof backendData === "undefined" ? (
        <p>Loading!</p>
      ) : (
        <ul>
          {backendData.map((userData, i) => (
            <li key={i}>
              Username: {userData.username}, Age: {userData.age}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Client;
