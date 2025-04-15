export default function ContentSamples() {
  return (
    <section className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-3xl font-bold mb-10">Exemplos de Conteúdo</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 shadow rounded">
          <p className="text-sm text-left">
            "💪 Segunda é dia de recomeçar! Bora pra academia e cuidar da sua saúde com a gente! #Fitness #BemEstar"
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <p className="text-sm text-left">
            "🐶 Promoção especial no banho & tosa esta semana! Traga seu pet e ganhe 20% OFF. #PetLovers"
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <p className="text-sm text-left">
            "📣 Novo horário na nossa clínica de estética: agora também aos sábados. Agende já!"
          </p>
        </div>
      </div>
    </section>
  );
}