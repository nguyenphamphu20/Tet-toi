import { FormEvent, useState } from "react"

type IconName = "arrow" | "basket" | "cart" | "check" | "chevron" | "clock" | "close" | "facebook" | "gift" | "instagram" | "mail" | "menu" | "phone" | "search" | "shipping"

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    basket: (
      <>
        <path d="M5 10h14l-1.5 9h-11L5 10Z" />
        <path d="m8 10 4-6 4 6M8 14v2m4-2v2m4-2v2" />
      </>
    ),
    cart: (
      <>
        <path d="M3 4h2l2.2 10.5h9.8l2-7H6" />
        <circle cx="9" cy="19" r="1.2" />
        <circle cx="17" cy="19" r="1.2" />
      </>
    ),
    check: (
      <>
        <path d="m5 12 4 4L19 6" />
      </>
    ),
    chevron: (
      <>
        <path d="m7 10 5 5 5-5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    close: (
      <>
        <path d="M6 6l12 12M18 6 6 18" />
      </>
    ),
    facebook: (
      <>
        <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z" />
      </>
    ),
    gift: (
      <>
        <path d="M4 10h16v11H4zM3 6h18v4H3zM12 6v15" />
        <path d="M12 6H8.5C6 6 6 2 8.5 3 10 3.5 12 6 12 6Zm0 0h3.5C18 6 18 2 15.5 3 14 3.5 12 6 12 6Z" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    phone: (
      <>
        <path d="M8 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-3l-5-1-1.5 2.5a14 14 0 0 1-8-8L9 8 8 3Z" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    shipping: (
      <>
        <path d="M3 6h11v11H3zM14 10h4l3 4v3h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const giftPhotos = [
  "https://images.unsplash.com/photo-1707418839722-9a91df12c752?auto=format&fit=crop&w=900&q=86",
  "https://images.unsplash.com/photo-1695916106317-87cfb79fb25f?auto=format&fit=crop&w=900&q=86",
  "https://images.unsplash.com/photo-1693165236989-14258ea3eb3b?auto=format&fit=crop&w=900&q=86",
]
const sodaPhotos = [
  "https://images.unsplash.com/photo-1689910138858-5282476bf656?auto=format&fit=crop&w=900&q=86",
  "https://images.unsplash.com/photo-1598038990523-32bcaa29f679?auto=format&fit=crop&w=900&q=86",
  "https://images.unsplash.com/photo-1763074847615-81748f08cea2?auto=format&fit=crop&w=900&q=86",
]

const products = [
  {
    name: "Giỏ Phúc Lộc",
    desc: "Hạt dinh dưỡng, trà sen & bánh thủ công",
    price: "1.290.000đ",
    old: "",
    tag: "Best seller",
    image: giftPhotos[0],
  },
  {
    name: "Giỏ An Khang",
    desc: "Trà thượng hạng, mứt Tết & đặc sản Việt",
    price: "1.590.000đ",
    old: "1.790.000đ",
    tag: "-12%",
    image: giftPhotos[1],
  },
  {
    name: "Hộp Vạn Sự Như Ý",
    desc: "Thiết kế sơn mài đỏ, tuyển chọn cao cấp",
    price: "2.190.000đ",
    old: "",
    tag: "Mới",
    image: giftPhotos[2],
  },
  {
    name: "Thùng Coca-Cola Tết",
    desc: "24 lon x 320ml, phiên bản đón xuân",
    price: "219.000đ",
    old: "259.000đ",
    tag: "-15%",
    image: sodaPhotos[0],
  },
  {
    name: "Combo Soda Premium",
    desc: "12 lon tuyển chọn, vị nguyên bản",
    price: "329.000đ",
    old: "",
    tag: "Mới",
    image: sodaPhotos[1],
  },
  {
    name: "Lộc Xuân Đủ Vị",
    desc: "Sprite, trà xanh & nước yến cao cấp",
    price: "389.000đ",
    old: "489.000đ",
    tag: "-20%",
    image: sodaPhotos[2],
  },
]

const reviews = [
  {
    name: "Chị Minh Anh",
    role: "Khách hàng tại Hà Nội",
    quote:
      "Giỏ quà sang trọng, đóng gói rất chỉn chu. Bố mẹ mình nhận quà cực kỳ ưng ý.",
    initials: "MA",
  },
  {
    name: "Anh Quốc Huy",
    role: "Khách hàng doanh nghiệp",
    quote:
      "Đội ngũ tư vấn nhanh, thiệp in theo thương hiệu đẹp. 120 phần quà đều giao đúng hẹn.",
    initials: "QH",
  },
  {
    name: "Cô Thanh Hà",
    role: "Khách hàng tại TP.HCM",
    quote:
      "Sản phẩm đúng như hình, giao trong hai giờ. Tôi sẽ tiếp tục ủng hộ vào Tết năm sau.",
    initials: "TH",
  },
]

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Tết Sum Vầy - Trang chủ">
      <span className="logo-mark">
        <Icon name="basket" size={25} />
      </span>
      <span>
        <strong>Tết Sum Vầy</strong>
        <small>Trao quà, trao yêu thương</small>
      </span>
    </a>
  )
}

