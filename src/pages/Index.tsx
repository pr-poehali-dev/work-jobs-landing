import Icon from "@/components/ui/icon";

const TELEGRAM_URL = "#telegram";
const VK_URL = "#vk";

const problems = [
  {
    icon: "Clock",
    title: "Нет времени",
    text: "После работы и ужина остаётся от силы час. Кажется, что дополнительный заработок просто невозможен.",
  },
  {
    icon: "TrendingDown",
    title: "Страх прогореть",
    text: "Вкладывать деньги в «своё дело» страшно. Потеряешь — и семья пострадает. Рисковать нельзя.",
  },
  {
    icon: "BriefcaseBusiness",
    title: "Основная работа страдает",
    text: "Подработки, которые мешают на основном месте — не вариант. Нужно что-то параллельное и незаметное.",
  },
];

const benefits = [
  {
    num: "17+",
    title: "Проверенных способов",
    text: "Только реально работающие варианты без воды и фантастики",
  },
  {
    num: "0 ₽",
    title: "Стартовых вложений",
    text: "Большинство подработок не требуют никаких первоначальных затрат",
  },
  {
    num: "2–3 ч",
    title: "В день достаточно",
    text: "Все варианты рассчитаны на занятых пап с плотным графиком",
  },
  {
    num: "≠ 0",
    title: "Риска потерять деньги",
    text: "Подборка специально отобрана по критерию минимального финансового риска",
  },
];

const steps = [
  { num: "01", text: "Нажимаешь на кнопку и переходишь в удобную соцсеть" },
  { num: "02", text: "Получаешь все 17+ подработок в удобном формате" },
  { num: "03", text: "Выбираешь подходящий вариант и начинаешь уже сегодня" },
];

const Index = () => {
  return (
    <div className="font-golos bg-white text-[hsl(var(--foreground))] min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="relative bg-[hsl(var(--primary))] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-8 animate-fade-in">
            <Icon name="Gift" size={16} className="text-[hsl(var(--accent))]" />
            <span>Бесплатная подборка для работающих пап</span>
          </div>

          <h1 className="font-oswald text-4xl md:text-6xl font-bold uppercase leading-tight mb-6 animate-fade-up">
            Более <span className="text-[hsl(var(--accent))]">17 проверенных</span>{" "}
            подработок для работающих пап
          </h1>

          <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Без риска потерь, без ущерба для семьи и без отрыва от основной работы.
            Реальные способы увеличить доход уже в этом месяце.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <a
              href={TELEGRAM_URL}
              className="inline-flex items-center justify-center gap-3 bg-[hsl(var(--accent))] hover:bg-orange-500 text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <Icon name="Send" size={22} />
              Получить в Telegram
            </a>
            <a
              href={VK_URL}
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-200"
            >
              <Icon name="Users" size={22} />
              Получить ВКонтакте
            </a>
          </div>

          <p className="mt-6 text-white/50 text-sm animate-fade-in delay-500">
            Уже более 3 000 пап получили подборку
          </p>
        </div>
      </section>

      {/* ПРОБЛЕМА */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-red-50 text-red-500 font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              Узнаёшь себя?
            </span>
            <h2 className="font-oswald text-3xl md:text-5xl font-bold uppercase text-[hsl(var(--primary))]">
              Хочешь зарабатывать больше, но…
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((p, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-5">
                  <Icon name={p.icon} fallback="AlertCircle" size={24} className="text-red-400" />
                </div>
                <h3 className="font-semibold text-lg text-[hsl(var(--primary))] mb-2">
                  {p.title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-3 bg-[hsl(var(--primary))]/5 border border-[hsl(var(--primary))]/10 rounded-2xl px-8 py-5">
              <Icon name="Lightbulb" size={24} className="text-[hsl(var(--accent))]" />
              <p className="text-[hsl(var(--primary))] font-medium text-lg">
                Мы нашли решение — и оно работает для занятых пап
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* РЕШЕНИЕ */}
      <section className="py-20 md:py-28 px-6 bg-[hsl(var(--primary))] text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-56 h-56 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/10 border border-white/20 font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Решение
          </span>
          <h2 className="font-oswald text-3xl md:text-5xl font-bold uppercase leading-tight mb-8">
            Подборка из <span className="text-[hsl(var(--accent))]">17+</span> подработок,{" "}
            которые реально работают
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Каждый способ проверен на практике работающими папами. Никакой теории — только
            конкретные шаги, с которых можно начать уже сегодня вечером.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-left">
            {steps.map((s, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/15 rounded-3xl p-6 hover:bg-white/15 transition-colors"
              >
                <div className="font-oswald text-4xl font-bold text-[hsl(var(--accent))] mb-3">
                  {s.num}
                </div>
                <p className="text-white/85 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-50 text-orange-500 font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              Почему это работает
            </span>
            <h2 className="font-oswald text-3xl md:text-5xl font-bold uppercase text-[hsl(var(--primary))]">
              Что внутри подборки
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="font-oswald text-3xl font-bold text-[hsl(var(--accent))]">
                    {b.num}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[hsl(var(--primary))] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                    {b.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-oswald text-3xl md:text-5xl font-bold uppercase text-[hsl(var(--primary))] mb-4">
            Получи подборку{" "}
            <span className="text-[hsl(var(--accent))]">бесплатно</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-lg mb-10">
            Выбери удобную соцсеть — и через минуту у тебя будет весь список
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={TELEGRAM_URL}
              className="group inline-flex items-center justify-center gap-3 bg-[hsl(var(--accent))] hover:bg-orange-500 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <Icon name="Send" size={24} />
              Telegram
              <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={VK_URL}
              className="group inline-flex items-center justify-center gap-3 bg-[hsl(var(--primary))] hover:bg-blue-900 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <Icon name="Users" size={24} />
              ВКонтакте
              <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[hsl(var(--muted-foreground))]">
            <span className="flex items-center gap-2">
              <Icon name="ShieldCheck" size={16} className="text-green-500" />
              Полностью бесплатно
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Zap" size={16} className="text-yellow-500" />
              Доступ мгновенно
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Lock" size={16} className="text-blue-400" />
              Без спама
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-gray-100 text-center">
        <p className="text-[hsl(var(--muted-foreground))] text-sm">
          © 2026 · Подработки для работающих пап
        </p>
      </footer>
    </div>
  );
};

export default Index;