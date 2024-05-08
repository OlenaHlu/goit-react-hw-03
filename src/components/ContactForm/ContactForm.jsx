import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const initialValues = {
  name: "",
  number: "",
};
const ContactForm = ({ onAddContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must not exceed 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .min(9, "Number must be at least 9 characters")
      .max(15, "Number must not exceed 15 characters")
      .required("Number is required"),
  });

  const handleSubmit = (values, actions) => {
    onAddContact({
      id: nanoid(),
      name: values.name,
      number: values.phone,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="div" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
