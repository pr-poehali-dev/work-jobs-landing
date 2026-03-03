import Icon from "@/components/ui/icon";

const TELEGRAM_URL = "#telegram";
const VK_URL = "#vk";

const IMG_DAD_DESK = "https://cdn.poehali.dev/projects/1b9f9f93-e7be-4d41-af5d-d8e558350a0f/files/45b11f5a-f8dc-4072-a231-900308f570af.jpg";
const IMG_DAD_WORRY = "https://cdn.poehali.dev/projects/1b9f9f93-e7be-4d41-af5d-d8e558350a0f/files/461035ef-dbab-46fd-ac91-c3e5b567897d.jpg";
const IMG_DAD_LAPTOP = "https://cdn.poehali.dev/projects/1b9f9f93-e7be-4d41-af5d-d8e558350a0f/files/d7562ec8-6e8f-4060-ba9d-fdb88caed1bd.jpg";
const IMG_FAMILY = "https://cdn.poehali.dev/projects/1b9f9f93-e7be-4d41-af5d-d8e558350a0f/files/f48d509d-12cb-4bb3-9f0c-35faa4a04d07.jpg";

const audiences = [
  {
    img: IMG_DAD_DESK,
    name: "Алексей, 38 лет",
    role: "Инженер на заводе",
    quote: "Хочу дать семье больше, но после смены нет сил даже думать о подработках",
  },
  {
    img: IMG_DAD_WORRY,
    name: "Максим, 41 год",
    role: "Водитель-дальнобойщик",
    quote: "Боюсь рисковать — потеряю вложенное, семья не поймёт",
  },
  {
    img: IMG_DAD_LAPTOP,
    name: "Сергей, 35 лет",
    role: "Менеджер в офисе",
    quote: "Пробовал онлайн-бизнес, слил деньги. Теперь ищу только проверенное",
  },
];

const stats = [
  { num: "17+", label: "подработок", desc: "Только реально работающие варианты" },
  { num: "0 ₽", label: "вложений", desc: "Большинство без стартового капитала" },
  { num: "2–3 ч", label: "в день", desc: "Для занятых пап с плотным графиком" },
  { num: "3 000+", label: "пап взяли", desc: "Реальные люди, реальные результаты" },
];

const whyPoints = [
  {
    icon: "CheckCircle2",
    title: "Проверено практикой",
    text: "Каждый способ прошёл проверку реальными работающими папами, а не теоретиками",
  },
  {
    icon: "Shield",
    title: "Ноль финансового риска",
    text: "Подборка специально отобрана: варианты без вложений или с минимальным риском",
  },
  {
    icon: "Clock",
    title: "Не мешает основной работе",
    text: "Все способы рассчитаны на 2–3 часа вечером или в выходной день",
  },
  {
    icon: "Heart",
    title: "Семья не пострадает",
    text: "Только те варианты, которые не крадут время у детей и жены",
  },
];

const steps = [
  { num: "1", title: "Выбери канал", text: "Нажми на кнопку Telegram или ВКонтакте" },
  { num: "2", title: "Получи подборку", text: "Все 17+ подработок придут тебе сразу" },
  { num: "3", title: "Начни сегодня", text: "Выбери подходящее и сделай первый шаг" },
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-3 mb-4">
    <div className="h-px flex-1 max-w-12" style={{ background: 'hsl(var(--accent))', opacity: 0.6 }} />
    <span className="badge-pill">{children}</span>
    <div className="h-px flex-1 max-w-12" style={{ background: 'hsl(var(--accent))', opacity: 0.6 }} />
  </div>
);

