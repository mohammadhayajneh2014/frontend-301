import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Modale } from './Modale';


export class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favArray: [],
            show:false,
            strDrink:"",
            strDrinkThumb:'',
            idx:0



        }
    }

    componentDidMount = async () => {
        const server = 'http://localhost:3080';
        const favData = await axios.get(`${server}/fav`);
        this.setState({
            favArray: favData.data
        })
    }

    Delete = async (idx) => {
        const server = 'http://localhost:3080';
        const newArray = await axios.delete(`${server}/deleteFav?id=${idx}`);
        this.setState({
            favArray: newArray.data
        })
    }

showUpdate=(idx)=>{
    this.setState({
        show:true,
        idx:idx,
        strDrink:this.state.favArray[idx].strDrink,
        strDrinkThumb:this.state.favArray[idx].strDrinkThumb

    })
}

close=()=>{
    this.setState({
        show:false
    })
}






    Updat = async (event) => {
        event.preventDefault();
       
        const obj={
            strDrink:event.target.strDrink.value,
            strDrinkThumb:event.target.strDrinkThumb.value,
            id:this.state.favArray[this.state.idx]['_id']

        }
        const server = 'http://localhost:3080';

        const newArray = await axios.delete(`${server}/UpdatFav`, obj);
        this.setState({
            favArray: newArray.data,
            show :false
        })
    }



    render() {
        return (
            <div>
                <Row xs={1} md={3} className="g-4">
                {this.state.favArray.map((item, idx) => (
                     <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.strDrinkThumb} />
                        <Card.Body>
                            <Card.Title>{item.strDrink}</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary" onClick={() => this.Delete(idx)}>Delete</Button>
                            <Button variant="primary" onClick={() => this.showUpdate(idx)}>Update</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}

</Row>




<Modale show={this.state.show}
close={this.state.close}
strDrink={this.state.strDrink}
strDrinkThumb={this.state.strDrinkThumb}
Updat={this.Updat}


/>

            </div>
        )
    }
}

export default Favorite;
