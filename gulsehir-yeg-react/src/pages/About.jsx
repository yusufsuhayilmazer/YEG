export default function About() {
    return (
        <section className="container">
            <h1 className="section-title">Hakkımızda</h1>

            <div className="content-block" style={{ marginBottom: '40px' }}>
                <h2>Gülşehir Yerel Eylem Grubu Derneği</h2>
                <p>
                    IPARD III programının teknik destek tedbirine bağlı olarak Tarım ve
                    Orman Bakanlığı tarafından uygulanan LEADER Yaklaşımı yöntemleri ile
                    Gülşehir ilçesi için kurulmuştur. GÜLŞEHİRYEGDER her kesimin
                    katılımcılığını öngören, yaş ve cinsiyet çeşitliliği sağlanmış bir
                    yapıdır.
                </p>
                <br />
                <p>
                    Amacımız; yerelde tabandan tavana yönetim anlayışıyla ilçeye has Yerel
                    Kalkınma Stratejileri (YKS) hazırlayarak, yerel yönetimi geliştirmek
                    ve ilçe yönetiminde Kamu-Özel Sektör-Sivil Toplum Kuruluşları,
                    kadınlar, gençler ve dezavantajlı grupların kapasitesini arttırmaktır.
                </p>
            </div>

            <div
                className="content-block"
                style={{
                    marginBottom: '40px',
                    background: '#f9f9f9',
                    padding: '30px',
                    borderRadius: '10px',
                }}
            >
                <h2>Vizyonumuz (2030)</h2>
                <p>
                    2030 yılına gelindiğinde, YEG bölgelerindeki yaşam koşullarının
                    iyileştirilmesi; doğal kaynaklar ve bölgenin gelenekleri kullanılarak
                    tarım dışı faaliyetlerdeki gelişmeler temelinde başlayacak, artan
                    yerel gıda üretimi ile bölgesel istihdam artışı sağlanacak ve yerel
                    işletmeler-kamu kurumları ve sivil toplum kuruluşları arasındaki
                    işbirliği bölgenin ekonomik ve sosyal kalkınmasının bir parçası haline
                    gelecektir.
                </p>
                <br />
                <p>
                    <strong>Nihai hedef:</strong> Gülşehir'i tarım, turizm, kültürel ve
                    toplumsal kaynaklarıyla, kendi kendine yetebilen bir ilçe haline
                    dönüştürmektir.
                </p>
            </div>

            <div className="content-block">
                <h2>Yönetim Kurulu</h2>
                <p>
                    Derneğimiz, farklı grupların menfaatini temsil eden, kadın ve
                    gençlerin de yer aldığı katılımcı bir yönetim yapısına sahiptir.
                </p>

                <div className="member-grid">
                    {[
                        { name: "Halit CAN", role: "Başkan", image: "/images/members/halit-can.jpg" },
                        { name: "Cevdet SAYIN", role: "Başkan Yardımcısı", image: "/images/members/cevdet-sayin.jpg" },
                        { name: "Zöhdü ÇELİK", role: "Sayman", image: "/images/members/zohdu-celik.jpg" },
                        { name: "Hayriye SEVİM", role: "Sekreter", image: "/images/members/hayriye-sevim.jpg" },
                        { name: "Umut Can GÜRLEK", role: "Yönetim Kurulu Üyesi (Genç Temsilci)", image: "/images/members/umut-can.jpg" }
                    ].map((member, index) => (
                        <div key={index} className="member-card">
                            <div className="member-image">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    onError={(e) => { e.target.src = "https://placehold.co/200x200?text=" + member.name.replace(' ', '+'); }}
                                />
                            </div>
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
