
import './login.css'
import   MyIcon from '../../assests/svg_login/cat-astronaut-animate.svg';

export function Login_aluno (){
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
          <div className="textfield">
            <label htmlFor="usuario">usuário</label>
            <input className='input_login_aluno' type="text" name="usuario" placeholder="Usuário" />
          </div>
          <div className="textfield">
            <label htmlFor="senha">senha</label>
            <input type="password" name="senha" placeholder="Senha" />
          </div>
          <button className="button-login">Login</button>
        </div>
      </div>
    </div>
    
  </>
    
  );
}
