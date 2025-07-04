import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center bg-homeflip-light">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl font-bold text-homeflip-purple mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Página não encontrada
          </h2>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link
            to="/"
            className="inline-block bg-homeflip-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Voltar ao início
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
