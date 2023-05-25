import React from 'react'

function ModalDeleteCartDetailAuto(props) {
  return (
    <div
    className="modal fade"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Xóa sản phẩm
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          Bạn có chắc muốn xóa sản phẩm {props.deletedName}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Thoát
          </button>
          <button
            type="button"
            className="btn btn-danger"
            data-bs-dismiss="modal"
            onClick={() => props.onCompletedDelete()}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ModalDeleteCartDetailAuto