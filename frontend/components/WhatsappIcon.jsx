// components/WhatsAppIcon.js
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappIcon() {
  const phoneNumber = "919999999999";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        padding: "12px",
        color: "white",
        fontSize: "20px",
        zIndex: 1000,
      }}
    >
      <FaWhatsapp />
    </a>
  );
}
