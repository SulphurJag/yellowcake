import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://www.facebook.com/sulphurjag">@sulphurjag</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://sulphurjag.netlify.app/">SulphurJag</a>.
        </span>
      </div>
    </footer>
  </div>
)
