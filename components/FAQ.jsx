export default function FAQ() {
  return (
    <section className="py-20 bg-white px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Dúvidas Frequentes</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg">Preciso ter redes sociais criadas?</h3>
          <p>Sim, você precisa de uma conta no Instagram ou Facebook para aproveitar o conteúdo gerado.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Posso cancelar quando quiser?</h3>
          <p>Claro! Não há fidelidade. Você pode cancelar a qualquer momento diretamente pelo painel.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Posso editar os conteúdos antes de postar?</h3>
          <p>Sim! Todo o material é entregue em formato editável para você personalizar se quiser.</p>
        </div>
      </div>
    </section>
  );
}