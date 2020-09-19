import React from 'react'
import '../assets/css/main.css'
import Logo from '../assets/img/logo.svg'
import Instagram from '../assets/img/instagram.png'

import AllBooks from '../assets/img/allbooks.svg'
import SubjectBooks from '../assets/img/konu.svg'
import QuestionBooks from '../assets/img/questionbank1.svg'
import TestBooks from '../assets/img/tests.svg'
import CargoIcon from '../assets/img/cargo.svg'
import BasketIcon from '../assets/img/basket.svg'
import Book0 from '../assets/img/cografya.svg'
import Book1 from '../assets/img/uygarlik.svg'
import Book2 from '../assets/img/cocuk.svg'
import Book3 from '../assets/img/alan2.svg'
import Book4 from '../assets/img/kimya.svg'
import Book5 from '../assets/img/fizik.svg'
import Book6 from '../assets/img/dil.svg'
import Book7 from '../assets/img/alan.svg'


import MobileLogo from '../assets/img/mobilelogo.svg'
import MobileAccount from '../assets/img/account.svg'

const Main = () => (
    <>
    <main className="main">
        <aside className="main__aside" scroll="no">
            <div className="main__aside__brand">
                <img className="main__aside__brand__img" src={Logo}/>
            </div>
            <div className="main__aside--space-between">
                <div className="main__aside__sidebar-nav">
                    <div className="main__aside__sidebar-nav--link --tum">
                        <a className="main__aside__sidebar-nav--link__a">
                            <img className="main__aside__sidebar-nav--link__a__img" src={AllBooks} />
                            <span className="main__aside__sidebar-nav--link__a__span tumkitaplar">Tüm Kitaplar</span>
                        </a>
                    </div>
                    <div className="main__aside__sidebar-nav--link --konu">
                        <a className="main__aside__sidebar-nav--link__a">
                            <img className="main__aside__sidebar-nav--link__a__img" src={SubjectBooks} />
                            <span className="main__aside__sidebar-nav--link__a__span konu">Konu Anlatımı</span>
                        </a>
                    </div>
                    <div className="main__aside__sidebar-nav--link --soru">
                        <a className="main__aside__sidebar-nav--link__a">
                            <img className="main__aside__sidebar-nav--link__a__img" src={QuestionBooks} />
                            <span className="main__aside__sidebar-nav--link__a__span soru">Soru Bankası</span>
                        </a>
                    </div>
                    <div className="main__aside__sidebar-nav--link --deneme">
                        <a className="main__aside__sidebar-nav--link__a">
                            <img className="main__aside__sidebar-nav--link__a__img" src={TestBooks} />
                            <span className="main__aside__sidebar-nav--link__a__span deneme">Denemeler</span>
                        </a>
                    </div>
                </div>
                <div className="main__aside__cargo">
                    <div className="main__aside__cargo__box">
                        <h2 className="main__aside__cargo__box__h2">50 ₺ ve Üzeri Alışverişlerinizde Kargo Ücretsiz</h2>
                        <img className="main__aside__cargo__box__img" src={CargoIcon} />
                    </div>
                </div>
            </div>
        </aside>
        <section className="main__section">
            <div className="main__section__header">
                <div className="main__section__header__search">
                    <input className="main__section__header__search__input" type="text" placeholder="Ara" />
                </div>
                <div className="main__section__header__user">
                    <a className="main__section__header__user__a--login">Giriş Yap</a>
                    <a className="main__section__header__user__a--basket">
                        <img className="main__section__header__user__a--basket__img" src={BasketIcon} />
                        <span className="main__section__header__user__a--basket__span">Sepetim</span>
                    </a>
                </div>
            </div>
            <div className="main__section__body">
                <div className="main__section__body__books">
                    <div className="main__section__body__books__box">
                        <div className="main__section__body__books__box--up">
                            <img className="main__section__body__books__box--up__img" src={Book0} />
                        </div>
                        <div className="main__section__body__books__box--down">
                            <span className="main__section__body__books__box--down__span"><strong>ÖABT</strong> Genel Coğrafya <br/> Konu Anlatımı</span>
                            <span className="main__section__body__books__box--down__span--price">24 ₺</span>
                        </div>
                    </div>
                    <div className="main__section__body__books__box">
                        <div className="main__section__body__books__box--up uygarlik">
                            <img className="main__section__body__books__box--up__img" src={Book1} />
                        </div>
                        <div className="main__section__body__books__box--down uygarlik-down">
                            <span className="main__section__body__books__box--down__span"><strong>ÖABT</strong> Uygarlık Tarihi <br/> Konu Anlatımı</span>
                            <span className="main__section__body__books__box--down__span--price">24 ₺</span>
                        </div>
                    </div>
                    <div className="main__section__body__books__box">
                        <div className="main__section__body__books__box--up cocuk">
                            <img className="main__section__body__books__box--up__img" src={Book2} />
                        </div>
                        <div className="main__section__body__books__box--down cocuk-down">
                            <span className="main__section__body__books__box--down__span"><strong>ÖABT</strong> Çocuk Edebiyatı <br/> Konu Anlatımı</span>
                            <span className="main__section__body__books__box--down__span--price">24 ₺</span>
                        </div>
                    </div>
                    <div className="main__section__body__books__box">
                        <div className="main__section__body__books__box--up alan">
                            <img className="main__section__body__books__box--up__img" src={Book3} />
                        </div>
                        <div className="main__section__body__books__box--down alan-down">
                            <span className="main__section__body__books__box--down__span"><strong>ÖABT</strong> Alan Eğitimi <br/> Konu Anlatımı</span>
                            <span className="main__section__body__books__box--down__span--price">24 ₺</span>
                        </div>
                    </div>
                    <div className="main__section__body__books__box">
                        <div className="main__section__body__books__box--up kimya">
                            <img className="main__section__body__books__box--up__img" src={Book4} />
                        </div>
                        <div className="main__section__body__books__box--down kimya-down">
                            <span className="main__section__body__books__box--down__span"><strong>ÖABT</strong> Genel Kimya <br/> Konu Anlatımı</span>
                            <span className="main__section__body__books__box--down__span--price">24 ₺</span>
                        </div>
                    </div>
                    <div className="main__section__body__books__box">
                        <div className="main__section__body__books__box--up biyoloji">
                            <img className="main__section__body__books__box--up__img" src={Book5} />
                        </div>
                        <div className="main__section__body__books__box--down biyoloji-down">
                            <span className="main__section__body__books__box--down__span"><strong>ÖABT</strong> Genel Biyoloji <br/> Konu Anlatımı</span>
                            <span className="main__section__body__books__box--down__span--price">24 ₺</span>
                        </div>
                    </div>
                    <div className="main__section__body__books__box">
                        <div className="main__section__body__books__box--up turk">
                            <img className="main__section__body__books__box--up__img" src={Book6} />
                        </div>
                        <div className="main__section__body__books__box--down turk-down">
                            <span className="main__section__body__books__box--down__span"><strong>ÖABT</strong> Türk Dili <br/> Konu Anlatımı</span>
                            <span className="main__section__body__books__box--down__span--price">24 ₺</span>
                        </div>
                    </div>
                    <div className="main__section__body__books__box">
                        <div className="main__section__body__books__box--up fizik">
                            <img className="main__section__body__books__box--up__img" src={Book7} />
                        </div>
                        <div className="main__section__body__books__box--down fizik-down">
                            <span className="main__section__body__books__box--down__span"><strong>ÖABT</strong> Genel Fizik <br/> Konu Anlatımı</span>
                            <span className="main__section__body__books__box--down__span--price">24 ₺</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__section__footer">
                <div className="main__section__footer__container">
                    <span className="main__section__footer__container__span">Orta Mahalle, Süleyman Binek Caddesi<br/> No: 138, Serdivan / Sakarya</span>
                    <a className="main__section__footer__container__a" href="mailto:siparis@sinifyayinevi.com">iletisim@sinifyayinevi.com</a>
                    <div className="main__section__footer__container__social">
                        <img className="main__section__footer__container__social__img" src={Instagram} />
                        <a className="main__section__footer__container__a" href="https://instagram.com/sinifyayinlari">sinifyayinlari</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <main className="mobile-main">
        <header className="mobile-main__header">
            <div className="mobile-main__header__brand">
                <img className="mobile-main__header__brand__img" src={MobileLogo} />
                <span className="mobile-main__header__brand__span">Sınıf Yayınları</span>
            </div>
            <div className="mobile-main__header__user">
                <img className="mobile-main__header__img--basket2" src={MobileAccount} />
                <img className="mobile-main__header__img--basket" src={BasketIcon} />
            </div>
        </header>
        <main className="mobile-main__body">
            <div className="mobile-main__body__categories">
                <a className="mobile-main__body__categories--link" href="#">Tüm Kitaplar</a>
                <a className="mobile-main__body__categories--link" href="#">Konu Anlatımı</a>
                <a className="mobile-main__body__categories--link" href="#">Soru Bankası</a>
                <a className="mobile-main__body__categories--link" href="#">Denemeler</a>
            </div>
            <div className="mobile-main__body__books">
                <div className="mobile-main__body__books__box">
                    <div className="mobile-main__body__books__box--up">
                        <img className="mobile-main__body__books__box--up__img" src={Book1} />
                    </div>
                    <div className="mobile-main__body__books__box--down">
                        <span className="mobile-main__body__books__box--down__span--bookname">
                            <strong>ÖABT</strong> Uygarlık Tarihi <br/> Konu Anlatımı
                        </span>
                        <span className="mobile-main__body__books__box--down__span--pricetag">24 ₺</span>
                    </div>
                </div>
                <div className="mobile-main__body__books__box">
                    <div className="mobile-main__body__books__box--up">
                        <img className="mobile-main__body__books__box--up__img" src={Book2} />
                    </div>
                    <div className="mobile-main__body__books__box--down">
                        <span className="mobile-main__body__books__box--down__span--bookname">
                            <strong>ÖABT</strong> Çocuk Edebiyatı <br/> Konu Anlatımı
                        </span>
                        <span className="mobile-main__body__books__box--down__span--pricetag">24 ₺</span>
                    </div>
                </div>
                <div className="mobile-main__body__books__box">
                    <div className="mobile-main__body__books__box--up">
                        <img className="mobile-main__body__books__box--up__img" src={Book3} />
                    </div>
                    <div className="mobile-main__body__books__box--down">
                        <span className="mobile-main__body__books__box--down__span--bookname">
                            <strong>ÖABT</strong> Alan Eğitimi <br/> Konu Anlatımı
                        </span>
                        <span className="mobile-main__body__books__box--down__span--pricetag">24 ₺</span>
                    </div>
                </div>
                <div className="mobile-main__body__books__box">
                    <div className="mobile-main__body__books__box--up">
                        <img className="mobile-main__body__books__box--up__img" src={Book6} />
                    </div>
                    <div className="mobile-main__body__books__box--down">
                        <span className="mobile-main__body__books__box--down__span--bookname">
                            <strong>ÖABT</strong> Türk Dili <br/> Konu Anlatımı
                        </span>
                        <span className="mobile-main__body__books__box--down__span--pricetag">24 ₺</span>
                    </div>
                </div>
                <div className="mobile-main__body__books__box">
                    <div className="mobile-main__body__books__box--up">
                        <img className="mobile-main__body__books__box--up__img" src={Book0} />
                    </div>
                    <div className="mobile-main__body__books__box--down">
                        <span className="mobile-main__body__books__box--down__span--bookname">
                            <strong>ÖABT</strong> Genel Coğrafya <br/> Konu Anlatımı
                        </span>
                        <span className="mobile-main__body__books__box--down__span--pricetag">24 ₺</span>
                    </div>
                </div>
                <div className="mobile-main__body__books__box">
                    <div className="mobile-main__body__books__box--up">
                        <img className="mobile-main__body__books__box--up__img" src={Book7} />
                    </div>
                    <div className="mobile-main__body__books__box--down">
                        <span className="mobile-main__body__books__box--down__span--bookname">
                            <strong>ÖABT</strong> Genel Fizik <br/> Konu Anlatımı
                        </span>
                        <span className="mobile-main__body__books__box--down__span--pricetag">24 ₺</span>
                    </div>
                </div>
                <div className="mobile-main__body__books__box">
                    <div className="mobile-main__body__books__box--up">
                        <img className="mobile-main__body__books__box--up__img" src={Book4} />
                    </div>
                    <div className="mobile-main__body__books__box--down">
                        <span className="mobile-main__body__books__box--down__span--bookname">
                            <strong>ÖABT</strong> Genel Kimya <br/> Konu Anlatımı
                        </span>
                        <span className="mobile-main__body__books__box--down__span--pricetag">24 ₺</span>
                    </div>
                </div>
                <div className="mobile-main__body__books__box">
                    <div className="mobile-main__body__books__box--up">
                        <img className="mobile-main__body__books__box--up__img" src={Book5} />
                    </div>
                    <div className="mobile-main__body__books__box--down">
                        <span className="mobile-main__body__books__box--down__span--bookname">
                            <strong>ÖABT</strong> Genel Biyoloji <br/> Konu Anlatımı
                        </span>
                        <span className="mobile-main__body__books__box--down__span--pricetag">24 ₺</span>
                    </div>
                </div>
            </div>
        </main>
        <footer className="mobile-main__footer">
            <div className="mobile-main__footer__container">
                <a className="mobile-main__footer__container__a" href="mailto:iletisim@sinifyayinevi.com">iletisim@sinifyayinevi.com</a>
                <div className="mobile-main__footer__container__social">
                    <img className="mobile-main__footer__container__social__img" src={Instagram} />
                    <span className="mobile-main__footer__container__social__span"><a className="mobile-main__footer__container__social__span__a" href="https://instagram.com/sinifyayinlari">sinifyayinlari</a></span>
                </div>   
            </div>
        </footer>
    </main>
    </>
)

export default Main