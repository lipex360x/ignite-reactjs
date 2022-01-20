const dateFormat = (date: string | number | Date) => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date))
}

export {
  dateFormat
}
