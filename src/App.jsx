import './App.css'

function App () {
  return (
    <main className="principal">
      <aside className="principal-text">
        <h1 className="title">Learn to code by watching others</h1>
        <p className="subtitle">
          See how experienced developers solve problems in real-time. Watching scripted tutorials is
          great, but understanding how developers think is invaluable.
        </p>
      </aside>
      <aside className="principal-form">
        <button className="call-to-action">
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </button>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Claim your free trial" />
          <p className="terminos">
            By clicking the button, you are agreeing to our <span>Terms and Services</span>
          </p>
        </form>
      </aside>
    </main>
  )
}

export default App
