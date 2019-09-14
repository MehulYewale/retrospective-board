import React, { Component } from 'react';
import '../App.css';
import Card from './Card';

class CardListView extends Component {

  onAddCartAction(id) {
    // New card add
    let cartId = this.props.cardList.length > 0 ? this.props.cardList[this.props.cardList.length - 1].id + 1 : 1;
    this.props.addCard({id:cartId, text:'', cardSection:id, isNew: true});
  }

  onSave = (id, newText, isEdit) => {
    if(isEdit) {
      // Edit newly added card
      this.props.editCard({id:id, text:newText, cardSection:this.props.section.id, isNew : isEdit});
    } else {
      // Edit or delete existing card
      this.props.editCard({id:id, text:newText, cardSection:this.props.section.id});
    }
  }

  render(props) {
    return (
        <div className="col-sm-6 card-section">
            <div className="text-center"> 
              <label className="cart-name"> {this.props.section.title} </label>
              <button className="btn btn-primary btn-sm circle-fa-button " title="Add Card"
                onClick={() => this.onAddCartAction(this.props.section.id)}
                disabled={(this.props.cardList.findIndex(card => card.text.length === 0) > -1)? true : false}>
                <i className="fa fa-plus"></i>
              </button>
            </div>

            <div className="row">
                {this.props.cardList.map(value =>   
                    <Card key={value.id + value.cardSection} cardDetails={value} saveCallBack={this.onSave}></Card>
                )}
            </div>
        </div>
    );
  }
}

export default CardListView;


