import React,{ useState } from 'react'
import AsideItems from './AsideItems';


const Layout = ({children}) => {
  const [contentId, setContentId] = useState('');
  const handleClickContent = (id) => setContentId(id)


  return (
    <div className="component">
      <aside>
        <AsideItems contentId={contentId}  handleClickContent={handleClickContent}/>
      </aside>
      <section className="contents">
        {children}
      </section>
    </div>
  )
}

export default Layout


