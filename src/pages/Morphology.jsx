function Morphology() {
  return (
    <main className="container px-4 py-4">
      <article>
        <section>
          <h3 className="h3 text-success">Зовнішній вигляд</h3>
          <p>Їжаки — це маленькі ссавці, відомі своїми гострими голками, що покривають їхню спину та боки. Вони мають короткі лапи, невеликі вуха та короткий хвіст, часто прихований під голками.</p>
        </section>
        <section>
          <h3 className="h3 text-success">Особливості будови</h3>
          <ul>
            <li>Довжина тіла звичайного їжака становить близько 20—30 см, вага може коливатися від 700 г до 1.5 кг.</li>
            <li>Спина та боки їжака вкриті тисячами гострих голок, які є видозміненим волоссям. Голки порожнисті, кожна має довжину 2-3 см.</li>
            <li>При небезпеці їжак згортається в щільну колючу кулю, захищаючи незахищені частини тіла (живіт, морду).</li>
            <li>Мордочка їжака видовжена, з рухливим носом, який завжди вологий. Мають добре розвинений нюх та слух.</li>
          </ul>
        </section>
        <figure className="text-center">
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGuEdFtQhEG12NJfTgIKZ55IrW_qUBpIxwbiY32QVSfifaJhJvXQ2-iThx81Ge" alt="Їжак" className="img-fluid rounded my-4"/> {/* Змінено шлях та alt */}
          <figcaption className="text-muted">Звичайний їжак</figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Morphology;