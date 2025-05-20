function Nutrition() {
  return (
    <main className="container px-4 py-4 flex-grow-1">
      <section>
        <h2 className="h2 text-success mb-4">Харчування їжаків</h2>
        <p>Їжаки є всеїдними тваринами, але їхній раціон складається переважно з білкової їжі. Їхнє харчування включає:</p>
        <ul className="list-group">
          <li className="list-group-item">Комах: жуки, гусениці, черв'яки, равлики, слимаки.</li>
          <li className="list-group-item">Дрібних хребетних: жаби, ящірки, миші, змії (їжаки стійкі до деяких отрут).</li>
          <li className="list-group-item">Ягоди, фрукти та гриби (у меншій кількості, як доповнення).</li>
          <li className="list-group-item">Яйця птахів, що гніздяться на землі.</li>
        </ul>
      </section>
    </main>
  );
}

export default Nutrition;