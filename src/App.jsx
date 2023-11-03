import { useForm } from 'react-hook-form'
import IconError from './assets/icon-error.svg'
import './App.css'

function App () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const handelEvent = () => {
    document.querySelector('#firstname').focus()
  }
  const sendInfo = () => {
    reset()
  }
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
        <button onClick={handelEvent} className="call-to-action">
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </button>
        <form onSubmit={handleSubmit(sendInfo)}>
          <div className="inputFiel">
            <input
              className={errors?.first_name?.type === 'required' ? 'errorInput' : ''}
              {...register('first_name', { required: true })}
              id="firstname"
              type="text"
              placeholder="First Name"
            />
            {errors?.first_name?.type === 'required' && (
              <>
                <img className="iconError" src={IconError} alt="Icon Error" />
                <p className="errorsLegend">First Name cannot be empty</p>
              </>
            )}
          </div>
          <div className="inputFiel">
            <input
              className={errors?.first_name?.type === 'required' ? 'errorInput' : ''}
              {...register('last_name', { required: true })}
              id="lastname"
              type="text"
              placeholder="Last Name"
            />
            {errors?.last_name?.type === 'required' && (
              <>
                <img className="iconError" src={IconError} alt="Icon Error" />
                <p className="errorsLegend">Last Name cannot be empty</p>
              </>
            )}
          </div>
          <div className="inputFiel">
            <input
              className={
                errors?.first_name?.type === 'required' || errors?.first_name?.type === 'pattern'
                  ? 'errorInput'
                  : ''
              }
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
              })}
              id="email"
              placeholder="Email Address"
            />
            {errors?.email?.type === 'required' && (
              <>
                <img className="iconError" src={IconError} alt="Icon Error" />
                <p className="errorsLegend">Email cannot be empty</p>
              </>
            )}
            {errors?.email?.type === 'pattern' && (
              <>
                <img className="iconError" src={IconError} alt="Icon Error" />
                <p className="errorsLegend">Looks like this is not an email</p>
              </>
            )}
          </div>
          <div className="inputFiel">
            <input
              className={errors?.first_name?.type === 'required' ? 'errorInput' : ''}
              {...register('password', {
                required: true
              })}
              id="password"
              type="password"
              placeholder="Password"
            />
            {errors?.password?.type === 'required' && (
              <>
                <img className="iconError" src={IconError} alt="Icon Error" />
                <p className="errorsLegend">Password cannot be empty</p>
              </>
            )}
          </div>
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
