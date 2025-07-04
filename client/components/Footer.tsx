import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-homeflip-purple text-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[160px] py-[80px]">
        {/* Main Footer Content */}
        <div className="mb-16">
          {/* Logo and Description */}
          <div className="mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/60e6bae0822dc21884ab2d8baa890b681dd5b38f?width=295"
              alt="HomeFlip"
              className="h-[33px] w-[148px] mb-6"
            />
            <p className="font-jakarta text-white text-base leading-[25.6px] opacity-70 max-w-[218px]">
              Lorem ipsum dolor sit amet consectetur. Nec risus quis viverra
              libero tellus eget. Leo morbi faucibus mattis pharetra tellus
              velit ultricies duis rhoncus. Porttitor fermentum eu urna eget.
            </p>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-[88px] max-w-[814px] lg:ml-[289px]">
            {/* Column 1 */}
            <div className="space-y-12">
              {/* Sell A Home */}
              <div>
                <h3 className="font-jakarta font-bold text-base text-white mb-6">
                  VENDER UMA CASA
                </h3>
                <div className="space-y-2">
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Solicitar uma oferta
                  </p>
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Preços
                  </p>
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Avaliações
                  </p>
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Histórias
                  </p>
                </div>
              </div>

              {/* Buy A Home */}
              <div>
                <h3 className="font-jakarta font-bold text-base text-white mb-6">
                  COMPRAR UMA CASA
                </h3>
                <div className="space-y-2">
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Comprar
                  </p>
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Finanças
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-12">
              {/* Buy, Rent and Sell */}
              <div>
                <h3 className="font-jakarta font-bold text-base text-white mb-6">
                  COMPRAR, ALUGAR E VENDER
                </h3>
                <div className="space-y-2">
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Comprar e vender propriedades
                  </p>
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Alugar casa
                  </p>
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Troca de construtor
                  </p>
                </div>
              </div>

              {/* Terms & Privacy */}
              <div>
                <h3 className="font-jakarta font-bold text-base text-white mb-6">
                  TERMOS E PRIVACIDADE
                </h3>
                <div className="space-y-2">
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Confiança e Segurança
                  </p>
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Termos de Serviço
                  </p>
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Política de Privacidade
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-12">
              {/* About */}
              <div>
                <h3 className="font-jakarta font-bold text-base text-white mb-6">
                  SOBRE
                </h3>
                <div className="space-y-2">
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Empresa
                  </p>
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Como funciona
                  </p>
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Contato
                  </p>
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Investidores
                  </p>
                </div>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-jakarta font-bold text-base text-white mb-6">
                  RECURSOS
                </h3>
                <div className="space-y-2">
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Blog
                  </p>
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Guias
                  </p>
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    FAQ
                  </p>
                  <p className="font-jakarta text-base text-white opacity-70 leading-[38px]">
                    Central de Ajuda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="font-jakarta text-base text-white opacity-50 mb-4 lg:mb-0">
              ©2025 HomeFlip. Todos os direitos reservados
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-10 opacity-30">
              <Facebook className="w-6 h-6 fill-current" />
              <Instagram className="w-6 h-6 fill-current" />
              <Twitter className="w-6 h-6 fill-current" />
              <Linkedin className="w-6 h-6 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
