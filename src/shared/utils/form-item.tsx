import { DatePicker, Form, Input } from 'antd';
import { FC } from 'react';
import { Fields } from '../model/type';
import { FieldsEnum } from './fields-enum';

export const FormItem: FC<Fields> = ({
  name,
  label,
  field,
  placeholder,
  format,
  required,
  picker,
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      className='form-item-container'
      rules={[
        {
          required: required,
          message: 'Обязательное поле',
        },
      ]}
    >
      {field === FieldsEnum.INPUT && <Input placeholder={placeholder} />}
      {field === FieldsEnum.DATE && (
        <DatePicker format={format} picker={picker} placeholder={placeholder} />
      )}
    </Form.Item>
  );
};
