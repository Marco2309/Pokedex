import React from 'react';
import Button from 'react-bootstrap/Button';

export default class Card extends React.Component {
    
    render(){
        return (
            <div className="card-container">
                <h3 className='lead'>{this.props.id} {this.props.name}</h3>
                <div className="img-container">
                    <img src={this.props.img} alt={this.props.name} />
                </div>
                <div className="button-container">
                    <Button onClick={()=>{this.props.handleShow(); this.props.setUrlFn(this.props.Url, this.props.img)}}>more</Button>
                </div>
            </div>
        )
    }
}