function ProductCard({
  product,
  onAdd,
}: {
  product: typeof products[number]
  onAdd: () => void
}) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className={`tag ${product.tag === "Mới" ? "green" : ""}`}>
          {product.tag}
        </span>
        <button
          className="quick-add"
          onClick={onAdd}
          aria-label={`Thêm nhanh ${product.name}`}
        >
          <Icon name="cart" />
        </button>
      </div>
      <div className="product-content">
        <div className="stars" aria-label="5 trên 5 sao">
          ★★★★★ <span>(24)</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <div className="price-row">
          <strong>{product.price}</strong>
          {product.old && <del>{product.old}</del>}
        </div>
        <button className="btn btn-outline product-button" onClick={onAdd}>
          <Icon name="cart" /> Thêm vào giỏ
        </button>
      </div>
    </article>
  )
}

function App() {
  const [cartCount, setCartCount] = useState(2)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [openFooter, setOpenFooter] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const addToCart = () => setCartCount((count) => count + 1)
  const submitQuote = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }
  const closeMenu = () => setMenuOpen(false)

  return (
    <div id="top">
      <div className="announcement">
        <span>Ưu đãi sớm Tết 2025</span>
        <p>Miễn phí giao hàng cho đơn từ 500.000đ</p>
        <a href="#products">
          Mua ngay <Icon name="arrow" size={16} />
        </a>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Logo />
          <nav
            className={`nav ${menuOpen ? "open" : ""}`}
            aria-label="Điều hướng chính"
          >
            <a href="#top" onClick={closeMenu}>
              Trang chủ
            </a>
            <a href="#products" onClick={closeMenu}>
              Giỏ quà Tết
            </a>
            <a href="#drinks" onClick={closeMenu}>
              Nước ngọt
            </a>
            <a href="#combos" onClick={closeMenu}>
              Combo tiết kiệm
            </a>
            <a href="#contact" onClick={closeMenu}>
              Liên hệ
            </a>
            <a className="mobile-order" href="#products" onClick={closeMenu}>
              Đặt ngay
            </a>
          </nav>
          <div className="header-actions">
            {searchOpen && (
              <input
                className="search-input"
                autoFocus
                aria-label="Tìm kiếm sản phẩm"
                placeholder="Tìm quà Tết..."
              />
            )}
            <button
              className="icon-btn search-button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Tìm kiếm"
            >
              <Icon name="search" />
            </button>
            <button
              className="icon-btn cart-button"
              aria-label={`Giỏ hàng có ${cartCount} sản phẩm`}
            >
              <Icon name="cart" />
              <span>{cartCount}</span>
            </button>
            <a className="btn btn-primary header-cta" href="#products">
              Đặt ngay <Icon name="arrow" size={17} />
            </a>
            <button
              className="icon-btn menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            >
              <Icon name={menuOpen ? "close" : "menu"} size={23} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="pattern" aria-hidden="true" />
          <span className="blossom b1">✦</span>
          <span className="blossom b2">✦</span>
          <span className="blossom b3">✦</span>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow light">
                <span /> Tết sum vầy · Quà trao tay
              </div>
              <h1>
                Giỏ Quà Tết
                <br />
                <em>Trao Trọn Yêu Thương</em>
              </h1>
              <p>
                Gói trọn tinh hoa ngày Tết trong từng món quà được tuyển chọn,
                để mỗi cuộc gặp gỡ thêm ấm áp và đủ đầy.
              </p>
              <div className="hero-actions">
                <a className="btn btn-gold" href="#products">
                  Mua giỏ quà <Icon name="arrow" />
                </a>
                <a className="btn btn-light" href="#drinks">
                  Xem nước ngọt
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-photo-ring">
                <img
                  src={giftPhotos[0]}
                  alt="Giỏ quà Tết cao cấp với nhiều đặc sản được tuyển chọn"
                />
              </div>
              <div className="floating-note note-top">
                <span>Quà Tết</span>
                <strong>Tuyển chọn thủ công</strong>
              </div>
              <div className="floating-note note-bottom">
                <Icon name="gift" />
                <span>
                  <small>Tặng kèm</small>
                  <strong>Thiệp chúc Tết</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="container benefit-bar">
            <div>
              <span className="benefit-icon">
                <Icon name="shipping" />
              </span>
              <p>
                <strong>Miễn phí giao hàng</strong>
                <small>Cho đơn từ 500.000đ</small>
              </p>
            </div>
            <div>
              <span className="benefit-icon">
                <Icon name="gift" />
              </span>
              <p>
                <strong>Tặng thiệp viết tay</strong>
                <small>Gửi trọn lời chúc Tết</small>
              </p>
            </div>
            <div>
              <span className="benefit-icon">
                <Icon name="clock" />
              </span>
              <p>
                <strong>Giao nhanh trong 2h</strong>
                <small>Khu vực nội thành</small>
              </p>
            </div>
          </div>
        </section>

        <section className="section collection" id="products">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  <span /> Tinh hoa quà Việt
                </div>
                <h2>Bộ Sưu Tập Tết 2025</h2>
              </div>
              <p>
                Mỗi món quà là một lời chúc năm mới được tuyển chọn và gói ghém
                bằng cả sự tinh tế.
              </p>
            </div>
            <div className="filter-row" aria-label="Lọc sản phẩm">
              <button className="active">Tất cả</button>
              <button>Giỏ quà Tết</button>
              <button>Nước ngọt</button>
              <button>Quà doanh nghiệp</button>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  onAdd={addToCart}
                />
              ))}
            </div>
            <div className="center">
              <button className="btn btn-primary">
                Xem toàn bộ sản phẩm <Icon name="arrow" />
              </button>
            </div>
          </div>
        </section>

        <section className="combo-section" id="combos">
          <div className="container">
            <div className="combo-title">
              <div className="eyebrow">
                <span /> Ưu đãi đặc biệt
              </div>
              <h2>Combo Giỏ Quà + Nước Ngọt</h2>
              <p>
                Trọn vị Tết, tiết kiệm đến <strong>25%</strong>
              </p>
            </div>
            <div className="combo-scroll">
              <article className="combo-card">
                <div className="combo-image">
                  <img src={giftPhotos[1]} alt="Combo Đoàn Viên" />
                  <span>-20%</span>
                </div>
                <div className="combo-copy">
                  <small>Combo gia đình</small>
                  <h3>Đoàn Viên</h3>
                  <p>Giỏ An Khang + Thùng nước ngọt 24 lon</p>
                  <div>
                    <strong>1.590.000đ</strong>
                    <del>1.990.000đ</del>
                  </div>
                  <button onClick={addToCart} className="btn btn-primary">
                    Chọn combo <Icon name="arrow" />
                  </button>
                </div>
              </article>
              <article className="combo-card">
                <div className="combo-image">
                  <img src={giftPhotos[2]} alt="Combo Thịnh Vượng" />
                  <span>-25%</span>
                </div>
                <div className="combo-copy">
                  <small>Combo cao cấp</small>
                  <h3>Thịnh Vượng</h3>
                  <p>Hộp Như Ý + Soda premium đủ vị</p>
                  <div>
                    <strong>2.490.000đ</strong>
                    <del>3.320.000đ</del>
                  </div>
                  <button onClick={addToCart} className="btn btn-primary">
                    Chọn combo <Icon name="arrow" />
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section drinks" id="drinks">
          <div className="container drink-grid">
            <div className="drink-visual">
              <div className="drink-main">
                <img
                  src={sodaPhotos[2]}
                  alt="Các loại nước ngọt nội địa và nhập khẩu"
                />
              </div>
              <div className="drink-small">
                <img src={sodaPhotos[0]} alt="Lon nước ngọt phiên bản Tết" />
              </div>
              <span className="drink-seal">
                5
                <small>
                  thương hiệu
                  <br />
                  nổi bật
                </small>
              </span>
            </div>
            <div className="drink-copy">
              <div className="eyebrow">
                <span /> Nâng vị cuộc vui
              </div>
              <h2>
                Nước Ngọt
                <br />
                Nhập Khẩu & Nội Địa
              </h2>
              <p>
                Từ hương vị quen thuộc đến những lựa chọn mới mẻ, sẵn sàng làm
                đầy bàn tiệc và kết nối mọi cuộc sum vầy.
              </p>
              <ul>
                {[
                  "Coca-Cola & Pepsi phiên bản Tết",
                  "Sprite & 7Up thanh mát",
                  "Trà xanh thiên nhiên",
                  "Nước yến cao cấp",
                  "Soda nhập khẩu đủ vị",
                ].map((item) => (
                  <li key={item}>
                    <span>
                      <Icon name="check" size={16} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a className="btn btn-primary" href="#products">
                Xem tất cả <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="business" id="contact">
          <div className="container business-grid">
            <div className="business-copy">
              <div className="eyebrow light">
                <span /> Dành cho doanh nghiệp
              </div>
              <h2>
                Quà Tết tinh tế,
                <br />
                ghi dấu thương hiệu
              </h2>
              <p>
                Giải pháp quà tặng được cá nhân hóa theo ngân sách, kèm thiệp,
                logo và dịch vụ giao hàng tận nơi.
              </p>
              <div className="business-benefits">
                <span>
                  <Icon name="check" /> Chiết khấu đến 30%
                </span>
                <span>
                  <Icon name="check" /> In logo miễn phí
                </span>
              </div>
            </div>
            <form className="quote-form" onSubmit={submitQuote}>
              <div>
                <small>Nhận tư vấn trong 30 phút</small>
                <h3>Yêu cầu báo giá</h3>
              </div>
              <label>
                Họ và tên
                <input required placeholder="Nguyễn Văn A" />
              </label>
              <label>
                Số điện thoại
                <input required type="tel" placeholder="0901 234 567" />
              </label>
              <label>
                Số lượng dự kiến
                <select defaultValue="">
                  <option value="" disabled>
                    Chọn số lượng
                  </option>
                  <option>20–50 phần</option>
                  <option>51–100 phần</option>
                  <option>Trên 100 phần</option>
                </select>
              </label>
              <button className="btn btn-gold" type="submit">
                Nhận báo giá <Icon name="arrow" />
              </button>
              {submitted && (
                <p className="success">
                  <Icon name="check" /> Đã gửi yêu cầu. Chúng tôi sẽ sớm liên
                  hệ!
                </p>
              )}
            </form>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container">
            <div className="testimonial-heading">
              <div className="eyebrow">
                <span /> Khách hàng nói gì
              </div>
              <h2>Niềm vui được sẻ chia</h2>
              <p>
                Hơn 5.000 món quà đã tìm được đường đến những người thân yêu.
              </p>
            </div>
            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review" key={review.name}>
                  <div className="quote-mark">“</div>
                  <div className="stars">★★★★★</div>
                  <blockquote>{review.quote}</blockquote>
                  <div className="reviewer">
                    <span>{review.initials}</span>
                    <p>
                      <strong>{review.name}</strong>
                      <small>{review.role}</small>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-pattern" />
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>
              Tết đủ đầy bắt đầu từ những món quà được trao bằng cả tấm lòng.
            </p>
            <div className="socials">
              <a href="#" aria-label="Facebook">
                <Icon name="facebook" />
              </a>
              <a href="#" aria-label="Instagram">
                <Icon name="instagram" />
              </a>
            </div>
          </div>
          {[
            [
              "Về chúng tôi",
              [
                "Câu chuyện thương hiệu",
                "Bộ sưu tập 2025",
                "Quà doanh nghiệp",
                "Liên hệ",
              ],
            ],
            [
              "Chính sách",
              [
                "Giao hàng & thanh toán",
                "Đổi trả sản phẩm",
                "Bảo mật thông tin",
                "Điều khoản sử dụng",
              ],
            ],
            [
              "Hỗ trợ",
              [
                "Hướng dẫn mua hàng",
                "Câu hỏi thường gặp",
                "Theo dõi đơn hàng",
                "Hotline: 1900 6868",
              ],
            ],
          ].map(([title, links], index) => (
            <div
              className={`footer-column ${openFooter === index ? "open" : ""}`}
              key={title as string}
            >
              <button
                onClick={() =>
                  setOpenFooter(openFooter === index ? null : index)
                }
              >
                <strong>{title}</strong>
                <Icon name="chevron" />
              </button>
              <ul>
                {(links as string[]).map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="container contact-strip">
          <span>
            <Icon name="phone" /> 1900 6868
          </span>
          <span>
            <Icon name="mail" /> hello@tetsumvay.vn
          </span>
          <span>28 Nguyễn Huệ, Quận 1, TP.HCM</span>
        </div>
        <div className="container footer-bottom">
          <p>© 2025 Tết Sum Vầy. All rights reserved.</p>
          <p>Được làm bằng yêu thương cho Tết Việt</p>
        </div>
      </footer>
      <nav
        className="mobile-tabbar"
        aria-label="Điều hướng nhanh trên điện thoại"
      >
        <a className="active" href="#top">
          <Icon name="basket" />
          <span>Trang chủ</span>
        </a>
        <a href="#products">
          <Icon name="gift" />
          <span>Sản phẩm</span>
        </a>
        <a href="#combos">
          <span className="mobile-tabbar-feature">
            <Icon name="arrow" />
          </span>
          <span>Ưu đãi</span>
        </a>
        <a href="#contact">
          <Icon name="phone" />
          <span>Liên hệ</span>
        </a>
        <button aria-label={`Giỏ hàng có ${cartCount} sản phẩm`}>
          <span className="mobile-cart-icon">
            <Icon name="cart" />
            <b>{cartCount}</b>
          </span>
          <span>Giỏ hàng</span>
        </button>
      </nav>
    </div>
  )
}

export default App
