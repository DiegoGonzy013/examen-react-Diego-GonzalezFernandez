import React from 'react';
import uuid from 'react-uuid';
import { Container, Table, Row, Col, Card } from 'react-bootstrap';

class API extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '',
    selectedSpecs: '',
    selectedBrand: '',
   tableData: [] };
  }
  changeSelected = (item) => {
    this.setState({
      selectedItem: item,
      selectedSpecs: item.phone_specs,
      selectedBrand: item.brands,
      selectedPhone: item.list_phones,
    });
  };
  async componentDidMount() {   //sincronizamos con la api
    const response = await fetch('https://api-mobilespecs.azharimm.site/v2');
    const responseData = await response.json();
    this.setState({ tableData: responseData.data, selectedItem: responseData.data[0], selectedSpecs: responseData.data[0].phone_specs,selectedBrand: responseData.data[0].brands}); // asignamos los datos del estado , los que recojemos de al api y hemos clicado en el 
  }

  render() {
    return (
      <div className="main-site">
        <h1>Api moviles</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.brand_name}</td>
                        <td>{item.dsfds}</td>

                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={this.state.selectedItem.image} />
                <Card.Body>
                  <Card.Title>
                  Imagen: {this.state.selectedSpecs.title}
                    <p />
                  </Card.Title>
                  <Card.Text>
                  Marca - Modelo: {this.state.selectedSpecs.brand_name} - {this.state.selectedSpecs.phone_name}
                    <p />
                    Dimensión: {this.state.selectedSpecs.release_date}
                    <p />
                    Almacenamiento: {this.state.selectedItem.rt_score}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default API;
