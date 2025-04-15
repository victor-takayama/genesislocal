
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header style={{ padding: '2rem', background: '#fff', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h1>Genesis Local 🚀</h1>
        <p>Conteúdo com IA toda semana — gratuito durante a fase beta!</p>
        <a href="https://tally.so/r/mJBo6Y" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '1rem 2rem', fontSize: '1rem', background: 'black', color: 'white', borderRadius: '8px', border: 'none', marginTop: '1rem' }}>
            Preencher formulário
          </button>
        </a>
      </header>

      <main style={{ padding: '2rem' }}>
        <section>
          <h2>✨ O que você recebe</h2>
          <ul>
            <li>📱 7 postagens personalizadas para redes sociais</li>
            <li>💌 1 e-mail promocional otimizado</li>
            <li>✍️ Bio otimizada para o Instagram</li>
            <li>🎯 Ideia de campanha semanal</li>
            <li>🔥 Frase motivacional para inspirar</li>
          </ul>
        </section>

        <section>
          <h2>📌 Como funciona</h2>
          <ol>
            <li>Você preenche o formulário</li>
            <li>Nossa IA analisa seu negócio</li>
            <li>Você recebe conteúdo toda semana por e-mail</li>
          </ol>
        </section>

        <section>
          <h2>🌱 Evolução da Ferramenta</h2>
          <p>Genesis Local está em fase beta. Futuramente, você terá acesso a:</p>
          <ul>
            <li>Painel para acompanhar entregas</li>
            <li>Integração com redes sociais</li>
            <li>Conteúdos dinâmicos com imagem e vídeo</li>
            <li>Planos pagos com mais entregáveis</li>
          </ul>
        </section>
      </main>

      <footer style={{ padding: '1rem', textAlign: 'center', fontSize: '0.85rem', background: '#efefef' }}>
        © 2025 Genesis Local – Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
