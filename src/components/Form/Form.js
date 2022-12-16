import React, { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [timeDelay, setTimeDelay] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the POST request to the server using fetch
    fetch("/admin/add-new-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        timeDelay,
        email,
        phoneNumber,
      }),
    })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred while submitting the form");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <label>
        User Name:
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Time Delay:
        <input
          type="text"
          name="timeDelay"
          value={timeDelay}
          onChange={(event) => setTimeDelay(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
