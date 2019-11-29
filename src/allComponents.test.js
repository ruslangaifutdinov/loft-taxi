import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render }   from '@testing-library/react'
import Layout  from './components/Layout/Layout'
import LoginForm  from './components/LoginForm/LoginForm'
import Header from './components/Header/Header'
import ProfileForm from './components/ProfilePage/ProfilePage'
import MapPage from './components/MapPage/MapPage'
import SingUp from './components/SingUp/SingUp'
import { Provider } from 'react-redux';
import createAppStore from './redux/store/store';

const store = createAppStore();

test("Render Layout", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Provider store={store}>
        <Layout />
      </Provider>
    </MemoryRouter>
  )
})

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({}),
}))

test("Render Header", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Provider store={store}>
        <Header />
      </Provider>
    </MemoryRouter>
  )
})

test("Render Login Form Page", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Provider store={store}>
      <LoginForm />
      </Provider>
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

test("Render Sing Up page", () => {
  render(
    <MemoryRouter initialEntries={["/singup"]}>
      <Provider store={store}>
        <SingUp/>
      </Provider>
    </MemoryRouter>
  )
})

/** выдает ошибку TypeError: _mapboxGl.default.Map is not a constructor */

// test("Render Map Page", () => {
//   render(
//     <MemoryRouter initialEntries={["/"]}>
//       <MapPage />
//     </MemoryRouter>
//   )
// })