const Index = () => {
  return (
    <div className="font-montserrat bg-background text-foreground min-h-screen overflow-x-hidden">

      {/* TOP BAR */}
      <div style={{ background: 'hsl(var(--primary))' }} className="py-2 px-6">
        <p className="text-center text-white/70 text-xs tracking-wide uppercase">
          Бесплатная подборка · Только для работающих пап · Мгновенный доступ
        </p>
      </div>

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, hsl(218 68% 18%) 0%, hsl(218 68% 28%) 100%)' }}
      >
        <div
          className="absolute inset-y-0 right-0 w-1/2 opacity-10 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, transparent 40%, hsl(var(--accent)) 100%)' }}
        />
        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <div className="mb-5">
              <span className="badge-pill">Бесплатно</span>
            </div>
            <h1 className="font-oswald text-4xl md:text-5xl font-bold uppercase leading-tight text-white mb-5">
              Более{" "}
              <span style={{ color: 'hsl(var(--accent))' }}>17 проверенных</span>
              {" "}подработок для работающих пап
            </h1>
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md">
              Без риска потерять деньги. Без ущерба для семьи. Без отрыва от основной работы.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href={TELEGRAM_URL} className="btn-primary text-sm">
                <Icon name="Send" size={18} />
                Получить в Telegram
              </a>
              <a href={VK_URL} className="btn-outline text-sm">
                <Icon name="Users" size={18} />
                Получить ВКонтакте
              </a>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-xs">
              <Icon name="Users" size={14} />
              <span>Уже скачали более 3 000 пап</span>
            </div>
          </div>

          <div className="relative hidden md:block animate-fade-in delay-300">
            <div
              className="absolute inset-0 rounded-lg pointer-events-none z-10"
              style={{ background: 'linear-gradient(to top, hsl(218 68% 18%) 0%, transparent 40%)' }}
            />
            <img
              src={IMG_FAMILY}
              alt="Счастливая семья"
              className="rounded-lg w-full object-cover shadow-2xl"
              style={{ height: '420px', objectPosition: 'center top' }}
            />
            <div
              className="absolute bottom-4 left-4 right-4 rounded border px-4 py-3 z-20"
              style={{ background: 'rgba(0,0,0,0.75)', borderColor: 'hsl(var(--accent))' }}
            >
              <p className="text-white text-sm font-semibold">
                «Нашёл 2 подработки. Уже через месяц дал семье то, о чём давно мечтали»
              </p>
              <p className="text-white/50 text-xs mt-1">— Дмитрий, 39 лет, Екатеринбург</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div style={{ background: 'hsl(var(--accent))' }}>
        <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((b, i) => (
            <div key={i} className="text-center">
              <div className="font-oswald text-2xl md:text-3xl font-bold" style={{ color: 'hsl(var(--primary))' }}>
                {b.num}
              </div>
              <div className="text-xs font-bold uppercase tracking-wide text-white/90">{b.label}</div>
              <div className="text-xs text-white/70 mt-0.5 hidden md:block">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* АУДИТОРИЯ — портреты ЦА */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Узнаёшь себя?</SectionLabel>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase" style={{ color: 'hsl(var(--primary))' }}>
              Эта подборка создана для тебя, если…
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <div key={i} className="card-business animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="relative mb-5 overflow-hidden rounded">
                  <img
                    src={a.img}
                    alt={a.name}
                    className="w-full object-cover"
                    style={{ height: '220px', objectPosition: 'center top' }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16"
                    style={{ background: 'linear-gradient(to top, white, transparent)' }}
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'hsl(var(--primary))' }}
                  >
                    <Icon name="User" size={14} className="text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-sm block" style={{ color: 'hsl(var(--primary))' }}>{a.name}</span>
                    <span className="text-xs text-muted-foreground">{a.role}</span>
                  </div>
                </div>
                <p
                  className="text-sm text-muted-foreground leading-relaxed border-l-2 pl-3 italic"
                  style={{ borderColor: 'hsl(var(--accent))' }}
                >
                  «{a.quote}»
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-10 rounded border-l-4 p-6 text-center"
            style={{ background: 'hsl(218 68% 22%)', borderColor: 'hsl(var(--accent))' }}
          >
            <p className="text-white font-semibold text-lg">
              Если хоть один портрет — это ты, значит подборка точно подойдёт
            </p>
          </div>
        </div>
      </section>

      {/* ПОЧЕМУ РАБОТАЕТ */}
      <section className="py-16 md:py-24 px-6" style={{ background: 'hsl(220 20% 96%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Наше решение</SectionLabel>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase" style={{ color: 'hsl(var(--primary))' }}>
              Почему эта подборка работает
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {whyPoints.map((p, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white rounded p-6 border border-border hover:shadow-md transition-shadow"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded flex items-center justify-center"
                  style={{ background: 'hsl(var(--primary))' }}
                >
                  <Icon name={p.icon} fallback="CheckCircle2" size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: 'hsl(var(--primary))' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КАК ПОЛУЧИТЬ */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Три шага</SectionLabel>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase" style={{ color: 'hsl(var(--primary))' }}>
              Как получить подборку
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {steps.map((s, i) => (
              <div key={i} className="text-center animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 font-oswald text-xl font-bold text-white"
                  style={{ background: 'hsl(var(--primary))' }}
                >
                  {s.num}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: 'hsl(var(--primary))' }}>
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded overflow-hidden grid md:grid-cols-2"
            style={{ background: 'hsl(var(--primary))' }}
          >
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h3 className="font-oswald text-2xl md:text-3xl font-bold uppercase text-white leading-tight mb-4">
                Начни зарабатывать{" "}
                <span style={{ color: 'hsl(var(--accent))' }}>больше</span>{" "}
                уже этим вечером
              </h3>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Выбери любой удобный способ — через минуту у тебя будут все 17+ подработок
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={TELEGRAM_URL} className="btn-primary text-sm">
                  <Icon name="Send" size={17} />
                  Telegram
                </a>
                <a href={VK_URL} className="btn-outline text-sm">
                  <Icon name="Users" size={17} />
                  ВКонтакте
                </a>
              </div>
            </div>
            <div className="relative hidden md:block">
              <img
                src={IMG_DAD_LAPTOP}
                alt="Папа работает за ноутбуком"
                className="w-full h-full object-cover"
                style={{ minHeight: '300px' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, hsl(var(--primary)) 0%, transparent 40%)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ГАРАНТИИ */}
      <section style={{ background: 'hsl(220 20% 96%)' }} className="py-10 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {[
              { icon: "ShieldCheck", text: "Полностью бесплатно" },
              { icon: "Zap", text: "Мгновенный доступ" },
              { icon: "Lock", text: "Без спама" },
              { icon: "Star", text: "3 000+ довольных пап" },
            ].map((g, i) => (
              <div key={i} className="flex items-center gap-2">
                <Icon name={g.icon} fallback="Check" size={18} style={{ color: 'hsl(var(--accent))' }} />
                <span className="text-sm font-semibold" style={{ color: 'hsl(var(--primary))' }}>{g.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'hsl(var(--primary))' }} className="py-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">© 2026 · Подработки для работающих пап</p>
          <div className="flex gap-4">
            <a href={TELEGRAM_URL} className="text-white/50 hover:text-white text-xs transition-colors">Telegram</a>
            <a href={VK_URL} className="text-white/50 hover:text-white text-xs transition-colors">ВКонтакте</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
