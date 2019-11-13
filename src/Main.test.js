import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render }   from '@testing-library/react'
import { LoginForm } from './components/LoginPage/LoginForm/LoginForm'
import { Header } from './components/Header/Header'
import { ProfilePage } from './components/ProfilePage/ProfilePage'


test("Render LoginForm", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <LoginForm />
    </MemoryRouter>
  )
})

test("Render Layout", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Header />
    </MemoryRouter>
  )
})

test("Render profile page", () => {
  render(
    <MemoryRouter initialEntries={["/profile"]}>
      <ProfilePage />
    </MemoryRouter>
  )
})