import { DatePicker, Form, Input } from "antd";
import { Fields } from "../../pages/my-book/utils/settings";
import { FC } from "react";
import { FieldsEnum } from "./fields-enum";

export const FormItem: FC<Fields> = ({
  name,
  label,
  field,
  placeholder,
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
    >
      {(field === FieldsEnum.INPUT)
        && <Input placeholder={placeholder} />
      }
      {field === FieldsEnum.DATE
        && <DatePicker placeholder={placeholder} />}
    </Form.Item>
  )
}