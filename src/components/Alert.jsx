
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const showAlert = ({ onConfirm, onCancel }) => {
  confirmAlert({
    title: 'Confirm to submit',
    message: 'Are you sure you want to delete this product?',
    buttons: [
      {
        label: 'Yes',
        onClick: onConfirm
      },
      {
        label: 'No',
        onClick: onCancel
      }
    ]
  });
};

export default showAlert;
