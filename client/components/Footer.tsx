import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-homeflip-purple text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[160px] py-12 sm:py-16 lg:py-[80px]">
        {/* Main Footer Content */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          {/* Logo and Description */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/60e6bae0822dc21884ab2d8baa890b681dd5b38f?width=295"
              alt="HomeFlip"
              className="h-7 w-auto sm:h-8 lg:h-[33px] mb-4 sm:mb-6"
            />
            <p className="font-jakarta text-white text-sm sm:text-base leading-relaxed lg:leading-[25.6px] opacity-70 max-w-[280px] sm:max-w-[218px]">
              Lorem ipsum dolor sit amet consectetur. Nec risus quis viverra
              libero tellus eget. Leo morbi faucibus mattis pharetra tellus
              velit ultricies duis rhoncus. Porttitor fermentum eu urna eget.
            </p>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-[88px] max-w-none lg:max-w-[814px] lg:ml-[289px]">
            {/* Column 1 */}
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              {/* Sell A Home */}
              <div>
                <h3 className="font-jakarta font-bold text-sm sm:text-base text-white mb-4 sm:mb-6">
                  VENDER UMA CASA
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Solicitar uma oferta
                  </p>
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Preços
                  </p>
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Avaliações
                  </p>
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Histórias
                  </p>
                </div>
              </div>

              {/* Buy A Home */}
              <div>
                <h3 className="font-jakarta font-bold text-sm sm:text-base text-white mb-4 sm:mb-6">
                  COMPRAR UMA CASA
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Comprar
                  </p>
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Finanças
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              {/* Buy, Rent and Sell */}
              <div>
                <h3 className="font-jakarta font-bold text-sm sm:text-base text-white mb-4 sm:mb-6">
                  COMPRAR, ALUGAR E VENDER
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Comprar e vender propriedades
                  </p>
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Alugar casa
                  </p>
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Troca de construtor
                  </p>
                </div>
              </div>

              {/* Terms & Privacy */}
              <div>
                <h3 className="font-jakarta font-bold text-sm sm:text-base text-white mb-4 sm:mb-6">
                  TERMOS E PRIVACIDADE
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Confiança e Segurança
                  </p>
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Termos de Serviço
                  </p>
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Política de Privacidade
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              {/* About */}
              <div>
                <h3 className="font-jakarta font-bold text-sm sm:text-base text-white mb-4 sm:mb-6">
                  SOBRE
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Empresa
                  </p>
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Como funciona
                  </p>
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Contato
                  </p>
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Investidores
                  </p>
                </div>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-jakarta font-bold text-sm sm:text-base text-white mb-4 sm:mb-6">
                  RECURSOS
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Blog
                  </p>
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Guias
                  </p>
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    FAQ
                  </p>
                  <p className="font-jakarta text-sm sm:text-base text-white opacity-70 leading-8 sm:leading-[38px]">
                    Central de Ajuda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-jakarta text-sm sm:text-base text-white opacity-50 text-center sm:text-left">
              ©2025 HomeFlip. Todos os direitos reservados
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-6 sm:gap-10 opacity-30">
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6 fill-current hover:opacity-70 transition-opacity cursor-pointer" />
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 fill-current hover:opacity-70 transition-opacity cursor-pointer" />
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 fill-current hover:opacity-70 transition-opacity cursor-pointer" />
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 fill-current hover:opacity-70 transition-opacity cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
