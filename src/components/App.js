import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import { HalfCircleSpinner } from 'react-epic-spinners';
import Cryptolore from '../abis/Cryptolore.json';
import Navbar from './Navbar.js'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './Footer.js'
import Addwork from './Addwork'
import Works from './Works'
import Home from './Home'
import Mytokens from './Mytokens'

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should use the MetaMask extension!')
    }
  }
  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Cryptolore.networks[networkId]
    if(networkData) {
      const cpl = web3.eth.Contract(Cryptolore.abi, networkData.address)
      this.setState({ cpl })
      const worksId = await cpl.methods.worksId().call()
      this.setState({ cpl })
      for (var i = 1; i <= worksId; i++) {
        const work = await cpl.methods.works(i).call()
        if (work.isSold === false) {
          this.setState({
            works: [...this.state.works, work]
          })
        }
        if (work.owner === this.state.account) {
          this.setState({
            mytokens: [...this.state.mytokens, work]
          })
        }
      }
      this.setState({ loading: false})
    } else {
      window.alert('The forum contract could not be deployed to network')
    }
  }
  
  addWork(price, title, content){
    this.setState({ loading: true })
    this.state.cpl.methods.addWork(window.web3.utils.toWei(price.toString(), 'ether'), title, content).send({ from: this.state.account })
    .once('confirmation', (n, receipt) => {
      this.setState({ loading: false })
      window.location.href = '/works'
    })
  }

  buyWork(wId,amount){
    this.setState({ loading: true })
    this.state.cpl.methods.buyWork(wId).send({ from: this.state.account, value: window.web3.utils.toWei(amount.toString(),'ether')})
    .once('confirmation', (n, receipt) => {
      this.setState({ loading: false })
      window.location.href = '/mytokens'
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      cpl: null,
      worksId: 0,
      works: [],
      mytokens: [],
      loading: true
    }
    this.addWork = this.addWork.bind(this)
    this.buyWork = this.buyWork.bind(this)
  }

  render() {
    return (
      <div className="back">
        <Router>
        <Navbar />
          <Route exact path="/" render={props => (
            <React.Fragment>
              {
                this.state.loading
                  ? <div class="center"><HalfCircleSpinner size="100" color="red" /></div>
                  : <Home account={this.state.account} />
              }
            </React.Fragment>
          )} />     
          <Route exact path="/add" render={props => (
              <React.Fragment>
                {
                  this.state.loading
                    ? <div class="center"><HalfCircleSpinner size="100" color="red" /></div>
                    : <Addwork addWork={this.addWork} />
                }
              </React.Fragment>
          )} />
          <Route exact path="/works" render={props => (
              <React.Fragment>
                {
                  this.state.loading
                    ? <div class="center"><HalfCircleSpinner size="100" color="red" /></div>
                    : <Works works={this.state.works} buyWork={this.buyWork}/>
                }
              </React.Fragment>
          )} />  
          <Route exact path="/Mytokens" render={props => (
              <React.Fragment>
                {
                  this.state.loading
                    ? <div class="center"><HalfCircleSpinner size="100" color="red" /></div>
                    : <Mytokens mytokens={this.state.mytokens} />
                }
              </React.Fragment>
          )} /> 
        <Footer />
        </Router>
      </div>

    );
  }
}

export default App;
