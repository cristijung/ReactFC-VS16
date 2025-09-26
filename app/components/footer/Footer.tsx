import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">          
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors">
              PurrfectCare
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Cuidando dos seus melhores amigos.
            </p>
          </div>

          <div className="flex flex-col mb-6 md:mb-0 md:flex-row md:space-x-8">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-white mb-2">Empresa</h4>
              <ul>
                <li><Link href="/sobre" className="text-sm hover:text-indigo-400 transition-colors">Sobre Nós</Link></li>
                <li><Link href="/servicos" className="text-sm hover:text-indigo-400 transition-colors">Serviços</Link></li>
                <li><Link href="/blog" className="text-sm hover:text-indigo-400 transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Ajuda</h4>
              <ul>
                <li><Link href="/faq" className="text-sm hover:text-indigo-400 transition-colors">FAQ</Link></li>
                <li><Link href="/contato" className="text-sm hover:text-indigo-400 transition-colors">Contato</Link></li>
                <li><Link href="/termos" className="text-sm hover:text-indigo-400 transition-colors">Termos de Uso</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-lg font-semibold text-white mb-2">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-indigo-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 10H12V8H14C15.1046 8 16 8.89543 16 10V14C16 15.1046 15.1046 16 14 16H12C10.8954 16 10 15.1046 10 14V10C10 8.89543 10.8954 8 12 8H14Z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-indigo-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.46 6c-.77.34-1.6.56-2.46.68.88-.53 1.56-1.37 1.88-2.37-.83.5-1.75.86-2.72 1.05-.78-.83-1.89-1.35-3.13-1.35-2.36 0-4.28 1.9-4.28 4.25 0 .33.04.65.1.96-3.55-.18-6.7-1.87-8.8-4.47-.36.6-.56 1.3-.56 2.04 0 1.47.75 2.76 1.89 3.52-.7-.02-1.36-.22-1.95-.5v.05c0 2.06 1.46 3.78 3.39 4.18-.35.1-.73.15-1.12.15-.27 0-.53-.02-.79-.08.54 1.68 2.1 2.91 3.96 2.95-1.46 1.14-3.3 1.82-5.3 1.82-.34 0-.68-.02-1.01-.06C2.9 20.82 4.97 21.5 7.2 21.5c8.63 0 13.35-7.14 13.35-13.35 0-.2-.01-.4-.02-.6.91-.67 1.7-1.5 2.3-2.45z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-indigo-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07c1.46.073 2.19.349 2.686.546.592.23.993.593 1.348.948.356.355.718.756.948 1.348.197.496.473 1.226.546 2.686.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.073 1.46-.349 2.19-.546 2.686-.23.592-.593.993-.948 1.348-.355.356-.756.718-1.348.948-.197-.496-.473-1.226-.546-2.686-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.073-1.46.349-2.19.546-2.686.23-.592.593-.993.948-1.348.355-.356.756-.718 1.348-.948.496-.197 1.226-.473 2.686-.546 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.25 0-3.67.012-4.91.071-1.63.08-2.61.378-3.41.696-.9.352-1.64.887-2.38 1.628-1.52 1.522-1.89 3.522-2.1 6.551-.02 0-.02.04-.04.04-.01.01-.02.02-.02.04v.04c0 1.25.01 1.67.07 4.91.08 1.63.378 2.61.696 3.41.352.9.887 1.64 1.628 2.38 1.522 1.52 3.522 1.89 6.551 2.1.02 0 .02-.04.04-.04.01-.01.02-.02.02-.04v-.04c1.25 0 1.67-.01 4.91-.07.08-1.63.378-2.61.696-3.41.352-.9.887-1.64 1.628-2.38 1.52-1.522 1.89-3.522 2.1-6.551.02 0 .02-.04.04-.04.01-.01.02-.02.02-.04v-.04c0-1.25-.01-1.67-.07-4.91-.08-1.63-.378-2.61-.696-3.41-.352-.9-.887-1.64-1.628-2.38-1.52-1.52-3.52-1.89-6.55-2.1-.02 0-.02-.04-.04-.04-.01-.01-.02-.02-.02-.04v-.04c-1.25 0-1.67.01-4.91.07zm0 2.163c.04 0 .04-.02 0 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} PurrfectCare. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
