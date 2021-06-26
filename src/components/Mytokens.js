import React, { Component } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

class Mytokens extends Component {

    render() {
        return (
            <div className="container-fluid mt-5" style={{ textAlign: 'center' }}>
                <div className="row">
                    <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ margin: '0% 15%' }}>
                        <h1>Your NFTs</h1>
                        <br />
                        {this.props.mytokens.map((work, key) => {
                            return (
                                <Card key={key}>
                                    <Card.Body>
                                        <Card.Title>{work.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">NFT ID: {work.id.toString()}</Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted">Author: {work.writer}</Card.Subtitle>
                                        <br />
                                        <Card.Subtitle className="mb-2 text-muted">Price bought for: {window.web3.utils.fromWei(work.price.toString(), 'Ether')} MATIC</Card.Subtitle>
                                        <Card.Text>
                                            {work.content}
                                        </Card.Text>
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

export default Mytokens;