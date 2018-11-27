// https://github.com/react-component/select
import React from 'react';
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.css';

const RcSelect = (props) => {
  return (
    <div className="select-wrapper">
      <Select
        value={props.currentLocation.id || 0}
        placeholder="select"
        dropdownMenuStyle={{ maxHeight: 200, overflow: 'auto' }}
        allowClear
        optionLabelProp="children"
        optionFilterProp="text"
        onChange={props.onChange}
        firstActiveValue=""
        backfill
      >
        { props.userLocations.length && props.userLocations.map((item, index) =>
          <Option key={index} value={item.id} text={item.name}>
            {item.name}
          </Option> )
        }
      </Select>
    </div>
  );
};

export default RcSelect;