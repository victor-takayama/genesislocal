export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Seu negócio local bombando nas redes — sem você mover um dedo.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Posts, e-mails, textos e campanhas criados automaticamente para você. 
        </p>
        <a
          href="#planos"
          className="bg-white text-purple-700 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-100 transition"
        >
          Comece Agora — É Grátis por 7 Dias
        </a>
      </div>
    </section>
  );
}