export const MembrosHome = () => {
  return (
    <section className="w-full bg-black py-12">
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
          <button className="animated-button">
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span className="text allerta-stencil-title text-2xl">ESQUADRÃO F-PAINTBALL</span>
            <span className="circle"></span>
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
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