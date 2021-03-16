import logo from './logo512.png'
import React, {Component} from 'react'
import './App.css'
import Web3 from 'web3'

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
