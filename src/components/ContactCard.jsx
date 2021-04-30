import Phone from "./Phone";

const ContactCard = (props) => {
  let { name, phoneNumber, address } = props;

  return (
    <>
      Name: {name}
      <br />
      Address: {address}
      <Phone phoneNumber={phoneNumber} />
    </>
  );
};

export default ContactCard;
