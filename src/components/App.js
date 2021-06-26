import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Cryptolore from '../abis/Cryptolore.json';
import Portis from '@portis/web3'
import Navbar from './Navbar.js'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './Footer.js'
import Home from './Home.js'

const portis = new Portis('5d10f4ad-64b5-47ad-a42f-879bec0cb939', 'maticMumbai');
const web3 = new Web3(portis.provider);
window.web3 = web3;

class App extends Component {
  async componentWillMount() {
    await this.loadBlockchainData()
  }
  async loadBlockchainData() {
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
        this.setState({
          works: [...this.state.works, work]
        })
      }
      this.setState({ loading: false})
    } else {
      window.alert('The forum contract could not be deployed to network')
    }
  }
  
  addWork(price,title,content){
    this.setState({ loading: true })
    this.state.cpl.methods.addWork(window.web3.utils.toWei(price.toString(), 'ether'),title,content).send({ from: this.state.account })
    .once('confirmation', (n, receipt) => {
      this.setState({ loading: false })
      window.location.reload()
    })
  }
  buyWork(wId,amount){
    this.setState({ loading: true })
    this.state.cpl.methods.buyWork(wId).send({ from: this.state.account ,value: window.web3.utils.toWei(amount.toString(),'ether')})
    .once('confirmation', (n, receipt) => {
      this.setState({ loading: false })
      window.location.reload()
    })
  }
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      cpl: null,
      worksId: 0,
      works: [],
      loading: true
    }
  }

  render() {
    return (
      <div className="back">
        <Router>
        <Navbar />
        <Home />
        
        <Footer />
        </Router>
      </div>

    );
  }
}

export default App;
