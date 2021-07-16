import { useState } from 'react';
import ReactModal from 'react-modal';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import styles from './modal.module.scss';

ReactModal.setAppElement('#__next');

export default function Modal({
  triggerText,
  content,
  tagularLocation,
  tagularPosition,
  tagularElementType,
  tagularText,
  tagularActionOutcome,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }

  return (
    <div>
      <button
        className={styles.modalTrigger}
        onClick={openModal}
        data-tagular-click='element'
        data-location={tagularLocation}
        data-element-type={tagularElementType}
        data-position={tagularPosition}
        data-text={tagularText}
        data-action-outcome={tagularActionOutcome}
      >
        <span>
          <small>{triggerText} &nbsp;&nbsp;</small>
          <SVG src={`${process.env.IMAGE_PREFIX}/icons/icon-plus.svg`} height='12' width='12' />
        </span>
      </button>
      <ReactModal
        className={styles.modal}
        overlayClassName={styles.overlay}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
      >
        <button onClick={closeModal} className={styles.closeIcon}>
          <SVG src={`${process.env.IMAGE_PREFIX}/icons/icon-close.svg`} height='24' width='24' />
        </button>
        <div
          className='rich-text'
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </ReactModal>
    </div>
  );
}

Modal.propTypes = {
  triggerText: PropTypes.string,
  content: PropTypes.any,
  tagularLocation: PropTypes.string,
  tagularElementType: PropTypes.string,
  tagularPosition: PropTypes.string,
  tagularText: PropTypes.string,
  tagularActionOutcome: PropTypes.string,
};
