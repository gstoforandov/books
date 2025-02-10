import { Button, FormInstance } from "antd";
import useFormInstance from "antd/es/form/hooks/useFormInstance";
import { FC, MouseEvent } from "react";

interface FooterProps {
  buttonText: string;
  onClose: (event: MouseEvent<HTMLButtonElement>) => void;
  form: FormInstance;
}
export const Footer: FC<FooterProps> = ({
  buttonText,
  onClose,
  form,
}) => {
  return (
    <>
      <Button
        onClick={onClose}
      >
        Отменить
      </Button>
      <Button
        htmlType="submit"
        onClick={() => form.submit()}
      >
        {buttonText}
      </Button>
    </>
  )
}