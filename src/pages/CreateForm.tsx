import React from 'react';
import { useInput } from '../hooks/useInput';
import { Input, Button } from 'antd';

const CreateForm = () => {
  const comment = useInput('');
  return (
    <form className="form__container">
      <h2>Write yor item</h2>

      <Input type="text" {...comment} placeholder="Enter your comment"/>
      <Button>Create</Button>
    </form>
  );
}

export default CreateForm;
