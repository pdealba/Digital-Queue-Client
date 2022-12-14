function SignInForum() {
  return (
    <form action="admin/add-new-user" method="GET">
      <div>
        <label for="name">First Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label for="email">E-Mail</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label for="userNumber">Phone Number</label>
        <input type="tel" name="userNumber" id="userNumber" />
      </div>
      <div>
        <label for="waitTime">Wait Time</label>
        <input type="time" name="waitTime" id="waitTime" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignInForum;
