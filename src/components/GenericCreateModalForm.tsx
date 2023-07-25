import { Form, Modal } from "antd";
import {Children, ReactNode, useState} from "react"



interface Values {
    title: string;
    description: string;
    modifier: string;
  }

interface CollectionCreateFormProps {
    openModel: boolean;
    onCreate?: (values: Values) => void;
    onCancelModal: (value: boolean) => void;
    onClickedButton?: (value: string) => void;
    OnOKClicked?: (value: any) => void;
    children:ReactNode;
    modelTitle: string;
    okText: string;
    CancelText: string;
    footer?: any;
  }


export const GenericModalForm: React.FC<CollectionCreateFormProps> = ({
  openModel,
  onCancelModal,
  modelTitle,
  okText,
  CancelText,
  children,
  OnOKClicked,
  footer,
  onClickedButton
}) => {
 
   const myForm = Form.useFormInstance();
    const [form] = Form.useForm();
    return (
      <Modal
        style={{minWidth: 700}}
         open={openModel}
        title= {modelTitle}
        okText={okText}
        cancelText={CancelText}
        onCancel={ ()=> onCancelModal(false)}
        onOk={ OnOKClicked}
        footer={footer}
      >
        <div>
          {children}
        
       
        </div>
  
      </Modal>
    );
  };