import logo from './logo512.png'
import React, {Component} from 'react'
import './App.css'
import Web3 from 'web3'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Identicon from 'identicon.js'
//import MetaCoin from '../build/contracts/MetaCoin.json'

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    console.log(window.web3)
    await this.loadBlockchainData()
  }
  
  async loadWeb3() {
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. Try MetaMask')
    }
  } 

  async loadBlockchainData(){
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
    this.setState({account: accounts[0]})
    console.log(this.state.account)
    const ethBalance = await web3.eth.getBalance(this.state.account)
    this.setState({ethBalance})
    console.log(ethBalance)
  }

  constructor(props){
    super(props)
    this.state = {
      web3: 'undefined',
      account: '',
      token: null,
      ethBalance: 0,
      BankAddress: null
    }
  }

  render () {return (

    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="./logo512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          This is our project
        </Navbar.Brand>
        <p>{this.state.account}</p>
      </Navbar>
      <div><br></br>
        <p>
          <Card style={{ width: '60rem', margin: 'auto' }} bg="dark" classname="App">
            <ListGroup variant="flush">
              <ListGroup.Item>Account address: {this.state.account}
               {this.state.account? <img
                className= "ml-2"
                width= '30'
                height= '30'
                src ={`data:image/png;base64,${new Identicon(this.state.account, 30).toString()}`}
                alt=""
                />
                :<span></span>
               }
              </ListGroup.Item>
              <ListGroup.Item>Account Balance: {this.state.ethBalance} WEI </ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </p>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/Akogia"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more about me @github
        </a>
      </header>
    </div>
  );
  }
}

export default App;
