import React, { useState } from 'react'
import styled from 'styled-components'
import Constants from '@/configs/constants'

const LoginPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const LoginFormContainer = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    padding: 40px;
    margin: 550px;
    width: 400px; /* Увеличиваем ширину формы */
`;

const LoginFormTitle = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    color: #ad5d50;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const InputLabel = styled.label`
    font-weight: bold;
    color: #ad5d50;
`;

const InputField = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

const SubmitButton = styled.button`
    background-color: #f5ece5;
    color: #ad5d50;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ad5d50;
        color: #f5ece5;
    }
`;

function LoginPage() {
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${Constants.BASE_URL}/login/web`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.type === "Bearer" && data.accessToken) {
          sessionStorage.setItem('accessToken', data.accessToken);
          window.location.href = '/holly-react/articles';
        } else {
          alert('An error occurred');
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
        alert('An error occurred. Try to login again!');
      });
  };

  return (
    <LoginPageContainer>
      <LoginFormContainer>
        <LoginFormTitle>Вход</LoginFormTitle>
        <Form onSubmit={handleSubmit}>
          <InputLabel htmlFor="login">Имя пользователя:</InputLabel>
          <InputField
            type="text"
            id="login"
            name="login"
            value={formData.login}
            onChange={handleInputChange}
            required
          />
          <InputLabel htmlFor="password">Пароль:</InputLabel>
          <InputField
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <SubmitButton type="submit">Войти</SubmitButton>
        </Form>
      </LoginFormContainer>
    </LoginPageContainer>
  );
}

export default LoginPage;
