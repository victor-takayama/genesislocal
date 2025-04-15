export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 text-sm">
      <p>© {new Date().getFullYear()} Gênesis Local. Todos os direitos reservados.</p>
      <p><a href="#" className="text-purple-600 hover:underline">Termos de uso</a> • <a href="#" className="text-purple-600 hover:underline">Política de privacidade</a></p>
    </footer>
  );
}