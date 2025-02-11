import { DatePicker, Form, Input } from 'antd';
import { FC } from 'react';
import { Fields } from '../../pages/my-book/utils/settings';
import { FieldsEnum } from './fields-enum';

export const FormItem: FC<Fields> = ({
  name,
  label,
  field,
  placeholder,
  format,
  required,
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
        <DatePicker format={format} placeholder={placeholder} />
      )}
    </Form.Item>
  );
};
