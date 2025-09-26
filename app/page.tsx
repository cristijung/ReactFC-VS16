import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="container">
        <h1>Bem Vindo à PurrfectCare</h1>
        <hr />
        <img
          src="gato.jpg"
          alt="Gato Lindo"
          title="gato Lindo"
          width="200"
          height="auto"
        />
        <hr />

        <Image
          src="/gato.jpg"
          alt="Gato Lindo"
          width={300}
          height={300}
          layout="responsive"
          quality={90}
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/jpg;base64,..."
        />
      </section>
    </>
  );
}
