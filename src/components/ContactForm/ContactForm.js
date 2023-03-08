import { nanoid } from 'nanoid';
import { Form, ErrorMessage } from './ContactForm.styled';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

export const ContactForm = ({ onSubmit }) => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer')
      .required('Required'),
  
    number: Yup.string()
      .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +')
      .required('Required')
  });
    
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onSubmit({
          ...values,
          id: nanoid()},
          
          actions.resetForm()
        )
      }}
    >
      <Form>
        <label>
          Name
          <Field
            type="text"
            name="name"
            />
            <ErrorMessage name="name" component="span"></ErrorMessage>
        </label>

        <label>
          Number
          <Field
            type="tel"
            name="number"
          />
          <ErrorMessage name="number" component="span"></ErrorMessage>
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
