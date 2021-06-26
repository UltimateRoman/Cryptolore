import React, { Component } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Works extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    render() {

        let filteredWorks = this.props.works.filter((work) => {
                return work.title.indexOf(this.state.search) !== -1;
            }
        );

        return (
            <div className="container-fluid mt-5" style={{ textAlign: 'center' }}>
                <div className="row">
                    <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ margin: '0% 15%' }}>
                        <h1>Purchase Literary Works NFTs</h1>
                        <br />
                        <input placeholder="Enter title to search" style={{ width: '80%', margin: 'auto' }} type="text" class="form-control" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                        <p>&nbsp;</p>
                        {filteredWorks.map((work, key) => {
                            return (
                                <Card key={key}>
                                    <Card.Body>
                                        <Card.Title>{work.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Author: {work.writer}</Card.Subtitle>
                                        <br />
                                        <Card.Subtitle className="mb-2 text-muted">Price: {window.web3.utils.fromWei(work.price.toString(), 'Ether')} MATIC</Card.Subtitle>
                                        <Card.Text>
                                            {work.content}
                                        </Card.Text>
                                        <Button
                                            variant='primary'
                                            name={work.id}
                                            onClick={(event) => {
                                            this.props.buyWork(event.target.name, window.web3.utils.fromWei(work.price.toString(), 'Ether'))
                                            }}>
                                            Purchase NFT
                                        </Button>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </main>
                </div>
            </div>
        );
    }
}

export default Works;