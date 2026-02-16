export default function Leader() {
    return (
        <>
            <section
                className="hero"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/image2.png')",
                }}
            >
                <div className="container">
                    <h1>LEADER Yaklaşımı</h1>
                    <p>Yerel Kalkınma Stratejisi ve GÜLŞEHİRYEGDER'in Rolü</p>
                </div>
            </section>

            <section className="container" style={{ padding: '60px 20px' }}>
                <div className="about-content">
                    <div className="about-text" style={{ width: '100%' }}>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>
                            LEADER Yaklaşımı Nedir?
                        </h2>
                        <p>
                            IPARD III programının teknik destek tedbirine bağlı olarak Tarım
                            ve Orman Bakanlığı tarafından uygulanan LEADER Yaklaşımı, Avrupa
                            Birliği Kırsal Kalkınma Politikası'nın temel taşlarından biridir.
                            Gülşehir ilçesi için, Tarım ve Orman Bakanlığı ve Avrupa Birliği
                            ortak çalışması olan LEADER Tedbiri kapsamında, ilçenin gelecekte
                            önemli bir değeri olacak olan{' '}
                            <strong>Gülşehir Yerel Eylem Grubu Derneği</strong> kurulmuştur.
                        </p>
                        <br />
                        <p>
                            GÜLŞEHİRYEGDER, her kesimin katılımcılığını öngören, yaş ve
                            cinsiyet çeşitliliği sağlanmış bir yapıdadır. Derneğimiz, yerel
                            kalkınmanın sadece ekonomik değil, aynı zamanda sosyal ve kültürel
                            boyutlarını da kapsayan bütüncül bir yaklaşımı benimsemektedir.
                        </p>

                        <h3
                            style={{
                                marginTop: '30px',
                                marginBottom: '20px',
                                color: 'var(--primary-color)',
                            }}
                        >
                            Tabandan Tavana Yönetim
                        </h3>
                        <p>
                            LEADER Tedbiri Yaklaşımı, yerelde{' '}
                            <strong>"tabandan tavana"</strong> yönetim anlayışıyla hareket
                            eder. Bu yaklaşım:
                        </p>
                        <ul
                            style={{
                                listStyleType: 'disc',
                                marginLeft: '20px',
                                marginTop: '10px',
                                lineHeight: '1.8',
                            }}
                        >
                            <li>
                                İlçeye has <strong>Yerel Kalkınma Stratejileri (YKS)</strong>{' '}
                                hazırlamayı,
                            </li>
                            <li>Yerel yönetimi geliştirmeyi,</li>
                            <li>
                                İlçe yönetiminde Kamu, Özel Sektör ve Sivil Toplum Kuruluşları
                                işbirliğini güçlendirmeyi,
                            </li>
                            <li>
                                Kadınlar, gençler ve dezavantajlı grupların kapasitesini
                                arttırmayı amaçlar.
                            </li>
                        </ul>

                        <h3
                            style={{
                                marginTop: '30px',
                                marginBottom: '20px',
                                color: 'var(--primary-color)',
                            }}
                        >
                            Katılımcı Süreç
                        </h3>
                        <p>
                            GÜLŞEHİRYEGDER olarak YKS sürecinde sektör ve mahalle odaklı
                            toplantılar düzenledik. Bu toplantılarda bölge insanının istek,
                            beklenti ve sorunlarını doğrudan gözlemleme fırsatı bulduk.
                            Hazırladığımız Yerel Kalkınma Stratejimiz, ilçede bulunan tüm
                            paydaşlarımız tarafından desteklenmiş ve çalışma grubumuz
                            tarafından bu doğrultuda titizlikle hazırlanmıştır.
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                    <img
                        src="/images/image5.png"
                        alt="LEADER Yaklaşımı Diyagramı"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        }}
                    />
                    <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#666' }}>
                        Yerel Eylem Grubu Yapılanması ve Paydaş Etkileşimi
                    </p>
                </div>
            </section>
        </>
    );
}
