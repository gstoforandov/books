import { Dispatch, FC, MouseEvent, SetStateAction } from "react";
import { Modal } from "../../../../../widgets/modal/ui"
import { getSettings } from "../../../utils/settings"
import { BookModalsEnum } from "../../../model/constants";
import { Form, TableProps } from "antd";
import { Footer } from "./footer";
import { useForm } from "antd/es/form/Form";
import { FormItem } from "../../../../../shared/utils/form-item";
import { Book } from "../../../model/book";

interface ModalBooksProps {
  modalType: BookModalsEnum;
  onClose: (event: MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
  changeBookList: Dispatch<SetStateAction<Book[]>>
}

export const ModalBooks: FC<ModalBooksProps> = ({
  modalType,
  onClose,
  isOpen,
  changeBookList,
}) => {
  const [form] = useForm()
  const settings = getSettings({ modalType, changeBookList });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      width={"480px"}
      forceRender={false}
      className={""}
      title={settings.title}

      footer={
        <Footer
          form={form}
          onClose={onClose}
          buttonText={settings.buttonText}
        />}
    >
      <Form
        form={form}
        onFinish={settings.onSubmit}
      >
        {settings.fields.map((field) => (
          <FormItem {...field} />
        ))}
      </Form>
    </Modal>
  )
}
