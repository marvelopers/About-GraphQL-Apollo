import './components.css';


const Teams = () => {
  const AsideItems = () => <div></div>
  const MainContents = () => <div></div>

  return (
    <div id="teams" className="component">
      <aside>
        {AsideItems()}
      </aside>
      <section className="contents">
        {MainContents()}
      </section>
    </div>
  )
}

export default Teams;