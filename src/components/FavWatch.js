import axios from 'axios'
import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

class FavWatch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: `${process.env.REACT_APP_BACKEND_SERVER}`,
            dataaa: [],
            showData: false,
            name: '',
            image: '',
            description: '',
            price: '',
            id: ''

        }

    }

    deleteFav = async (id) => {
        let removeData = await axios.delete(`${this.state.url}/deleteData/${id}`)

        this.setState({
            dataaa: removeData.data

        })
    }

    handleSubmit=async(e)=>{
        e.preventDefault()
        const obj={
            name: this.state.name,
            image: this.state.image,
            description: this.state.description,
            price: this.state.price,

        }

        let responseData = await axios.put(`${this.state.url}/updateData/${this.state.id}`,obj)
        console.log(responseData)
        this.setState({
            dataaa: responseData.data

        })

    }

    updateFav = (image, name, description, price, id) => {
        this.setState({
            image: image,
            name: name,
            description: description,
            price: price,
            id: id,
            showData:true
        })
    }
    handleName = (e) => { this.setState({ name: e.target.value }) }
    handleImage = (e) => { this.setState({ image: e.target.value }) }
    handleDescription = (e) => { this.setState({ description: e.target.value }) }
    handlePrice = (e) => { this.setState({ price: e.target.value }) }

    componentDidMount = async (req, res) => {
        let responseData = await axios.get(`${this.state.url}/getData`)
        console.log(responseData)
        this.setState({
            dataaa: responseData.data

        })

    }
    render() {
        return (
            <>
            <h1>{this.props.profile.name}</h1>
            <h1>{this.props.profile.email}</h1>
                {this.state.showData && <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleName} value={this.state.name} />
                    <input type="text" onChange={this.handleImage} value={this.state.image} />
                    <input type="text" onChange={this.handleDescription} value={this.state.description} />
                    <input type="text" onChange={this.handlePrice} value={this.state.price} />
                    <input type="submit" value="Update" />
                </form>}
                
                {this.state.dataaa.map(ele => {
                    return <><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ele.image} />
                        <Card.Body>
                            <Card.Title><h3>{ele.name}</h3></Card.Title>
                            <Card.Text>
                                <h5>Description :</h5> {ele.description} <br />
                                <h5>Price:</h5>   {ele.price}
                            </Card.Text>
                            <Button onClick={e => this.deleteFav(ele._id)} variant="primary">Delete</Button>
                            <Button onClick={e => this.updateFav(ele.image, ele.name, ele.description, ele.price,ele.id)} variant="primary">Update</Button>
                        </Card.Body>
                    </Card></>
                })}
            </>
        )
    }
}

export default FavWatch
