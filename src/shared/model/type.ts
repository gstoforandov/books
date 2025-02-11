import { PickerProps } from 'antd/es/date-picker/generatePicker';
import { FieldsEnum } from '../utils';

export interface Fields {
  name: string;
  label?: string;
  required?: boolean;
  format?: string;
  field: FieldsEnum;
  placeholder?: string;
  picker?: PickerProps['picker'];
}
