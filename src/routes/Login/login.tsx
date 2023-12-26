import  { useState } from 'react';
import './login.css';
import MyIcon from '../../assests/svg_login/cat-astronaut-animate.svg';

export function Login_aluno() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = () => {
    if (password.length >= 5) {
      setErrorMessage('');
    } else {
      setErrorMessage('A senha deve ter pelo menos 5 caracteres.');
    }
  };

  const handleSubmit = () => {
    if (!username || !password) {
      setErrorMessage('Insira todos os seus dados.');
      return;
    }

    if (username === 'drestagio' && password === '12345') {
      window.location.href = 'https://www.google.com.br';
    } else {
      setErrorMessage('Usuário ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <>
      <div className="main-login">
        <div className="left-login">
          <h1>Faça login <br /> E entre nessa jornada!</h1>
          <img className='animated' src={MyIcon} alt="Ícone SVG" />
        </div>
        <div className="right-login">
          <div className="card-login">
            <h1>LOGIN</h1>
            {errorMessage && (
            <div className="error-message" style={{ color: 'white' }}>
              {errorMessage}
            </div>
          )}
            <div className="textfield">
              <label htmlFor="usuario">usuário</label>
              <input
                className='input_login_aluno'
                type="text"
                name="usuario"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="textfield">
              <label htmlFor="senha">senha</label>
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleChange();
                }}
              />
            </div>
            <button className="button-login" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
