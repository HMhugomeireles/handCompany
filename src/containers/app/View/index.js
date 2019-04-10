import React, { Component } from 'react'
import { Layout, LeftSide, RightSide } from './styled'
import NavBar from './../../../components/navbar/view'
import Main from './../../main/view'


export default class App extends Component {
  render() {
    return (
      <Layout>
        <LeftSide>
          <NavBar />
        </LeftSide>
        <RightSide>
          <Main />
        </RightSide>
      </Layout>
    )
  }
}