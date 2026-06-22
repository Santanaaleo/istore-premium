import Image from "next/image";

const navLinks = [
  { label: "iPhones", href: "#modelos" },
  { label: "Acessórios", href: "#modelos" },
  { label: "Garantia", href: "#beneficios" },
  { label: "Contato", href: "#contato" },
];

const trustItems = [
  "Garantia de procedência",
  "Entrega para todo o Brasil",
  "Nota fiscal",
];

const featuredModels = [
  {
    name: "iPhone 13 Pro",
    storage: "128GB",
    battery: "Bateria acima de 85%",
    price: "A partir de R$ 3.899",
    image: "/images/iphone-13pro.png.png",
  },
  {
    name: "iPhone 14 Pro",
    storage: "128GB",
    battery: "Bateria acima de 88%",
    price: "A partir de R$ 4.799",
    image: "/images/iphone-14pro.png.png",
  },
  {
    name: "iPhone 15 Pro",
    storage: "256GB",
    battery: "Bateria acima de 90%",
    price: "A partir de R$ 6.299",
    image: "/images/iphone-15pro.png.png",
  },
  {
    name: "iPhone 16 Pro",
    storage: "256GB",
    battery: "Bateria nova ou seminova",
    price: "A partir de R$ 7.499",
    image: "/images/iphone-16pro.png.png",
  },
];

const benefits = [
  {
    title: "Garantia de Procedência",
    description: "Todos os aparelhos passam por verificação de origem e autenticidade.",
    icon: "shield",
  },
  {
    title: "Aparelhos Revisados",
    description: "Equipamentos avaliados e testados antes da venda.",
    icon: "checklist",
  },
  {
    title: "Envio para Todo Brasil",
    description: "Entrega rápida e segura para qualquer região do país.",
    icon: "truck",
  },
  {
    title: "Suporte Especializado",
    description: "Atendimento dedicado para ajudar antes e depois da compra.",
    icon: "support",
  },
];

const testimonials = [
  {
    quote:
      "Comprei meu iPhone 15 Pro e chegou exatamente como anunciado. Atendimento excelente e entrega rápida.",
    author: "Carlos Henrique",
  },
  {
    quote: "Aparelho impecável, bateria ótima e procedência confirmada. Recomendo.",
    author: "Mariana Silva",
  },
  {
    quote:
      "Primeira vez comprando online um iPhone e fiquei muito satisfeito. Processo simples e seguro.",
    author: "Rafael Costa",
  },
];

