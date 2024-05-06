import Contact from "../Contact/Contact";

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </div>
  );
};

export default ContactList;
