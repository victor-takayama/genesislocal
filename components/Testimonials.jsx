export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-3xl font-bold mb-10">O que dizem nossos clientes</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 shadow rounded">
          <p>"Em 2 semanas já vi mais movimento no salão só com os posts do Gênesis!"</p>
          <h4 className="mt-4 font-semibold">Juliana — Studio de Beleza</h4>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <p>"Não tenho tempo pra marketing, mas agora tudo está resolvido! Conteúdo sensacional."</p>
          <h4 className="mt-4 font-semibold">Carlos — Petshop Amigo Fiel</h4>
        </div>
      </div>
    </section>
  );
}