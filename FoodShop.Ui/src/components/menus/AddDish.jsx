/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RenderSelect from '../common/RenderSelect.jsx';

class AddDish extends Component {
  constructor() {
    super();
    this.state = {
      selected: []
    };
  }
  getNumber(id) {
    debugger;
    const { selected } = this.state;
    selected.forEach((menu) => {
      if (menu.id === id) return menu.number;
    });
    return 0;
  }
  onDishSelect(number, id) {
    const { selected } = this.state;
    let index = selected.findIndex((item) => item.id === id);
    if (~index) {
      selected[index].number = number;
    } else {
      selected.push({ id, number });
    }
    console.log(this.state.selected);
  }
  renderNumberOptions(number) {
    let options = [];
    for(let i = 0; i < number; i++) {
      options.push({
        value: i,
        text: i
      });
    }
    return options;
  }
  render() {
  const { ImageUrl, Description, Calories, Configurations } = this.props;
  const numberValues = this.renderNumberOptions(10);
    return (
      <div>
        <div className="col-md-5">
          <img src={ImageUrl} />
        </div>
        <div className="col-md-7">
          <p>{ Description }</p>
          <p className="dish_option">Калории: { Calories }</p>
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
              <TableHeaderColumn>Размер</TableHeaderColumn>
              <TableHeaderColumn>Вес</TableHeaderColumn>
              <TableHeaderColumn>Стоимость</TableHeaderColumn>
              <TableHeaderColumn />
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {Configurations.map((item, key) => (
                <TableRow key={key}>
                  <TableRowColumn>{item.Size}</TableRowColumn>
                  <TableRowColumn>{item.Weight}</TableRowColumn>
                  <TableRowColumn>{item.Price}</TableRowColumn>
                  <TableRowColumn><RenderSelect
                    label="Количество"
                    defaultValue={0}
                    options={numberValues}
                    onChange={(value) => this.onDishSelect(value, item.Id)}
                  />
                  </TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default AddDish;
//
// Size: '12см',
//   Weight: '350г',
//   Price: '5 BYN'

