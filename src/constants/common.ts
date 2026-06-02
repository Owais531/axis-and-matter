export const EMAIL = {
  sender: "manahil@nusoft.co",
  receiver: ["safwan@nusoft.co", "manahil@nusoft.co", "hello@nusoft.co"],
  // receiver: ["owais@nusoft.co"],
  contactUsEmailTemplate: `
    <div style="font-size:1.1rem">
      <p><b>First Name:</b> {firstName}</p>
      <p><b>Last Name:</b> {lastName}</p>
      <p><b>Email:</b> {email}</p>
      <p><b>Phone Number:</b> {phoneNumber}</p>
      <p><b>Page:</b> {page}</p>
      <p><b>Message:</b> {message}</p>
    </div>
  `,
};

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://www.axismatter.com/";
