import React from 'react';
import ReactDOM from 'react-dom'

const Modal = ({ children, onClose, open }) => 
    open ? (ReactDOM.createPortal (
        <div className="modal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>{children}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" className="btn btn-primary">Save changes</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
    </div>,
        document.getElementById('modal')
    ) ) : null

export default Modal;
