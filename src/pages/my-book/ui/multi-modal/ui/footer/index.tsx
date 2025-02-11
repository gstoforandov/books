import { Button, FormInstance } from 'antd';
import { FC } from 'react';

interface FooterProps {
  buttonText: string;
  onClose: () => void;
  form: FormInstance;
}
export const Footer: FC<FooterProps> = ({ buttonText, onClose, form }) => {
  return (
    <>
      <Button onClick={onClose} size='middle'>
        Cancel
      </Button>
      <Button
        htmlType='submit'
        onClick={() => form.submit()}
        type='primary'
        size='middle'
      >
        {buttonText}
      </Button>
    </>
  );
};
