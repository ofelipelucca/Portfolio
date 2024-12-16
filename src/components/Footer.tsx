import './css/Footer.css';

interface FooterProps {
    doScroll: (value: number | string) => void;
}

function Footer({doScroll}: FooterProps) {
    return (
        <div className="footer-container">
            <button onClick={() => doScroll(0)}>clica aqui pra voltar para o topo :)</button>
        </div>
    );
}

export default Footer;
