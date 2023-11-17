
import { Link } from 'react-router-dom'
import style from './footer.module.scss'

const KONTAKTS = [
  {
    id: 1,
    name: 'Telegram',
    link: 'https://t.me/KirillGrant',
  },
  {
    id: 2,
    name: 'Whats up',
    link: 'https://wa.me/+79022888989',
  },
  {
    id: 3,
    name: 'Email',
    link: 'mailto:webdotg.inbox@gmail.com',
  },
  {
    id: 4,
    name: 'Позвонить',
    link: 'tel:+79022888989',
  }
]

function Footer() {

  const footerKontakts = KONTAKTS.map((obj) => {
    // console.log('footer contacts obj :', obj)
    return (
      <li className={style.footer_item}
        key={obj.id}
      >
        <a className={style.footer_link_item}
          href={obj.link}>
          {/* <img>{obj.img}</img> */}
          <h5>{obj.name}</h5>
        </a>
      </li>
    );
  });

  return (
    <div className={style.footer_wrapper}>
      <footer className={style.footer}>
        <div className={style.footer_title_wrapper}>
          <h3>Разработка и дизайн :</h3>
          <h5>Грант Кирилл, "webDotG"</h5>
        </div>
        <ul className={style.footer_list}>
          {footerKontakts}
        </ul>
      </footer>
    </div >
  )
}

export default Footer