import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import data from './data/data.json';
import Modal from 'react-bootstrap/Modal';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hearts: '',
      showModal: false,
      selectedPerson: ''
    }
  }

  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + '💖'
    })
  }

  // *** MODAL METHODS ***

  handleOpenModal = (name) => {
    this.setState({
      showModal: true,
      selectedPerson: name
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <Header hearts={this.state.hearts} />
        <Main
          addHearts={this.addHearts}
          handleOpenModal={this.handleOpenModal}
          data={data}
        />
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedPerson}</Modal.Title>
          </Modal.Header>
        </Modal>
        <Footer />
      </>
    )
  }
}


export default App;