import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Modal.css';

const Modal = ({ children, onClose, open, title }) => 
    open ? (ReactDOM.createPortal (
        <div className="modal" id="signupModal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" class="close" data-dismiss="modal" onClick={onClose} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div class="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    ) ) : null

export default Modal;
