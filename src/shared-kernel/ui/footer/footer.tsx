
import { Link } from 'react-router-dom'
import style from './footer.module.scss'

const KONTAKTS = [
  {
    id: 1,
    name: 'Telegram',
    link: 'link to .....',
    // img: 'link to .....',
  },
  {
    id: 2,
    name: 'Whats up',
    link: 'link to .....',
    // img: 'link to .....',
  },
  {
    id: 3,
    name: 'Email',
    link: 'link to .....',
    // img: 'link to .....',
  }
]

function Footer() {

  const footerKontakts = KONTAKTS.map((obj) => {
    // console.log('footer contacts obj :', obj)
    return (
      <li className={style.footer_item}
        key={obj.id}
      >
        <Link className={style.footer_link_item}
          to=''>
          {/* <img>{obj.img}</img> */}
          <h5>{obj.name}</h5>
        </Link>
      </li>
    );
  });

  return (
    <div className={style.footer_wrapper}>
      <footer>
        <div className={style.footer_title_wrapper}>
          <h3>разработка и дизайн :</h3>
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