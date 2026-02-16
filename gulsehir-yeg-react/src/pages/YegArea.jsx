export default function YegArea() {
    return (
        <>
            <section
                className="hero"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/image10.jpeg')",
                }}
            >
                <div className="container">
                    <h1>YEG Alanının Genel Yapısı</h1>
                    <p>Gülşehir'in coğrafi, demografik ve ekonomik profili</p>
                </div>
            </section>

            <section className="container" style={{ padding: '60px 20px' }}>
                <div className="content-block" id="general-structure">
                    <h2 className="section-title">Genel Yapı</h2>
                    <div className="about-content" style={{ alignItems: 'flex-start' }}>
                        <div className="about-text">
                            <p>
                                Gülşehir Nevşehir'in en eski ilçelerinden olup, eski çağlardan
                                bu güne önemini korumuştur. Doğusunda Nevşehir şehir merkezi ve
                                Avanos ilçesi, batısında Aksaray Ortaköy, kuzeyinde Hacıbektaş
                                ve güneyinde Acıgöl İlçeleri bulunmaktadır. Gülşehir ilçesi,
                                ortalama 906 - 1200 m. yükseltide bir platodur.
                            </p>
                            <br />
                            <p>
                                <strong>Yerleşim Alanı:</strong> Gülşehir ilçesinde toplu
                                yerleşme şekli hakimdir. Genellikle tarım alanlarının boş
                                bırakılması, suyun az olması nedeniyle suya bağımlılık ve relief
                                şartları toplu yerleşmelere neden olmuştur. Evler genellikle bir
                                cami ve çeşme etrafında kümelenmiştir.
                            </p>
                        </div>
                        <div className="about-image">
                            <img
                                src="/images/image7.jpeg"
                                alt="Gülşehir Haritası"
                                style={{
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                }}
                            />
                            <small
                                style={{
                                    display: 'block',
                                    textAlign: 'center',
                                    marginTop: '5px',
                                    color: '#666',
                                }}
                            >
                                Harita 1. Gülşehir Haritası
                            </small>
                        </div>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: 0, borderTop: '1px solid #eee' }} />

                <div className="content-block" id="population">
                    <h2 className="section-title">Nüfus Profili</h2>
                    <p>
                        <strong>2024 Yılı Verileri:</strong>
                    </p>
                    <div
                        className="features-grid"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            marginTop: '20px',
                            textAlign: 'center',
                        }}
                    >
                        <div className="feature-card" style={{ padding: '20px' }}>
                            <div style={{ fontSize: '2em', marginBottom: '10px' }}>👥</div>
                            <h3>21.378</h3>
                            <p>Toplam Nüfus</p>
                        </div>
                        <div className="feature-card" style={{ padding: '20px' }}>
                            <div style={{ fontSize: '2em', marginBottom: '10px' }}>🏙️</div>
                            <h3>12.504</h3>
                            <p>İlçe Merkez Nüfusu</p>
                        </div>
                        <div className="feature-card" style={{ padding: '20px' }}>
                            <div style={{ fontSize: '2em', marginBottom: '10px' }}>🚜</div>
                            <h3>8.874</h3>
                            <p>Belde/Köy Nüfusu</p>
                        </div>
                    </div>
                    <p style={{ marginTop: '20px' }}>
                        İlçe nüfusunun %50,8'i erkek, %49,2'si kadındır. Yaz aylarında nüfus
                        artışı görülmekle birlikte, kış aylarında eğitim ve iş olanakları
                        nedeniyle azalma gözlenmektedir.
                    </p>
                </div>
            </section>
        </>
    );
}
