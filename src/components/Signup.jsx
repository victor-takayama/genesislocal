export default function Signup() {
  return (
    <section id="signup" className="py-12 px-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Quer receber conteúdos personalizados e grátis para seu negócio?</h2>
      <form className="max-w-md mx-auto">
        <input type="text" placeholder="Seu nome" className="w-full p-2 mb-4 border rounded" />
        <input type="email" placeholder="Seu e-mail" className="w-full p-2 mb-4 border rounded" />
        <input type="text" placeholder="Tipo de negócio" className="w-full p-2 mb-4 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Entrar na Lista Beta</button>
      </form>
    </section>
  );
}