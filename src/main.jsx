import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {
  Home, 
  WeeklyPuja, 
  ExclusivePuja, 
  EPuja, 
  Kawach, 
  Crystals, 
  SelectWeeklyPuja, 
  SelectExclusivePuja, 
  SelectKawach, 
  SelectCrystal, 
  SignUp, 
  UserInfo, 
  Checkout,
  Blog,
  PrivacyPolicy,
  Terms,
  RefundPolicy,
  Success} from './pages/index.js'
import { Provider } from 'react-redux'
import store from './store/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />}/>
      <Route path='weekly-pooja' element={<WeeklyPuja />} />
      <Route path='weekly-pooja/:slug' element={<SelectWeeklyPuja />} />
      <Route path='exclusive-pooja' element={<ExclusivePuja />} />
      <Route path='exclusive-pooja/:slug' element={<SelectExclusivePuja />} />
      <Route path='e-pooja/:slug' element={<EPuja />} />
      <Route path='kawach' element={<Kawach />} />
      <Route path='kawach/:slug' element={<SelectKawach />} />
      <Route path='crystals' element={<Crystals />} />
      <Route path='crystals/:slug' element={<SelectCrystal />} />
      <Route path='blog' element={<Blog />} />
      <Route path='login' element={<SignUp />} />
      <Route path='add-details/:slug' element={<UserInfo />} />
      <Route path='checkout/:slug' element={<Checkout />} />
      <Route path='privacy-policy' element={<PrivacyPolicy />} />
      <Route path='terms' element={<Terms />} />
      <Route path='refund' element={<RefundPolicy />} />
      <Route path='success' element={<Success />} />

    </Route>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
  </React.StrictMode>,
)
