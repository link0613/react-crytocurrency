import React from 'react'
import {Navbar} from './components'
import Routes from './routes'
import Modal from 'react-modal';
import Favicon from 'react-favicon';
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  return (
    <Layout>
      <Favicon url="./assets/favicon.ico" />
      <Navbar />
      <Routes />
    </Layout>
  )
}

export default App
