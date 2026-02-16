export default function District() {
    return (
        <>
            <section
                className="hero"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://placehold.co/1920x1080/2c3e50/ffffff?text=Gulsehir')",
                    height: '40vh',
                }}
            >
                <div className="container">
                    <h1>Gülşehir</h1>
                    <p>Kapadokya'nın İncisi</p>
                </div>
            </section>

            <section className="container">
                <h2 className="section-title">Gülşehir Hakkında</h2>
                <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
                    Gülşehir, Nevşehir'in en eski ilçelerinden biridir. Kızılırmak kıyısında
                    yer alan ilçemiz, tarihi ve doğal güzellikleriyle dikkat çeker.
                </p>

                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Tarih</h3>
                        <p>
                            Antik çağlardan bu yana önemli bir yerleşim merkezi olan Gülşehir,
                            zengin bir tarihi mirasa sahiptir.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3>Kültür</h3>
                        <p>
                            Açıksaray, St. Jean Kilisesi gibi tarihi yapılar ve yerel
                            gelenekler kültürel zenginliğimizi oluşturur.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3>Doğa</h3>
                        <p>
                            Kızılırmak vadisi, Hırka Dağı ve peribacaları doğal güzelliklerimiz
                            arasındadır.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3>Ekonomi</h3>
                        <p>
                            Tarım, hayvancılık ve turizm ilçemizin temel ekonomik
                            faaliyetleridir.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
