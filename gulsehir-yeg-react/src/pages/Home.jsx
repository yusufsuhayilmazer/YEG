import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <section
                className="hero"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://placehold.co/1920x1080/2c3e50/ffffff?text=Gulsehir+Kapadokya')",
                }}
            >
                <div className="container">
                    <h1>Gülşehir Yerel Eylem Grubu Derneği</h1>
                    <p>
                        Yerel Kalkınma, Ortak Gelecek. Kapadokya'nın kalbinde, Gülşehir
                        için birlikte çalışıyoruz.
                    </p>
                    <div>
                        <Link to="/strategy" className="btn">
                            Stratejimiz
                        </Link>
                        <Link to="/projects" className="btn btn-outline">
                            Projelerimiz
                        </Link>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                            Hoşgeldiniz
                        </h2>
                        <p>
                            Gülşehir İlçesi İç Anadolu Bölgesinin ortasında Kapadokya yöresi
                            sınırları içerisindedir. Çok eski bir yerleşim yeri olup, zengin
                            tarihi ve kültürel mirasa sahiptir. Kızılırmak kıyı şeridinde yer
                            alan ilçemiz, tarımsal üretim potansiyeli ve turizm değerleri ile
                            bölgenin parlayan yıldızıdır.
                        </p>
                        <br />
                        <p>
                            IPARD III programının teknik destek tedbirine bağlı olarak Tarım
                            ve Orman Bakanlığı tarafından uygulanan LEADER Yaklaşımı
                            kapsamında kurulan{' '}
                            <strong>
                                Gülşehir Yerel Eylem Grubu Derneği (GÜLŞEHİRYEGDER)
                            </strong>
                            , ilçemizin kalkınması için kamu, sivil toplum ve özel sektörü bir
                            araya getirmektedir.
                        </p>
                        <br />
                        <Link to="/about" className="btn">
                            Derneğimiz Hakkında
                        </Link>
                    </div>
                    <div className="about-image">
                        <img
                            src="https://placehold.co/600x400?text=Gulsehir+Toplanti"
                            alt="Gülşehir YEG Toplantısı"
                        />
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <h2 className="section-title">Odak Alanlarımız</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🚜</div>
                            <h3>Tarımsal Kalkınma</h3>
                            <p>
                                Üzüm, şekerpancarı ve diğer ürünlerin katma değerini artıracak
                                projeler.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🗺️</div>
                            <h3>Kırsal Turizm</h3>
                            <p>
                                Açıksaray, Kızılırmak ve yerel değerlerin turizme
                                kazandırılması.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">👥</div>
                            <h3>Sosyal Gelişim</h3>
                            <p>
                                Kadınlar, gençler ve tüm toplum kesimleri için eğitim ve sosyal
                                projeler.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🤝</div>
                            <h3>LEADER Yaklaşımı</h3>
                            <p>
                                Yerel sorunlara yerel çözümler üreten katılımcı yönetim modeli.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                style={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'var(--white)',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <h2 style={{ color: 'var(--white)' }}>Gülşehir İçin Birlikteyiz</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto 30px' }}>
                        "Nihai hedef, Gülşehir'i tarım, turizm, kültürel ve toplumsal
                        kaynaklarıyla, kendi kendine yetebilen bir ilçe haline
                        dönüştürmektir."
                    </p>
                    <Link
                        to="/contact"
                        className="btn"
                        style={{
                            backgroundColor: 'var(--white)',
                            color: 'var(--primary-color)',
                        }}
                    >
                        Bize Katılın
                    </Link>
                </div>
            </section>
        </>
    );
}
