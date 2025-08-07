import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-icons">
                    <a href="https://github.com/jazbascunan01" target="_blank" className="footer-icon">
                        <Image className="logo git" src="/images/github.png" alt="GitHub" width={30} height={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/jazmin-bascu%C3%B1an/" target="_blank" className="footer-icon">
                        <Image className="logo" src="/images/linkedin.png" alt="LinkedIn" width={30} height={30} />
                    </a>
                    <a href="mailto:jazbascunan01@gmail.com" className="footer-icon">
                        <Image className="logo" src="/images/gmail.png" alt="Email" width={30} height={30} />
                    </a>
                    <a href="https://wa.me/5492262353733" target="_blank" className="footer-icon">
                        <Image className="logo whatsapp" src="/images/image (42).png" alt="WhatsApp" width={30} height={30} />
                    </a>
                </div>
                <div className="back-to-top">
                    <a href="#inicio" id="scrollToTop"><Image src="/images/flecha.png" alt="Volver Arriba" width={60} height={60} /></a>
                </div>
            </div>
        </footer>
    );
}