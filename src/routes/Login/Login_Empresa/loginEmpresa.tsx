import React, { useState } from 'react';
import './loginEmpresa.css';
import Logo_ from '../../../assests/Logo1.png';

export function Login_empresa() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const span = e.target.previousElementSibling as HTMLSpanElement | null;
    if (span) {
      span.classList.add('span-active');
    }
  };

  const handleFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    const span = e.target.previousElementSibling as HTMLSpanElement | null;
    if (span && e.target.value === '') {
      span.classList.remove('span-active');
    }
  };

  const handleChange = () => {
    if (password.length >= 4) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = () => {
    if (username === 'drestagio' && password === '123456') {
      window.location.href = 'https://www.google.com.br';
    } else {
      setErrorMessage('Credenciais inválidas D: Tente novamente.');
    }
  };

  return (
    <div>
      <main className='main_login_empresa'>
        <section className="login">
          <div className="wrapper">
            <img src={Logo_} alt="logo" className="login__logo" />

            <h1 className="login__title">Fazer login</h1>

            <label className="login__label">
              <span>nome de usuário</span>
              <input
                type="text"
                name="username"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleFocusOut}
              />
            </label>

            <label className="login__label">
              <span>senha</span>
              <input
                type="password"
                name="password"
                className="input"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleChange();
                }}
                onFocus={handleFocus}
                onBlur={handleFocusOut}
              />
            </label>

            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}

            <div className="login__icons">
              {/* Icons buttons here */}
            </div>
          </div>

          <div className="wrapper">
            <button
              type="button"
              className="login__button"
              disabled={isButtonDisabled}
              onClick={handleSubmit}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
                />
              </svg>
            </button>

            <a href="#" className="login__link">
              não consegue iniciar sessão?
            </a>
          </div>
        </section>

        <section className="wallpaper"></section>
      </main>
    </div>
  );
}
