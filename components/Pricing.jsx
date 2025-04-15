export default function Pricing() {
  return (
    <section className="py-20 bg-white text-center px-6" id="planos">
      <h2 className="text-3xl font-bold mb-10">Escolha seu plano</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="border p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Essencial</h3>
          <p className="text-3xl font-bold mb-4">R$47/mês</p>
          <ul className="text-sm mb-4 space-y-1">
            <li>✓ 7 posts semanais</li>
            <li>✓ 1 e-mail promocional</li>
            <li>✓ Texto para bio/site</li>
          </ul>
          <a href="#" className="inline-block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
            Assinar
          </a>
        </div>
        <div className="border p-6 rounded shadow bg-purple-50">
          <h3 className="text-xl font-semibold mb-2">Profissional</h3>
          <p className="text-3xl font-bold mb-4">R$97/mês</p>
          <ul className="text-sm mb-4 space-y-1">
            <li>✓ Tudo do plano anterior</li>
            <li>✓ 2 campanhas mensais</li>
            <li>✓ Análise de concorrência</li>
          </ul>
          <a href="#" className="inline-block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
            Assinar
          </a>
        </div>
        <div className="border p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Premium</h3>
          <p className="text-3xl font-bold mb-4">R$197/mês</p>
          <ul className="text-sm mb-4 space-y-1">
            <li>✓ Tudo do Profissional</li>
            <li>✓ Suporte 1:1 por WhatsApp</li>
            <li>✓ Otimizações personalizadas</li>
          </ul>
          <a href="#" className="inline-block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
            Assinar
          </a>
        </div>
      </div>
    </section>
  );
}