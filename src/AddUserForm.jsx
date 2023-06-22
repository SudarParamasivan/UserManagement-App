import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import'./App.css'
const AddUserForm = ({ addUser }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(6, 'Name must be at least 6 characters'),
    email: Yup.string().required('Email is required').email('Invalid email format'),
    phone: Yup.string().required('Phone number is required').matches(/^\d{10}$/, 'Invalid phone number'),
  });

  const initialValues = {
    name: '',
    email: '',
    phone: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    addUser(values);
    resetForm();
    Swal.fire('Success!', 'User added successfully.', 'success');
  };

  return (
    <div>
      <h2 className='mt-2'>Create User</h2>
      <div className='row justify-content-center  '>
        <div className='col sm-6 md-6 lg-6' >
      <div className='card text-center p-2'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div className='card-title'>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div className='card-title '>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div className='card-title '>
            <label htmlFor="phone">Phone</label>
            <Field type="text" id="phone" name="phone" />
            <ErrorMessage name="phone" component="div" />
          </div>

          <button className='btn btn-success btn-md'>Create</button>
        </Form>
      </Formik></div></div></div>
    </div>
  );
};

export default AddUserForm;
