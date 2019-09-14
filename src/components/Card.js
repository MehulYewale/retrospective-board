import React, { Component } from 'react';
import '../App.css';

class Card extends Component {

    onEditCartAction = () => {
        console.log('Card -- onEditCartAction');
        this.props.saveCallBack(this.props.cardDetails.id, this.props.cardDetails.text, true);
    }

    onDeleteCartAction = () => {
        console.log('Card -- onDeleteCartAction');
        this.props.saveCallBack(this.props.cardDetails.id, '');
    }

    saveItem(event) {
        console.log('Card -- saveItem', event.target.value);
        this.props.saveCallBack(this.props.cardDetails.id, event.target.value);
    }

    render(props) {
        return (
            <div className="col-sm-4">
                <div className="card app-card">
                { this.props.cardDetails.isNew !== true && (this.props.cardDetails.text.length > 0)  ?
                    // View card
                    <div className="card-text">
                        <span onDoubleClick={this.onEditCartAction}>{this.props.cardDetails.text}</span>
                        <button className="btn card-delete-button" title="Delete Card" onClick={this.onDeleteCartAction}>
                            <i className="fa fa-1 fa-close"></i>
                        </button>
                    </div>
                    :
                    // Add/Edit card
                    <textarea autoFocus className="input-text" style={{minHeight: 85}} onBlur={this.saveItem.bind(this)}
                        defaultValue={this.props.cardDetails.text}>
                    </textarea>
                }
                </div>
            </div>
        );
    }
}

export default Card;
