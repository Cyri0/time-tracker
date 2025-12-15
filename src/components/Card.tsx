export type CardType = {
    title: string,
    spentTime: number,
    lastWeekTime: number,
    color: string,
    icon: string
}

const Card = (props:CardType) => {
  return (
    <div className="cardElement">
        <header style={{background: props.color}}>
            <img src={props.icon}/>
        </header>
        <section>
            <h2>{props.title}</h2>
            <h1>{props.spentTime}hrs</h1>
            <h3>Last week - {props.lastWeekTime}hrs</h3>
        </section>
    </div>
  )
}

export default Card