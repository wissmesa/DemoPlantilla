import React, { Component } from "react";
import {   MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
import {BrowserRouter as Router} from 'react-router-dom';
import  "../Pills/Style.css";

class Pills extends Component {
  state = {
    activeItemClassicTabs1: "1"
  };

 

  toggleClassicTabs1 = tab => () => {
    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({
        activeItemClassicTabs2: tab
      });
    }
  };

  render() {
    return (
        
        <Router>
       <>
      <MDBContainer className=" nav ">
          <MDBNav classicTabs color="orange" >
            
            <MDBNavItem>
              <MDBNavLink link to="#" 
            //   active={ this.state.activeItemClassicTabs1 === "1"} 
            //    onClick={this.toggleClassicTabs1("1")} 
              >
                <br />
                Actividades / Eventos / <br />
                 Jornadas
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink link to="#" 
            //   active={ this.state.activeItemClassicTabs1 === "2"}
            //   onClick={this.toggleClassicTabs1("2")}
               >
                <br />
                Noticias 
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink link to="#" 
            //   active={ this.state.activeItemClassicTabs1 === "3"} 
            //   onClick={this.toggleClassicTabs1("3")} 
              >
                <br />
                Directorio Telefónico
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink link to="#" 
              active={ this.state.activeItemClassicTabs1 === "4"} 
            //   onClick={this.toggleClassicTabs1("4")} 
                >
                <br />
                 Nuestros Aliados
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink link to="#" 
                    active={ this.state.activeItemClassicTabs1 === "4"}
                    // onClick={this.toggleClassicTabs1("4")} 
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    style={{
                      color: "yellow !important",
                      display: "flex",
                      justifyContent: "center",
                          }}
                    centered >
                <br />
                Cumpleaños/Promociones
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink link to="#" 
              active={ this.state.activeItemClassicTabs1 === "4"} 
            //   onClick={this.toggleClassicTabs1("4")}
                >
                <br />
                Seguridad y Salud Laboral
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink link to="#" 
              active={ this.state.activeItemClassicTabs1 === "4"} 
            //   onClick={this.toggleClassicTabs1("4")} 
                >
                <br />
                Prevención <br /> y LEG. Capitales
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink link to="#" 
              active={ this.state.activeItemClassicTabs1 === "4"} 
            //   onClick={this.toggleClassicTabs1("4")} 
                >
                <br />
                 Enlaces de Interes
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
         
          
        </MDBContainer>
        </>
        </Router>
    );
  }
}

export default Pills;