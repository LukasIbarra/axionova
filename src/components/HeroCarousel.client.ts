// src/components/HeroCarousel.client.ts
export function initHeroCarousel(root: HTMLElement | Document): void {
  const parent = (root as unknown as ParentNode);

  const slideEls = Array.from(parent.querySelectorAll<HTMLElement>(".hero-slide"));
  const indicatorEls = Array.from(parent.querySelectorAll<HTMLButtonElement>(".hero-indicator"));
  const prevBtn = parent.querySelector<HTMLButtonElement>("#hero-prev");
  const nextBtn = parent.querySelector<HTMLButtonElement>("#hero-next");

  // si no hay DOM del hero aún, salimos
  if (!slideEls.length || !prevBtn || !nextBtn) return;

  // evita doble inicialización
  const hero = (parent instanceof Document ? parent.getElementById("hero") : parent) as HTMLElement | null;
  if (hero?.dataset.bound === "1") return;
  if (hero) hero.dataset.bound = "1";

  let i = 0;

  function paintActive(): void {
    slideEls.forEach((el, idx) => el.classList.toggle("is-active", idx === i));
    indicatorEls.forEach((el, idx) => {
      el.classList.remove("bg-orange-500", "bg-white/50");
      el.classList.add(idx === i ? "bg-orange-500" : "bg-white/50");
      el.setAttribute("aria-selected", idx === i ? "true" : "false");
    });
  }

  function go(n: number): void {
    i = (n + slideEls.length) % slideEls.length;
    paintActive();
  }

  function next(): void { go(i + 1); }
  function prev(): void { go(i - 1); }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);
  indicatorEls.forEach((btn, idx) => btn.addEventListener("click", () => go(idx)));

  // Soporte navegación SPA de Astro
  const onPageLoad = () => {
    // re-pinta por si hubo hydration
    paintActive();
  };
  window.addEventListener("astro:page-load", onPageLoad);

  paintActive();
}
