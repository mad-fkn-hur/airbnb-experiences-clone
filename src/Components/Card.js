export default function Card({item}) {
    let badgeText
    if (item.openSpots === 0) {
        item.badgeText = "SOLD OUT"
    }
    if (item.location === "Online") {
        item.badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../Pictures/${item.coverImg}`)} alt=""className="card--image" />
            <div className="card--stats">
                <img src={require("../Pictures/Star.png")} className="card--star" alt=""/>
                <span>{item.stats.rating}</span>
                <span className="gray">({item.stats.reviewCount}) • </span>
                <span className="gray">{item.location}</span>
            </div>
            <p className="card--title">{item.title}</p>
            <p className="card--price"><span className="bold">From ${item.price}</span> / person</p>
        </div>
    )
}