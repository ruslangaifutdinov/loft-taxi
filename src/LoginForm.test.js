import React from 'react'
import ReactDOM from "react-dom";
import { render }   from '@testing-library/react'
import LoginForm from './components/LoginPage/LoginForm/LoginForm'

describe('LoginForm', () => {

  it('Компонент рендерится без ошибок', () => {
    const { queryByTestId } = render(<LoginForm />)

    expect(queryByTestId('login-form')).toBeTruthy()
  })
})