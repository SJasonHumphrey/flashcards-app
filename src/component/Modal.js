import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const ModalInput = props => {
    const card = props.activeCard;
    const toggleModal = props.toggleModal;
    const deleteCards = props.deleteCards;

    const cancel = () => {
        toggleModal(false);
    };

    const confirm = () => {
        toggleModal(false);
        deleteCards();
    };

    return (
        <Modal>
        <div onClick={() => toggleModal(false)} className="confirm-modal d-flex justify-content-center align-items-center">
            <div onClick={e => e.stopPropagation()} className="modal-content text-center p-4">
                <h5 className="font-weight-bold">Are you sure you want to delete this card?</h5>
                <span><span className="font-weight-bold">{'Q: '}</span>{card.question}</span>
                <span><span className="font-weight-bold">{'A: '}</span>{card.answer}</span>
                <div className="d-flex justify-content-end mt-3">
                    <button type="button" onClick={cancel} className="btn btn-outline-danger mr-2">Cancel</button>
                    <button type="button" onClick={confirm} className="btn btn-outline-success">Confirm</button>
                </div>
            </div>
        </div>
    </Modal>
    );
};

export default ModalInput;