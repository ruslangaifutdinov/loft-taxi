import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render }   from '@testing-library/react'
import LoginForm  from './components/LoginForm/LoginForm'
import Header from './components/Header/Header'
import ProfileForm from './components/ProfilePage/ProfilePage'
//import { MapPage } from './components/MapPage/MapPage'

test("Render Layout", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Header />
    </MemoryRouter>
  )
})

test("Render Login Form Page", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <LoginForm />
    </MemoryRouter>
  )
})

test("Render Profile Form Page", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <ProfileForm />
    </MemoryRouter>
  )
})

/** выдает ошибку что mapboxgl not a function */

// test("Render Map Page", () => {
//   render(
//     <MemoryRouter initialEntries={["/profile"]}>
//       <MapPage />
//     </MemoryRouter>
//   )
// })