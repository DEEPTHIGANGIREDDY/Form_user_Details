
import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

const FormDataForm = ({ addData, selectedData, formData }) => {
  const [formFields, setFormFields] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    // if the selectedData is not null, populate the form fields with the selected entry's data
    if (selectedData !== null) {
      setFormFields(formData[selectedData]);
    }
  }, [selectedData, formData]);

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(formFields);
    setFormFields({ name: '', email: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <TextField
        label="Name"
        name="name"
        value={formFields.name}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={formFields.email}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        name="phone"
        value={formFields.phone}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        {selectedData !== null ? 'Update' : 'Save'}
      </Button>
    </form>
  );
};

export default FormDataForm;
