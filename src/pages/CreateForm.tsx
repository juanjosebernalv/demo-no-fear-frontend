import React from 'react';
import { useInput } from '../hooks/useInput';
import { Input, Button } from 'antd';

const CreateForm = () => {
  const name = useInput('');
  const age = useInput('');

  const handleCreate = async () => {
    console.log(name.value, age.value);
    try {
      // const request = new Request("http://localhost:3000/authors", {
      //   method: "POST",
      //   body: JSON.stringify({ "name": name.value, "age": age.value }),
      // });

      const params = {
        name: name.value,
        age: age.value
      };
      const options = {
        method: 'POST',
        body: JSON.stringify(params),
        headers: new Headers({ 'Content-Type': 'application/json' })
      };

      const response1 = await fetch('http://localhost:3000/authors', options)
        .then(response => response.json())
        .then(response => {
          // Do something with response.
        });
      console.log(response1);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form__container">
      <h2>Create your Author</h2>

      <Input type="text" {...name} placeholder="Enter author name" />
      <Input type="age" {...age} placeholder="Enter author age" />
      <Button onClick={handleCreate}>Create</Button>
    </form>
  );
}

export default CreateForm;
