import { Modal as AntModal } from "antd"
import { FC, ReactNode } from "react";

interface ModalWindowProps {
  isOpen: boolean;
  // @TODO remove type any on onClose fn
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClose: any;
  children: ReactNode;
  width?: string;
  forceRender?: boolean;
  className?: string;
  title: ReactNode;
  footer: ReactNode;
}

export const Modal: FC<ModalWindowProps> = ({
  isOpen,
  onClose,
  children,
  width = "480px",
  forceRender,
  className,
  title,
  footer,
}) => (
  <AntModal
    open={isOpen}
    onClose={onClose}
    width={width}
    forceRender={forceRender}
    className={className}
    title={title}
    footer={footer}
    onCancel={onClose}
  >
    {children}
  </AntModal>
)
