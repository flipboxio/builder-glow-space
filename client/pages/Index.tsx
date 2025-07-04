import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 bg-white">
        {/* Hero Section Placeholder */}
        <div className="min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Encontre sua casa dos sonhos
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              A HomeFlip conecta você ao imóvel perfeito. Compre, venda ou
              alugue com facilidade e segurança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <button className="bg-homeflip-purple text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm sm:text-base">
                Explorar Imóveis
              </button>
              <button className="border-2 border-homeflip-purple text-homeflip-purple px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-homeflip-purple hover:text-white transition-colors text-sm sm:text-base">
                Vender Imóvel
              </button>
            </div>
          </div>
        </div>

        {/* Features Section Placeholder */}
        <section className="py-12 sm:py-16 lg:py-20 bg-homeflip-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Por que escolher a HomeFlip?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Oferecemos a melhor experiência em transações imobiliárias
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-homeflip-purple rounded-lg mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <span className="text-white text-xl sm:text-2xl">🏠</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Imóveis Verificados
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Todos os imóveis passam por rigorosa verificação de qualidade
                  e documentação.
                </p>
              </div>

              <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-homeflip-purple rounded-lg mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <span className="text-white text-xl sm:text-2xl">💰</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Melhor Preço
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Garantimos os melhores preços do mercado com transparência
                  total.
                </p>
              </div>

              <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-homeflip-purple rounded-lg mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <span className="text-white text-xl sm:text-2xl">🤝</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Suporte Completo
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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
