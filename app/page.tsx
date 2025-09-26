import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título e Subtítulo */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
              Bem-vindo à PurrfectCare
            </h1>
            <p className="text-lg text-gray-600">
              Cuidado e carinho para o seu melhor amigo.
            </p>
          </div>

          {/* Banner Principal com Imagem Otimizada */}
          <div className="relative overflow-hidden rounded-xl shadow-2xl mb-12">
            <Image
              src="/gato.jpg"
              alt="Gato Lindo em destaque"
              width={1600}
              height={900}
              layout="responsive"
              objectFit="cover"
              quality={90}
              priority={true}
            />
          </div>

          <hr className="my-12 border-t-2 border-gray-200" />

          {/* Seção com Imagem de Perfil */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/gato.jpg"
                alt="Um adorável gato"
                width={200}
                height={200}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-gray-900">
              Nosso Time de Especialistas
            </h2>
            <p className="mt-2 text-md text-gray-500 max-w-lg text-center">
              Conheça a equipe dedicada a cuidar da saúde e do bem-estar do seu animal de estimação.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}