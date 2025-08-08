import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./rodape.css";

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="redes-sociais">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaTwitter /></a>
      </div>
      <p>📍 Rua Fictícia, 123 - Bairro Imaginário - Cidade de Deus</p>
      <p>© 2025 <strong>Mamamia Massas</strong> — Servindo massas há mais de 70 anos</p>
    </footer>
  );
}
