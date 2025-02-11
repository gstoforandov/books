import { Dispatch, FC, SetStateAction } from "react";
import { Modal } from "../../../../../widgets/modal/ui"
import { getSettings } from "../../../utils/settings"
import { BookModalsEnum } from "../../../model/constants";
import { Form } from "antd";
import { Footer } from "./footer";
import { useForm } from "antd/es/form/Form";
import { FormItem } from "../../../../../shared/utils/form-item";
import { Book } from "../../../model/book";

interface ModalBooksProps {
  modalType: BookModalsEnum;
  onClose: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  changeBookList: Dispatch<SetStateAction<Book[]>>
  initialState?: Book;
}

export const ModalBooks: FC<ModalBooksProps> = ({
  modalType,
  onClose,
  isOpen,
  changeBookList,
  initialState
}) => {
  const [form] = useForm()
  const settings = getSettings({
    modalType,
    changeBookList,
    initialState,
    onClose,
  });
  const handleOnClose = () => {
    onClose(false);
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleOnClose}
      width={"480px"}
      forceRender={false}
      title={settings.title}
      footer={
        <Footer
          form={form}
          onClose={handleOnClose}
          buttonText={settings.buttonText}
        />}
    >
      <Form
        form={form}
        onFinish={settings.onSubmit}
        initialValues={settings.initialState}
        layout="vertical"
      >
        {settings.fields.map((field) => (
          <FormItem key={field.name} {...field} />
        ))}
      </Form>
    </Modal>
  )
}
