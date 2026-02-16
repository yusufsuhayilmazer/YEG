import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col">
                        <h3>GÜLŞEHİRYEG</h3>
                        <p>Gülşehir Yerel Eylem Grubu Derneği, ilçemizin sürdürülebilir kalkınması için çalışır.</p>
                        <br />
                        <div className="social-links">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h3>Hızlı Bölümler</h3>
                        <ul>
                            <li><Link to="/">Anasayfa</Link></li>
                            <li><Link to="/about">Kurumsal</Link></li>
                            <li><Link to="/leader">LEADER Yaklaşımı</Link></li>
                            <li><Link to="/yeg-area">YEG Alanı</Link></li>
                            <li><Link to="/projects">Projeler</Link></li>
                            <li><Link to="/strategy">Strateji Belgesi</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>İletişim</h3>
                        <ul>
                            <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                                <MapPin size={16} style={{ marginTop: '4px', flexShrink: 0 }} />
                                <span>Karavezir Mah. Hoca Ahmet Yesevi Cad. No:1 Gülşehir/Nevşehir</span>
                            </li>
                            <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <Phone size={16} />
                                <span>+90 384 000 00 00</span>
                            </li>
                            <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <Mail size={16} />
                                <span>info@gulsehiryeg.org.tr</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    © 2026 Gülşehir Yerel Eylem Grubu Derneği. Tüm Hakları Saklıdır.
                </div>
            </div>
        </footer>
    );
}
