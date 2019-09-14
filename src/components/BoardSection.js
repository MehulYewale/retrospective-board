import React, { Component } from 'react';
import CardListView from './CardListView';
class App extends Component {
  state = {
    cardList: [
      {id: 1, text:'Good Stories', cardSection:'WWW'},
      {id: 2, text:'Good Stories', cardSection:'WWW'},
      {id: 3, text:'Bad Stories', cardSection:'AI'}
    ],
    sections : [
      {id: 'WWW', title: 'What went well'},
      {id: 'WCI', title: 'What can be improved'},
      {id: 'SD', title: 'Start doing'},
      {id: 'AI', title: 'Action items'}
    ]
  };

  addCard = (card) => {
    console.log('BoardSection - addCard');
    // this.state.cardList.push(card);
    // this.setState(() => ({cardList: this.state.cardList}));
    this.setState(prevState => ({ cardList: prevState.cardList.concat(card)}));
  }
  editCard = (card) => {
    console.log('BoardSection -- editCard');
    if(card.text.length > 0) {
      // Edit card
      this.setState(prevState => ({ cardList: prevState.cardList.map(item =>
        item.id === card.id && item.cardSection === card.cardSection ? card : item )}
      ));
    } else {
      // Remove/ Delete card
      this.setState(prevState => ({ cardList: prevState.cardList.filter(item =>
        item.cardSection === card.cardSection ? (item.id !== card.id) : true)}
      ));
    }
    setTimeout(() => console.log(this.state.cardList));
  }

  filterCardsBySection = (section) => {
    return this.state.cardList.filter(value => section === value.cardSection);
  }

  render() {
    return (
      <div className="container-fluid">
          <div className="row">
            { this.state.sections.map(value =>
              <CardListView key={value.id} section={value} cardList={this.filterCardsBySection(value.id)} 
                addCard={this.addCard} editCard={this.editCard}></CardListView>
            )}
           </div>
      </div>
    );
  }
}

export default App;