const faqs = [
  {
    question: "Os aparelhos são originais?",
    answer:
      "Sim. Todos os modelos são selecionados com verificação de procedência e autenticidade.",
  },
  {
    question: "Possuem garantia?",
    answer: "Sim. Todos os aparelhos contam com garantia e suporte após a compra.",
  },
  {
    question: "Vocês emitem nota fiscal?",
    answer: "Sim. A emissão de nota fiscal pode ser realizada conforme a compra.",
  },
  {
    question: "Fazem envio para todo o Brasil?",
    answer:
      "Sim. Enviamos para todo o Brasil com embalagem segura e acompanhamento do pedido.",
  },
  {
    question: "Como funciona o atendimento?",
    answer:
      "O atendimento é feito de forma personalizada para ajudar na escolha do modelo ideal.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="nav-enter border-b border-white/[0.06] bg-black/80 px-6 py-2 text-center text-[11px] font-medium text-zinc-500 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1">
          {trustItems.map((item, index) => (
            <span key={item} className="flex items-center gap-4">
              <span>✓ {item}</span>
              {index < trustItems.length - 1 ? (
                <span className="hidden h-3 w-px bg-white/10 sm:block" />
              ) : null}
            </span>
          ))}
        </div>
      </div>

      <nav className="nav-enter mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-10 sm:py-6 lg:px-12">
        <a href="#" className="min-w-0 text-lg font-semibold tracking-tight text-white sm:text-[1.35rem]">
           iStore.com.br
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-zinc-300/85 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition duration-300 hover:text-white hover:[text-shadow:0_0_18px_rgba(255,255,255,0.28)]">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#modelos"
          className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10 sm:px-5"
        >
          Ver catálogo
        </a>
      </nav>

      <section className="mx-auto grid min-h-[calc(100vh-121px)] w-full max-w-7xl items-center gap-8 overflow-x-hidden px-5 pb-14 pt-8 sm:gap-12 sm:px-10 sm:pb-18 sm:pt-12 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16 lg:overflow-visible lg:px-12 lg:pb-20 lg:pt-10">
        <div className="w-full max-w-full text-center lg:max-w-3xl lg:text-left">
          <p className="hero-reveal hero-delay-1 mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500 sm:mb-5 sm:text-sm sm:tracking-[0.35em]">
            iStore Premium
          </p>
          <h1 className="hero-reveal hero-delay-2 mx-auto max-w-full overflow-hidden break-normal text-5xl font-semibold leading-[0.9] tracking-[-0.07em] text-white min-[430px]:text-[3.35rem] sm:text-6xl sm:leading-[0.92] lg:mx-0 lg:text-7xl xl:text-[5rem]">
            Seu próximo
            <br />
            <span>iPhone começa aqui.</span>
          </h1>
          <p className="hero-reveal hero-delay-3 mx-auto mt-6 max-w-[500px] text-base leading-7 text-zinc-400 sm:mt-8 sm:text-xl sm:leading-8 lg:mx-0">
            Modelos selecionados com garantia, procedência e entrega para todo o Brasil.
          </p>

          <div className="hero-reveal hero-delay-4 mt-8 flex flex-col justify-center gap-3 min-[390px]:flex-row sm:mt-11 sm:gap-4 lg:justify-start">
            <a
              href="#modelos"
              className="rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 hover:shadow-[0_14px_35px_rgba(255,255,255,0.16)] sm:px-8 sm:py-4 sm:text-base"
            >
              Comprar agora
            </a>
            <a
              href="#modelos"
              className="rounded-full border border-white/15 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base"
            >
              Ver modelos
            </a>
          </div>
        </div>

        <div className="hero-product-enter relative flex min-h-[310px] w-full max-w-full items-center justify-center overflow-hidden sm:min-h-[390px] sm:overflow-visible lg:min-h-[520px]">
          <div className="absolute h-44 w-32 rounded-full bg-white/[0.07] blur-xl sm:h-60 sm:w-44 lg:h-72 lg:w-48" />
          <div className="iphone-float relative h-[326px] w-[245px] rotate-[7deg] drop-shadow-[0_28px_58px_rgba(255,255,255,0.14)] sm:h-[491px] sm:w-[369px] sm:rotate-[10deg] lg:h-[580px] lg:w-[435px]">
            <Image
              src="/images/iphone-16pro.png.png"
              alt="iPhone em destaque"
              fill
              priority
              sizes="(max-width: 640px) 245px, (max-width: 1024px) 369px, 435px"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section id="modelos" className="section-reveal mx-auto w-full max-w-7xl px-5 pb-20 sm:px-10 sm:pb-24 lg:px-12">
        <div className="mb-10 flex flex-col gap-3 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-600">
            Seleção Premium
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Modelos em destaque
          </h2>
        </div>

        <div className="mobile-carousel -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {featuredModels.map((model) => (
            <article
              key={model.name}
              className="group w-[82vw] max-w-[360px] shrink-0 snap-start rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-4 transition duration-300 active:scale-[0.985] hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_24px_80px_rgba(255,255,255,0.1)] sm:w-auto sm:max-w-none sm:shrink sm:active:scale-100"
            >
              <div className="mb-5 flex h-56 items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-white/[0.09] to-white/[0.025] transition duration-300 group-hover:from-white/[0.12] group-hover:to-white/[0.035] sm:h-72 lg:h-64 xl:h-72">
                <Image
                  src={model.image}
                  alt={`Imagem do ${model.name}`}
                  width={280}
                  height={365}
                  sizes="(max-width: 640px) 76vw, (max-width: 1024px) 42vw, 270px"
                  className="h-[92%] w-auto object-contain drop-shadow-[0_18px_36px_rgba(255,255,255,0.13)] transition duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_22px_46px_rgba(255,255,255,0.22)]"
                />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white">{model.name}</h3>
              <div className="mt-4 space-y-2 text-sm text-zinc-500">
                <p>{model.storage}</p>
                <p>{model.battery}</p>
              </div>
              <p className="mt-6 text-base font-semibold text-zinc-200">{model.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="beneficios" className="section-reveal mx-auto w-full max-w-7xl px-5 pb-24 sm:px-10 sm:pb-28 lg:px-12">
        <div className="mb-10 flex flex-col gap-3 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-600">
            Por que comprar aqui
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Benefícios
          </h2>
        </div>

        <div className="mobile-carousel -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group w-[82vw] max-w-[360px] shrink-0 snap-start rounded-[1.85rem] border border-white/[0.08] bg-white/[0.035] p-6 transition duration-300 active:scale-[0.985] hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_24px_70px_rgba(255,255,255,0.08)] sm:w-auto sm:max-w-none sm:shrink sm:p-7 sm:active:scale-100"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white transition duration-300 group-hover:border-white/25 group-hover:bg-white/[0.1] group-hover:shadow-[0_0_34px_rgba(255,255,255,0.12)] sm:mb-9">
                {benefit.icon === "shield" ? (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3.5 19 6v5.25c0 4.25-2.7 7.95-7 9.25-4.3-1.3-7-5-7-9.25V6l7-2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="m9.25 12 1.85 1.85 3.9-4.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : null}
                {benefit.icon === "checklist" ? (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M8 6.5h10M8 12h10M8 17.5h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="m4.5 6.5.65.65L6.5 5.75M4.5 12l.65.65 1.35-1.4M4.5 17.5l.65.65 1.35-1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : null}
                {benefit.icon === "truck" ? (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3.5 6.5h11v9h-11v-9ZM14.5 10h3.25l2.75 3v2.5h-6v-5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M7 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                ) : null}
                {benefit.icon === "support" ? (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12a7 7 0 0 1 14 0v3.5a2 2 0 0 1-2 2h-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M5 12v3M19 12v3M8.5 12.5v2.25M15.5 12.5v2.25M10.5 18h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                ) : null}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white transition duration-300 group-hover:text-white">
                {benefit.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-500 transition duration-300 group-hover:text-zinc-300">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="depoimentos" className="section-reveal mx-auto w-full max-w-7xl px-5 pb-24 sm:px-10 sm:pb-28 lg:px-12">
        <div className="mb-10 flex flex-col gap-3 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-600">
            Seleção Premium
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="mobile-carousel -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              className="w-[82vw] max-w-[360px] shrink-0 snap-start rounded-[1.85rem] border border-white/[0.08] bg-white/[0.035] p-6 transition duration-300 active:scale-[0.985] hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.055] hover:shadow-[0_24px_70px_rgba(255,255,255,0.08)] md:w-auto md:max-w-none md:shrink md:p-7 md:active:scale-100"
            >
              <div className="mb-7 text-sm tracking-[0.28em] text-white">★★★★★</div>
              <p className="text-base leading-7 text-zinc-300">{testimonial.quote}</p>
              <p className="mt-8 text-sm font-semibold text-white">— {testimonial.author}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="section-reveal mx-auto w-full max-w-7xl px-6 pb-28 sm:px-10 lg:px-12">
        <div className="mb-10 flex flex-col gap-3 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-600">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-4 lg:mx-0">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group cursor-pointer rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] transition duration-300 hover:border-white/18 hover:bg-white/[0.05]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-left text-lg font-semibold tracking-tight text-white">
                {faq.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition duration-300 group-open:rotate-45 group-hover:text-white">
                  +
                </span>
              </summary>
              <div className="grid transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr] grid-rows-[0fr]">
                <div className="overflow-hidden px-6 pb-6">
                  <p className="max-w-3xl text-sm leading-7 text-zinc-500">{faq.answer}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section-reveal mx-auto w-full max-w-7xl px-6 pb-28 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-white/[0.035] px-6 py-16 text-center sm:px-10 lg:py-24">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.08] blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
              Pronto para trocar de iPhone?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
              Modelos selecionados com garantia, procedência e entrega rápida para todo o Brasil.
            </p>
            <a
              href="#modelos"
              className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 hover:shadow-[0_16px_40px_rgba(255,255,255,0.16)]"
            >
              Ver catálogo completo
            </a>
          </div>
        </div>
      </section>

      <footer id="contato" className="border-t border-white/[0.08] px-6 py-10 sm:px-10 lg:px-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <a href="#" className="text-xl font-semibold tracking-tight text-white">
              iStore.com.br
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-600">
              iPhones selecionados com visual premium, procedência e atendimento próximo.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-semibold text-white">Links</p>
              <div className="flex flex-col gap-3 text-sm text-zinc-500">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold text-white">Contato</p>
              <div className="flex flex-col gap-3 text-sm text-zinc-500">
                <a href="#" className="transition hover:text-white">
                  WhatsApp
                </a>
                <a href="#" className="transition hover:text-white">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 w-full max-w-7xl border-t border-white/[0.06] pt-6 text-sm text-zinc-600">
          © 2026 iStore. Todos os direitos reservados.
        </div>
      </footer>

      <a
        href="https://wa.me/5511930071851?text=Ol%C3%A1!%20Vi%20o%20site%20da%20iStore%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20iPhones%20dispon%C3%ADveis."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="whatsapp-float group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_36px_rgba(37,211,102,0.28)] transition duration-300 hover:scale-105 hover:shadow-[0_18px_42px_rgba(37,211,102,0.36)] focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:ring-offset-2 focus:ring-offset-black sm:bottom-6 sm:right-6 sm:h-[60px] sm:w-[60px]"
      >
        <span className="pointer-events-none absolute right-[calc(100%+12px)] hidden whitespace-nowrap rounded-full border border-white/10 bg-zinc-950/90 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block md:translate-x-2">
          Fale conosco
        </span>
        <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M16.04 3C9.03 3 3.32 8.68 3.32 15.66c0 2.23.59 4.41 1.7 6.33L3.2 28.61l6.82-1.78a12.8 12.8 0 0 0 6.02 1.51h.01c7.01 0 12.72-5.68 12.72-12.66C28.77 8.68 23.06 3 16.04 3Zm0 23.18h-.01c-1.91 0-3.78-.51-5.42-1.47l-.39-.23-4.05 1.06 1.08-3.93-.25-.4a10.48 10.48 0 0 1-1.61-5.55c0-5.78 4.78-10.49 10.66-10.49 2.85 0 5.53 1.1 7.54 3.09a10.37 10.37 0 0 1 3.12 7.41c0 5.79-4.78 10.51-10.67 10.51Zm5.84-7.86c-.32-.16-1.9-.93-2.19-1.04-.3-.11-.51-.16-.73.16-.21.32-.84 1.04-1.03 1.26-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.58-1.58a9.7 9.7 0 0 1-1.78-2.21c-.19-.32-.02-.49.14-.65.14-.14.32-.38.49-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.57-.08-.16-.73-1.74-1-2.38-.26-.62-.53-.54-.73-.55h-.62c-.21 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.68 0 1.58 1.16 3.11 1.32 3.33.16.21 2.28 3.46 5.52 4.86.77.33 1.37.53 1.84.68.77.24 1.48.21 2.04.13.62-.09 1.9-.77 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.14-.29-.22-.62-.38Z" />
        </svg>
      </a>
    </main>
  );
}
