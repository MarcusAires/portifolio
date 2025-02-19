export default function Hamburger({ isOpen, toggle }) {
    return (
      <>
        <div className="hamburger" onClick={toggle}>
          <div className={`bar ${isOpen ? "open1" : ""}`} />
          <div className={`bar ${isOpen ? "open2" : ""}`} />
          <div className={`bar ${isOpen ? "open3" : ""}`} />
        </div>
  
        <style jsx>{`
          .hamburger {
            width: 40px;
            height: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
            z-index: 9999;
          }
  
          .bar {
            width: 100%;
            height: 5px;
            background-color: white; /* Agora sempre branco */
            border-radius: 5px;
            transition: all 0.3s ease-in-out;
          }
  
          .open1 {
            transform: rotate(45deg) translate(6px, 6px);
          }
  
          .open2 {
            opacity: 0;
          }
  
          .open3 {
            transform: rotate(-45deg) translate(6px, -6px);
          }
        `}</style>
      </>
    );
  }
  