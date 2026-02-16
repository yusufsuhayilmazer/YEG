export default function Strategy() {
    return (
        <>
            <section
                className="hero"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://placehold.co/1920x1080/2c3e50/ffffff?text=Strateji')",
                    height: '40vh',
                }}
            >
                <div className="container">
                    <h1>Yerel Kalkınma Stratejimiz</h1>
                    <p>Gülşehir'in geleceği için yol haritamız</p>
                </div>
            </section>

            <section className="container">
                <h2 className="section-title">Stratejimiz (YKS)</h2>
                <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
                    Yerel Kalkınma Stratejimiz, Gülşehir'in potansiyelini ortaya çıkarmak
                    ve sürdürülebilir kalkınmayı sağlamak için hazırlanmıştır.
                </p>

                <div className="about-content">
                    <div className="about-text">
                        <h3>Stratejik Hedeflerimiz</h3>
                        <ul
                            style={{
                                listStyleType: 'disc',
                                marginLeft: '20px',
                                marginTop: '20px',
                                lineHeight: '1.8',
                            }}
                        >
                            <li>Tarımsal üretimde katma değeri artırmak</li>
                            <li>Kırsal turizmi geliştirmek</li>
                            <li>Yerel girişimciliği desteklemek</li>
                            <li>Sosyal ve kültürel altyapıyı güçlendirmek</li>
                            <li>Çevresel sürdürülebilirliği sağlamak</li>
                        </ul>
                    </div>
                    <div className="about-image">
                        <img
                            src="https://placehold.co/600x400?text=Strateji+Belgesi"
                            alt="Strateji"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
