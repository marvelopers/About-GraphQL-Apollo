import './components.css';


const People = () => {
  const AsideItems = () => <div></div>
  const MainContents = () => <div></div>
  
  return (
    <div id="people" className="component">
      <aside>
        {AsideItems()}
      </aside>
      <section className="contents">
        {MainContents()}
      </section>
    </div>
  )
}

export default People;

import './components.css';


export default Roles;