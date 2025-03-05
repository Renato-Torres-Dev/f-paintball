export const MembrosHome = () => {
  return (
    <section className="w-full bg-black">
      <div className="container flex justify-center">
        <h1 className="text-4xl allerta-stencil-title text-center text-white-600 mb-8">
          Esquadrão F-Paintball
        </h1>
      </div>
      <div className="container flex gap-6 lg:gap-12 flex-col lg:flex-row py-4">
        <div className="px-2">
          <h2 className="text-white my-6 text-2xl allerta-stencil leading-8 sm:text-md">
            No cenário de Pernambuco, o esquadrão do F-Paintball está surgindo, e nele, somos iniciantes e apaixonados pelo esporte e arte do Paintball.<br></br>
            Aqui estamos apresentando um pouco do nosso time, com suas patentes, basta clicar abaixo e nos conhecer!
          </h2>
          <button className="button">
            <p className="text-lg allerta-stencil">ESQUADRÃO F-PAINTBALL</p>
          </button>
        </div>
        <div className="px-2">
          <img 
            className="rounded-xl max-w-full max-h-full"
            src="/images/img00001.png"
          />
        </div>
      </div>
    </section>
  )
}