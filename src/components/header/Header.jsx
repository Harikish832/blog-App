import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles" style={{marginBottom:"100px"}}>
        <span className="headerTitleLg">Jemma</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.shopify.com/s/files/1/0276/5753/5599/files/796604949_750537.jpg?v=1616165671?v=1612958075?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
