export default function HowItWorks() {
  return (
    <section className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl font-bold mb-10">Como funciona?</h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div>
          <div className="text-4xl mb-2">📝</div>
          <h3 className="font-semibold text-xl mb-1">1. Preencha um formulário</h3>
          <p>Com as informações do seu negócio: nome, tipo, público, localização.</p>
        </div>
        <div>
          <div className="text-4xl mb-2">⚙️</div>
          <h3 className="font-semibold text-xl mb-1">2. A IA trabalha por você</h3>
          <p>Ela gera conteúdo semanal, ofertas e campanhas sob medida.</p>
        </div>
        <div>
          <div className="text-4xl mb-2">📩</div>
          <h3 className="font-semibold text-xl mb-1">3. Você recebe tudo por e-mail</h3>
          <p>Conteúdo pronto para postar e usar no seu negócio local.</p>
        </div>
        <div>
          <div className="text-4xl mb-2">🚀</div>
          <h3 className="font-semibold text-xl mb-1">4. Sua presença cresce!</h3>
          <p>Mais visibilidade, mais clientes e mais vendas — sem esforço.</p>
        </div>
      </div>
    </section>
  );
}