interface ICardProps {
  children?: React.ReactNode,
  title: string,
  text: string
  btnText: string
}

export const Card = ({children, title, text, btnText}: ICardProps) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">{btnText}</a>
      </div>
    </div>
  )
}

