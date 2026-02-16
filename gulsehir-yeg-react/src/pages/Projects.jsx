export default function Projects() {
    return (
        <>
            <section
                className="hero"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://placehold.co/1920x1080/2c3e50/ffffff?text=Projeler')",
                    height: '40vh',
                }}
            >
                <div className="container">
                    <h1>Projelerimiz</h1>
                    <p>Gülşehir için hayata geçirdiğimiz projeler</p>
                </div>
            </section>

            <section className="container">
                <h2 className="section-title">Desteklenen Projeler</h2>
                <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
                    LEADER Yaklaşımı kapsamında desteklenen projeler, yerel kalkınmaya
                    katkı sağlamak amacıyla hayata geçirilmektedir.
                </p>

                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Tarımsal Projeler</h3>
                        <p>
                            Yerel üreticilerin desteklenmesi, modern tarım tekniklerinin
                            yaygınlaştırılması.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3>Turizm Projeleri</h3>
                        <p>
                            Kırsal turizmin geliştirilmesi, yerel değerlerin tanıtılması.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3>Sosyal Projeler</h3>
                        <p>
                            Kadın ve genç girişimciliğinin desteklenmesi, eğitim programları.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3>Altyapı Projeleri</h3>
                        <p>
                            Kırsal altyapının iyileştirilmesi, ortak kullanım alanlarının
                            geliştirilmesi.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
