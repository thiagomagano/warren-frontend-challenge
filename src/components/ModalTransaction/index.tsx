import { useEffect, useState } from 'react'
import formatAmountToReal from '../../utils/formatCurrency'
import './styles.css'

const ModalTransaction = ({ show, onClose, title, to, from, amount, status }) => {
  if (!show) return null

  //Fechando Modal com a Tecla Esc
  const closeOnEscKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose()
    }
  }
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscKeyDown)
    }
  }, [])

  return (
    <div className='modal' onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title"> {title}</h2>
        </div>
        <div className="modal-body">


          <div className="stepper-wrapper">
            <div className="stepper-item completed">
              <div className="step-counter"></div>
              <div className="step-name">Solicitando</div>
            </div>
            <div className={status === 'processed' || status === 'created' ? 'stepper-item completed' : 'stepper-item active'}>
              <div className="step-counter"></div>
              <div className="step-name">Processada</div>
            </div>
            <div className={status === 'created' ? 'stepper-item completed' : 'stepper-item active'}>
              <div className="step-counter"></div>
              <div className="step-name">Concluída</div>
            </div>
          </div>


          <div className="modal-transfer-area">
            <div className="transfer-from">
              <h4 className='transfer-title'>Transferendo de:</h4>

              <div className='transfer-info'>
                <span>{from}</span>
                <span>{amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
              </div>
            </div>
            <div className="transfer-to">
              <h4 className='transfer-title'>Para:</h4>

              <div className='transfer-info'>
                <span>{to}</span>
                <span>{amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
              </div>
            </div>
          </div>
        </div>



        <button className="close-modal-button" onClick={onClose}>x</button>
      </div>
    </div>

  )
}

export default ModalTransaction;