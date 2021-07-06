import axios from 'axios';
import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: []
        }
    }
    componentDidMount = async () => {
        const server = 'http://localhost:3080';
        const allData = await axios.get(`${server}/all`);
        this.setState({
            allData: allData.data
        })
    }
    addFav = async (idx) => {
        const server = 'http://localhost:3080';
        const obj = {
            strDrink: this.state.allData[idx].strDrink,
            strDrinkThumb: this.state.allData[idx].strDrinkThumb

        }
        await axios.post(`${server}/addFav`,obj)

    }
    render() {
        return (
            <div>
                <Row xs={1} md={3} className="g-4">
                    {this.state.allData.map((item, idx) => (
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.strDrinkThumb} />
                                <Card.Body>
                                    <Card.Title>{item.strDrink}</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button variant="primary" onClick={() => this.addFav(idx)}>Add-to-favorite</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                </Row>

            </div>
        )
    }
}

export default Home;
