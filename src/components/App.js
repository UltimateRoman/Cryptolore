import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Cryptolore from '../abis/Cryptolore.json';


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
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <h1>Cryptolore</h1>
        </nav>
      </div>
    );
  }
}

export default App;
