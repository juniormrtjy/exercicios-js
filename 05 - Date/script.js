const p = document.querySelector('section p')
const weeks = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]
const meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

function setDate() {
  const date = new Date()
  // DATE VALUES
  const dateToday = date.getDate()
  const week = date.getDay()
  const month = date.getMonth()
  const year = date.getFullYear()
  const hours = date.getHours()
  const minute = date.getMinutes()

  function zeroLeft(min) {
    return min >= 10 ? min : `0${min}`
  }

  switch (week) {
    case 0:
      setText(
        weeks[week],
        dateToday,
        meses[month],
        year,
        hours,
        zeroLeft(minute)
      )
      break
    case 1:
      setText(
        weeks[week],
        dateToday,
        meses[month],
        year,
        hours,
        zeroLeft(minute)
      )
      break
    case 2:
      setText(
        weeks[week],
        dateToday,
        meses[month],
        year,
        hours,
        zeroLeft(minute)
      )
      break
    case 3:
      setText(
        weeks[week],
        dateToday,
        meses[month],
        year,
        hours,
        zeroLeft(minute)
      )
      break
    case 4:
      setText(
        weeks[week],
        dateToday,
        meses[month],
        year,
        hours,
        zeroLeft(minute)
      )
      break
    case 5:
      setText(
        weeks[week],
        dateToday,
        meses[month],
        year,
        hours,
        zeroLeft(minute)
      )
      break
    case 6:
      setText(
        weeks[week],
        dateToday,
        meses[month],
        year,
        hours,
        zeroLeft(minute)
      )
      break
  }
}

setDate()

function setText(semana, dia, mes, ano, hora, minuto) {
  p.innerHTML = `${semana}, ${dia} de ${mes} de ${ano} ${hora}:${minuto}`
}
