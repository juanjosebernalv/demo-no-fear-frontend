import React, { FormEvent, useEffect, useState } from 'react'
import { useInput } from '../hooks/useInput';
import { AppContext } from '../components/AppContext/AppContext';
import { Card } from 'antd';
const LoginForm = () => {

  const email = useInput('');
  const password = useInput('');

  const [imageHeader, setImageHeader] = useState<string>();


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Access email.value and password.value to get form input values
    console.log('Email:', email.value);
    console.log('Password:', password.value);
    // Additional logic like form submission can be added here
    // verifyData(email.value);
  };

  const loadImages = async () => {
    // X-Api-Key
    // image/jpg

    const result = await fetch('https://api.api-ninjas.com/v1/randomimage?category=nature', {
      headers: {
        "X-Api-Key": "kxanm5McAthieF0Uw+VS8g==Sricbltjxsqv82xK",
        "accept": "image/jpg",
      },
      // .,.
    })
      // .then(response => response.json())
      // .then(data => console.log(data));
      const blob = await result.blob();
      const image = URL.createObjectURL(blob);

      setImageHeader(image);
  }

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <AppContext.Consumer>

      {
        ({example, verifyData}: { example: string, verifyData: Function }) => (
          <Card hoverable
            className=""
            cover={<img alt="example" className="w-full h-96" src={imageHeader} />}>
            {/* { imageHeader ?<img src={imageHeader} alt="Guido Van Rossum"  /> : 'loading...' } */}
          <form onSubmit={handleSubmit}>
            -----{example}
            <label>
              Email:
              <input type="email" {...email} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" {...password} />
            </label>
            <br />
            <button type="submit" >Submit</button>

          </form>
          </Card>

        )
      }
    </AppContext.Consumer>
  )
}

export default LoginForm