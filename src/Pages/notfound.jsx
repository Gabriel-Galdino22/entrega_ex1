import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Erro 404 - Página não encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}

export default NotFound;
