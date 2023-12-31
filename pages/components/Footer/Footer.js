import S from "./Footer.module.scss"
import Link from "next/link"
import {useState} from "react"
import EmailValidationMessage from "@/pages/components/EmailValidationMessage"
import SubscriptionSuccessMessage from "@/pages/components/SubscriptionSuccessMessage"
import {EMAIL_REGEXP, EMAIL_PATTERN} from "@/utils/variables"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [emailStatus, setEmailStatus] = useState(false)
  const [validation, setValidation] = useState(false)

  const submitEmail = () => setEmailStatus(true)

  const showEmailValidationError = () => setValidation(true)

  function handleClick(event) {
    event.preventDefault()
    isValidEmail(email) ? submitEmail() : showEmailValidationError()
  }

  const isValidEmail = value => {
    const isValidEmail = EMAIL_REGEXP.test(value)
    setValidation(isValidEmail)
    return EMAIL_REGEXP.test(value)
  }

  return (
    <footer>
      <h3 className={S.heading}>ПОДПИСЫВАЙСЯ НА НАШИ НОВОСТИ</h3>

      {!emailStatus ? (
        <>
          <form className={S.follow}>
            <input
              pattern={EMAIL_PATTERN}
              className={S.input}
              placeholder={"Ваш E-mail"}
              type="email"
              value={email}
              onChange={e => {
                if (validation) isValidEmail(e.target.value)
                if (e.target.value === "") setValidation(false)
                setEmail(e.target.value)
              }}></input>
            <button type="submit" className={S.submit} onClick={handleClick}>
              /ТЫК
            </button>
          </form>
          <EmailValidationMessage validation={validation} />
        </>
      ) : (
        <SubscriptionSuccessMessage />
      )}

      <div className={S.container}>
        <ul className={S.links}>
          <Link className={`${S.link} ${S.linkBold}`} href="/">
            Покупателям
          </Link>
          <Link className={S.link} href="/">
            Оплата и доставка
          </Link>
          <Link className={S.link} href="/">
            Обратная связь
          </Link>
          <Link className={S.link} href="/">
            Контакты
          </Link>
        </ul>

        <ul className={S.links}>
          <Link className={`${S.link} ${S.linkBold}`} href="/">
            О нас
          </Link>
          <Link className={S.link} href="/">
            Новости
          </Link>
          <Link className={S.link} href="/">
            Мероприятия
          </Link>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
