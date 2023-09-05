import { useParams } from 'react-router-dom';
import aparelhosData from '../../data/aparelhos';

const VisualizarAparelho = () => {
  const { id } = useParams();
  const aparelho = aparelhosData.find((ap) => ap.id === parseInt(id));

  if (!aparelho) {
    return <div>Aparelho não encontrado</div>;
  }

  return (
    <div>
      <h1>{aparelho.nome}</h1>
      <img src={aparelho.imagem} alt={aparelho.nome} />
      <p>Preço: R$ {aparelho.preco}</p>
      <p>Descrição: {aparelho.descricao}</p>
    </div>
  );
}

export default VisualizarAparelho;
