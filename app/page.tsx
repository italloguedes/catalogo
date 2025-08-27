import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  return (
    <div className="catalogo-container">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Header */}
      <header className="header">
        <h1>🚀 Catálogo de Preços - Criação de Sites</h1>
        <p>Transforme sua presença digital com nossos serviços profissionais</p>
      </header>

      {/* Seção de Serviços */}
      <section>
        <h2>📋 Nossos Serviços</h2>
        <p>Oferecemos soluções completas para sua presença online, desde sites simples até sistemas complexos de gestão.</p>
        
        <div className="service-card">
          <h3>💼 Portfólios e Sites de Apresentação</h3>
          <p><strong>Preço: R$ 250</strong></p>
          <p>Perfeito para profissionais liberais, artistas e empresas que querem se apresentar de forma elegante na internet.</p>
          <ul className="feature-list">
            <li>Design responsivo e moderno</li>
            <li>Até 5 páginas incluídas</li>
            <li>Formulário de contato</li>
            <li>Otimização para SEO básica</li>
            <li>Integração com redes sociais</li>
            <li>Suporte por 30 dias</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>⚙️ Dashboards com Agendamento e Gestão Administrativa</h3>
          <p><strong>Preço: R$ 600</strong></p>
          <p>Sistema completo para empresas que precisam gerenciar agendamentos, clientes e processos administrativos.</p>
          <ul className="feature-list">
            <li>Painel administrativo completo</li>
            <li>Sistema de agendamento online</li>
            <li>Gestão de clientes e usuários</li>
            <li>Relatórios e analytics</li>
            <li>Integração com calendários</li>
            <li>Notificações automáticas</li>
            <li>Backup automático</li>
            <li>Suporte por 90 dias</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>📝 Blogs</h3>
          <p><strong>Preço: R$ 150</strong></p>
          <p>Plataforma ideal para compartilhar conteúdo, ideias e conectar com sua audiência.</p>
          <ul className="feature-list">
            <li>Editor de conteúdo intuitivo</li>
            <li>Sistema de categorias e tags</li>
            <li>Comentários e interação</li>
            <li>Newsletter integrada</li>
            <li>SEO otimizado</li>
            <li>Design responsivo</li>
            <li>Suporte por 30 dias</li>
          </ul>
        </div>
      </section>

      {/* Tabela Comparativa */}
      <section>
        <h2>📊 Comparativo de Serviços</h2>
        <table className="price-table">
          <thead>
            <tr>
              <th>Serviço</th>
              <th>Preço</th>
              <th>Prazo de Entrega</th>
              <th>Suporte</th>
              <th>Ideal Para</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>💼 Portfólios e Sites de Apresentação</strong></td>
              <td><strong>R$ 250</strong></td>
              <td>7-10 dias</td>
              <td>30 dias</td>
              <td>Profissionais liberais, artistas, pequenas empresas</td>
            </tr>
            <tr>
              <td><strong>⚙️ Dashboards com Gestão</strong></td>
              <td><strong>R$ 600</strong></td>
              <td>15-20 dias</td>
              <td>90 dias</td>
              <td>Empresas, consultórios, salões de beleza</td>
            </tr>
            <tr>
              <td><strong>📝 Blogs</strong></td>
              <td><strong>R$ 150</strong></td>
              <td>5-7 dias</td>
              <td>30 dias</td>
              <td>Influenciadores, escritores, educadores</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Seção de Benefícios */}
      <section>
        <h2>✨ Por que escolher nossos serviços?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div className="service-card">
            <h3>🎨 Design Profissional</h3>
            <p>Criamos designs modernos e atrativos que representam sua marca de forma profissional.</p>
          </div>
          <div className="service-card">
            <h3>📱 Totalmente Responsivo</h3>
            <p>Seus sites funcionam perfeitamente em todos os dispositivos: desktop, tablet e celular.</p>
          </div>
          <div className="service-card">
            <h3>⚡ Performance Otimizada</h3>
            <p>Sites rápidos e otimizados para melhor experiência do usuário e SEO.</p>
          </div>
          <div className="service-card">
            <h3>🔧 Suporte Técnico</h3>
            <p>Oferecemos suporte técnico durante todo o período contratado.</p>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="contact-section">
        <h2>📞 Entre em Contato</h2>
        <p>Pronto para dar vida ao seu projeto? Vamos conversar sobre suas necessidades!</p>
        <p><strong>Entre em contato e vamos dar vida ao seu projeto! 🚀</strong></p>
        
        <div style={{ marginTop: '2rem' }}>
          <a href="mailto:italo167@yahoo.com.br" className="cta-button">
            📧 Enviar E-mail
          </a>
          <a href="https://wa.me/5585994358083" className="cta-button" style={{ marginLeft: '1rem' }}>
            💬 WhatsApp
          </a>
        </div>
        
        <div style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.9 }}>
          <p>📱 WhatsApp: (85) 99435-8083</p>
          <p>📧 E-mail: italo167@yahoo.com.br</p>
          <p>⏰ Horário de atendimento: 24h</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem' }}>
        <p>© 2024 - Todos os direitos reservados | Desenvolvimento de Sites Profissionais</p>
      </footer>
    </div>
  )
}
