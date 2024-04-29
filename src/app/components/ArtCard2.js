import Card from "./Card";

export default function ArtCard2 ({item, children}) {
    return <Card>
    <h3>{item.title}</h3>
    <img src={item.image} alt={item.title} />
    <p>{item.description}</p>
    {children}
  </Card>
}