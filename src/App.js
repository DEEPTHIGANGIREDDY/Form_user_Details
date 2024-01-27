
import React, { useState, useEffect } from 'react';
import { Container, Typography, CssBaseline, Paper, Button } from '@mui/material';
import FormDataForm from './FormDataForm';
import DataTable from './DataTable';

const App = () => {
  const [formData, setFormData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    //we are loading data from local strorage  on page load
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    setFormData(storedData);
  }, []);

  const addData = (newData) => {
    if (selectedData !== null) {
      // if the selectedData is not null, it means we are editing an existing entry
      const updatedData = formData.map((item, index) =>
        index === selectedData ? newData : item
      );
      setFormData(updatedData);
      setSelectedData(null);
    } else {
      // if the selectedData is null, it means we are adding a new entry
      setFormData([...formData, newData]);
    }
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  const deleteData = (index) => {
    const newData = formData.filter((item, i) => i !== index);
    setFormData(newData);
    localStorage.setItem('formData', JSON.stringify(newData));
  };

  const editData = (index) => {
    setSelectedData(index);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Form Table with Material-UI
        </Typography>
        <FormDataForm addData={addData} selectedData={selectedData} formData={formData} />
        <DataTable data={formData} deleteData={deleteData} editData={editData} />
      </Paper>
    </Container>
  );
};

export default App;
