/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class RenderSelect extends Component {
  constructor(props) {
    super(props);
    const { defaultValue } = props;
    this.state = {
      value: defaultValue
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, index, value) {
    const { onChange } = this.props;
    this.setState({ value });
    onChange(value);
  }
  render() {
    const { options } = this.props;
    const { value } = this.state;
    return(
      <SelectField
        className="select_price"
        floatingLabelText="Количество"
        value={value}
        onChange={this.handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} primaryText={option.text} />
        ))}
      </SelectField>
    );
  }
}

export default RenderSelect;