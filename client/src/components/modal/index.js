import './index.css';
import closeIcon from '../../icons/closemodal.svg';

function Modal({ active, title, close, children }) {
  const activeClass = active ? "modal-wrapper -active" : "modal-wrapper";

  return (
    <div className={activeClass} onClick={() => close()}>
      <section className="modal" onClick={e => e.stopPropagation()}>
        <header className="modal__header">
          <h3 className="modal__title trail-line-modal trail-line">
            {title}
          </h3>
          <a href="#!" onClick={(e) => {
            e.preventDefault();
            close();
          }}>
            <img className="close-nav" src={closeIcon} alt="close icon"></img>
          </a>
        </header>

        <div className="modal__content">
          {children}
        </div>
      </section>
    </div>
  );
}

export default Modal;
