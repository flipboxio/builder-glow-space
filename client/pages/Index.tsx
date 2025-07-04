import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 bg-white">
        {/* Hero Section Placeholder */}
        <div className="min-h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Encontre sua casa dos sonhos
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A HomeFlip conecta você ao imóvel perfeito. Compre, venda ou
              alugue com facilidade e segurança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-homeflip-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Explorar Imóveis
              </button>
              <button className="border-2 border-homeflip-purple text-homeflip-purple px-8 py-4 rounded-lg font-semibold hover:bg-homeflip-purple hover:text-white transition-colors">
                Vender Imóvel
              </button>
            </div>
          </div>
        </div>

        {/* Features Section Placeholder */}
        <section className="py-20 bg-homeflip-light">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Por que escolher a HomeFlip?
              </h2>
              <p className="text-xl text-gray-600">
                Oferecemos a melhor experiência em transações imobiliárias
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-homeflip-purple rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Imóveis Verificados
                </h3>
                <p className="text-gray-600">
                  Todos os imóveis passam por rigorosa verificação de qualidade
                  e documentação.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-homeflip-purple rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Melhor Preço</h3>
                <p className="text-gray-600">
                  Garantimos os melhores preços do mercado com transparência
                  total.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-homeflip-purple rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Suporte Completo</h3>
                <p className="text-gray-600">
                  Acompanhamento completo do processo, desde a busca até a
                  conclusão.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
