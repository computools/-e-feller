// https://github.com/react-component/select
import React from 'react';
import Select, {Option} from 'rc-select';
import 'rc-select/assets/index.css';

const selectLang = (props) => {
  const {allLang, currentLang, changeLang} = props;
  return (
    <div className="select-wrapper">
      <Select
        value={currentLang}
        placeholder="select language"
        dropdownMenuStyle={{maxHeight: 200, overflow: 'auto'}}
        // allowClear
        optionLabelProp="children"
        optionFilterProp="text"
        onChange={changeLang}
        firstActiveValue=""
        backfill
      >
        {Object.keys(allLang).length && Object.keys(allLang).map((item, index) =>
          <Option key={index} value={item} text={item}>
            {item}
          </Option>)
        }
      </Select>
    </div>
  );
};

export default selectLang;