import axios from 'axios'
import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: `${process.env.REACT_APP_BACKEND_SERVER}`,
            dataa: []
        }
    }
    createFav = async (data) => {
        console.log(data)
        await axios.post(`${this.state.url}/createData`, data)
    }

    componentDidMount = async (req, res) => {
        let responseData = await axios.get(`${this.state.url}/getApiData`)
        console.log(responseData)
        this.setState({
            dataa: responseData.data

        })


    }
    render() {
        return (
            <>
                {this.state.dataa.map(ele => {
                    return <><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ele.image} />
                        <Card.Body>
                            <Card.Title><h3>{ele.name}</h3></Card.Title>
                            <Card.Text>
                                <h5>Description :</h5> {ele.description} <br />
                                <h5>Price:</h5>   {ele.price}
                            </Card.Text>
                            <Button onClick={e => this.createFav(ele)} variant="primary">Add-To-list</Button>
                        </Card.Body>
                    </Card></>
                })}
            </>
        )
    }
}

export default Home
