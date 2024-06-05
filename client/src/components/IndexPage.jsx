import { Outlet } from 'react-router-dom'

function IndexPage() {
  return (
    <div>
      Indexpage
        <Outlet />
    </div>
  )
}

export default IndexPage