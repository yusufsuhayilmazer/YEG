export default function Contact() {
    return (
        <>
            <section
                className="hero"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://placehold.co/1920x1080/2c3e50/ffffff?text=Iletisim')",
                    height: '40vh',
                }}
            >
                <div className="container">
                    <h1>İletişim</h1>
                    <p>Bizimle iletişime geçin</p>
                </div>
            </section>

            <section className="container">
                <h2 className="section-title">Bize Ulaşın</h2>
                <div className="about-content">
                    <div className="about-text">
                        <h3>İletişim Bilgileri</h3>
                        <p style={{ marginTop: '20px' }}>
                            <strong>Adres:</strong>
                            <br />
                            Karavezir Mah. Hoca Ahmet Yesevi Cad. No:1
                            <br />
                            Gülşehir/Nevşehir
                        </p>
                        <p style={{ marginTop: '20px' }}>
                            <strong>Telefon:</strong>
                            <br />
                            +90 384 000 00 00
                        </p>
                        <p style={{ marginTop: '20px' }}>
                            <strong>E-posta:</strong>
                            <br />
                            info@gulsehiryeg.org.tr
                        </p>
                    </div>
                    <div className="about-image">
                        <img
                            src="https://placehold.co/600x400?text=Ofis"
                            alt="Ofis"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
