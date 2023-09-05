const Home = () => {
  return (
    <div>
      <h1>Bem-vindo à Venda de Smartphones e Tablets</h1>
      <h2>Promoções em Destaque:</h2>
      <div className="promocoes">
        <div className="promocao">
          <img src="imagem_promocao1.jpg" alt="Promoção 1" />
          <p>Desconto incrível no Smartphone XYZ!</p>
        </div>
        <div className="promocao">
          <img src="imagem_promocao2.jpg" alt="Promoção 2" />
          <p>Economize no Tablet ABC com esta oferta!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
