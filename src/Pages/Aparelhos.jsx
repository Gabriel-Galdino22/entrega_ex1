import aparelhosData from '../../data/aparelhos';

const Aparelhos = () => {
  return (
    <div>
      <h1>Nossos Aparelhos</h1>
      <ul className="lista-aparelhos">
        {aparelhosData.map((aparelho) => (
          <li key={aparelho.id}>
            <img src={aparelho.imagem} alt={aparelho.nome} />
            <h2>{aparelho.nome}</h2>
            <p>Preço: R$ {aparelho.preco}</p>
            <p>Descrição: {aparelho.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Aparelhos;

