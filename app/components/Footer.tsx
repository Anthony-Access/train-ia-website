"use client";

export default function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <span className="logo-text">Train-IA</span>
                    <p className="footer-desc">L'excellence opérationnelle par l'IA.</p>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h4>Contact</h4>
                        <a href="mailto:contact@train-ia.com">contact@train-ia.com</a>
                        <a href="tel:+33123456789">+33 1 23 45 67 89</a>
                    </div>

                    <div className="link-group">
                        <h4>Social</h4>
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Train-IA. Tous droits réservés.</p>
                </div>
            </div>

            <style jsx>{`
        .footer {
          background: #050505;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 4rem;
          margin-top: 4rem;
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }
        
        .footer-desc {
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.5rem;
        }
        
        .footer-links {
          display: flex;
          gap: 4rem;
        }
        
        .link-group h4 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: white;
        }
        
        .link-group a {
          display: block;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0.5rem;
          transition: color 0.2s;
        }
        
        .link-group a:hover {
          color: var(--primary);
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2rem 0;
          text-align: center;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.9rem;
        }
      `}</style>
        </footer>
    );
}
