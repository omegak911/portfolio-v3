import React, { Component } from 'react';
import styled from 'styled-components';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    let { app } = this.props;
    return (
      <EachApp >
        <InnerAppContainer
          onMouseEnter={this.toggleModal}
          onMouseLeave={this.toggleModal}
          >
          {this.state.showModal && 
            <Modal>
              <ModalInfo>
                <TeckStack>{app.techStack}</TeckStack>
                <div><h3>{app.title}</h3></div>
                {app.url && 
                  <div>
                    <a 
                      href={app.url} 
                      target="_blank" 
                      rel="noopener noreferrer">
                      Website
                    </a>
                  </div>
                }
                <div>
                  <a 
                    href={app.code} 
                    target="_blank" 
                    rel="noopener noreferrer">
                    Codebase
                  </a>
                </div>
                {app.special &&
                  <div>
                    <br/>
                    <div>
                      <a 
                        href={app.special[0][1]} 
                        target="_blank" 
                        rel="noopener noreferrer">
                        {app.special[0][0]}
                      </a>
                    </div>
                    {app.special[1] &&
                      <div>
                        <a 
                          href={app.special[1][1]} 
                          target="_blank" 
                          rel="noopener noreferrer">
                          {app.special[1][0]}
                        </a>
                      </div>}
                  </div>
                }
              </ModalInfo>
            </Modal>
          }
          <img src={app.image} alt="app preview"/>
        </InnerAppContainer>
      </EachApp>
    )
  }
}

const EachApp = styled.div`
  display: flex;
  height: 100%;
`;

const InnerAppContainer = styled.div`
  height: 90%;
  border: 1px solid black;
  margin-left: 10px;
  margin-top: auto;
  margin-bottom: auto;
  position: relative;
  > img {
    border-bottom: 2px solid black;
    height: 100%;
  }
`;

const Modal = styled.div`
  align-items: center;
  background-color: rgba(181, 181, 181, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 400;
`

const ModalInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
  width: 80%;
  > a { 
    color: rgb(66, 158, 250);
  }
`;

const TeckStack = styled.div`
  color: gray;
`;

export default Application;