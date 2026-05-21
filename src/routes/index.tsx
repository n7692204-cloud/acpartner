import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Car,
  Wallet,
  Clock,
  Shield,
  TrendingUp,
  Headphones,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Fuel,
  Users,
  Settings2,
  Snowflake,
} from "lucide-react";
import fabiaImg from "@/assets/fabia.png";
import yarisImg from "@/assets/yaris.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AC Partner – Flota Bolt | Zarabiaj jako kierowca" },
      {
        name: "description",
        content:
          "AC Partner – nowoczesna flota Bolt. Dołącz do naszych kierowców, korzystaj z wynajmu aut, atrakcyjnych prowizji i wsparcia 24/7.",
      },
    ],
  }),
});

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
        <Car size={20} />
      </div>
      <span className="text-lg font-semibold tracking-tight">
        AC <span className="text-primary">Partner</span>
      </span>
    </div>
  );
}


function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#oferta", label: "Oferta" },
    { href: "#auta", label: "Auta" },
    { href: "#dlaczego", label: "Dlaczego my" },
    { href: "#jak", label: "Jak zacząć" },
    { href: "#kontakt", label: "Kontakt" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Logo />
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 transition hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 md:inline-block"
        >
          Dołącz do floty
        </a>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-white px-4 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Dołącz do floty
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Oficjalny partner Bolt
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Zarabiaj jako kierowca z{" "}
              <span className="text-primary">AC Partner</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/70">
              Dołącz do nowoczesnej floty Bolt. Oferujemy auta, niskie
              prowizje, szybkie wypłaty i wsparcie kierowcy 24/7.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
              >
                Rozpocznij współpracę
              </a>
              <a
                href="#oferta"
                className="rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                Zobacz ofertę
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <Stat value="500+" label="Kierowców" />
              <Stat value="24/7" label="Wsparcie" />
              <Stat value="48h" label="Start pracy" />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-1">
              <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white">
                <Car size={180} className="text-primary" strokeWidth={1.2} />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-xs text-foreground/60">Średni zarobek</p>
                  <p className="text-lg font-bold">8 000+ zł</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 rounded-2xl border border-border bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-foreground/60">Wypłaty</p>
                  <p className="text-lg font-bold">co tydzień</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-bold text-primary md:text-3xl">{value}</p>
      <p className="mt-1 text-xs text-foreground/60 md:text-sm">{label}</p>
    </div>
  );
}

function Features() {
  const items = [
    {
      icon: Wallet,
      title: "Niska prowizja",
      desc: "Jedne z najlepszych warunków finansowych na rynku. Zatrzymujesz więcej z każdego kursu.",
    },
    {
      icon: Clock,
      title: "Szybkie wypłaty",
      desc: "Wypłaty co tydzień, bez ukrytych opłat. Możliwość wypłaty na żądanie.",
    },
    {
      icon: Car,
      title: "Wynajem auta",
      desc: "Nowoczesna flota aut gotowych do pracy. Pełne ubezpieczenie i serwis w cenie.",
    },
    {
      icon: Shield,
      title: "Pełne ubezpieczenie",
      desc: "OC, AC i NNW. Jeździsz bezpiecznie i bez stresu o niespodziewane koszty.",
    },
    {
      icon: Headphones,
      title: "Wsparcie 24/7",
      desc: "Nasz zespół jest dostępny przez całą dobę. Pomożemy w każdej sytuacji.",
    },
    {
      icon: TrendingUp,
      title: "Wysokie zarobki",
      desc: "Pracuj w godzinach które Ci pasują i osiągaj realne, atrakcyjne zarobki.",
    },
  ];
  return (
    <section id="oferta" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Co oferujemy
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Wszystko czego potrzebujesz, żeby zacząć zarabiać
          </h2>
          <p className="mt-4 text-foreground/70">
            Profesjonalna flota Bolt z kompletem usług dla nowoczesnych
            kierowców.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-2xl border border-border bg-white p-7 transition hover:border-primary hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <it.icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    "Bezpłatna rejestracja i szybki proces wdrożenia",
    "Auta hybrydowe i ekonomiczne w eksploatacji",
    "Indywidualne podejście do każdego kierowcy",
    "Brak ukrytych kosztów – wszystko jasno opisane",
    "Wsparcie w rozliczeniach i dokumentacji",
    "Możliwość pracy w pełnym lub niepełnym wymiarze",
  ];
  return (
    <section id="dlaczego" className="bg-foreground/[0.02] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Dlaczego AC Partner
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Partnerstwo, na którym możesz polegać
            </h2>
            <p className="mt-4 text-foreground/70">
              Jesteśmy zaufanym partnerem Bolt i wspieramy kierowców na
              każdym etapie współpracy. Stawiamy na uczciwość, transparentność
              i nowoczesne podejście.
            </p>
            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-primary"
                    size={20}
                  />
                  <span className="text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                <p className="text-4xl font-bold">98%</p>
                <p className="mt-2 text-sm opacity-90">
                  Zadowolonych kierowców
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-6">
                <p className="text-4xl font-bold text-primary">5★</p>
                <p className="mt-2 text-sm text-foreground/70">
                  Średnia ocena partnerstwa
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl border border-border bg-white p-6">
                <p className="text-4xl font-bold text-primary">3+</p>
                <p className="mt-2 text-sm text-foreground/70">
                  Lata doświadczenia
                </p>
              </div>
              <div className="rounded-2xl bg-foreground p-6 text-white">
                <p className="text-4xl font-bold">100+</p>
                <p className="mt-2 text-sm opacity-90">Aut we flocie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    {
      n: "01",
      title: "Skontaktuj się",
      desc: "Wypełnij formularz lub zadzwoń. Odezwiemy się w ciągu 24 godzin.",
    },
    {
      n: "02",
      title: "Weryfikacja",
      desc: "Sprawdzimy Twoje dokumenty i pomożemy w rejestracji w aplikacji Bolt.",
    },
    {
      n: "03",
      title: "Odbierz auto",
      desc: "Przekażemy Ci auto z floty lub podłączymy Twoje. Wszystko gotowe do pracy.",
    },
    {
      n: "04",
      title: "Zacznij zarabiać",
      desc: "Włącz aplikację i rozpocznij kursy. Pierwsza wypłata już po tygodniu.",
    },
  ];
  return (
    <section id="jak" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Jak zacząć
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            4 kroki do pierwszego kursu
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-border bg-white p-6"
            >
              <span className="text-5xl font-bold text-primary/20">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="kontakt" className="bg-foreground/[0.02] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Kontakt
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Dołącz do AC Partner już dziś
            </h2>
            <p className="mt-4 text-foreground/70">
              Zostaw kontakt — oddzwonimy w ciągu 24 godzin i opowiemy o
              szczegółach współpracy.
            </p>
            <div className="mt-8 space-y-4">
              <ContactItem icon={Phone} label="Telefon" value="+48 500 000 000" />
              <ContactItem icon={Mail} label="E-mail" value="kontakt@acpartner.pl" />
              <ContactItem icon={MapPin} label="Biuro" value="Warszawa, Polska" />
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl border border-border bg-white p-8 shadow-sm"
          >
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Dziękujemy!</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Skontaktujemy się z Tobą w ciągu 24 godzin.
                </p>
              </div>
            ) : (
              <>
                <Field label="Imię i nazwisko" name="name" placeholder="Jan Kowalski" />
                <Field label="Telefon" name="phone" type="tel" placeholder="+48 ..." />
                <Field label="E-mail" name="email" type="email" placeholder="jan@example.com" />
                <label className="mt-4 block text-sm font-medium">
                  Wiadomość
                  <textarea
                    rows={4}
                    placeholder="Powiedz nam coś o sobie..."
                    className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
                >
                  Wyślij zgłoszenie
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="mt-4 block text-sm font-medium first:mt-0">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs text-foreground/60">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <Logo />
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} AC Partner. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}

function Cars() {
  const cars = [
    {
      name: "Skoda Fabia",
      tag: "Ekonomiczna",
      image: fabiaImg,
      desc: "Zwinna, oszczędna i niezawodna. Idealna do miejskich kursów.",
      specs: [
        { icon: Users, label: "4 pasażerów" },
        { icon: Fuel, label: "Benzyna / LPG" },
        { icon: Settings2, label: "Manual" },
        { icon: Snowflake, label: "Klimatyzacja" },
      ],
      price: "od 750 zł / tydzień",
    },
    {
      name: "Toyota Yaris",
      tag: "Hybryda",
      image: yarisImg,
      desc: "Hybrydowy napęd, niskie spalanie i komfort jazdy. Doskonała na długie zmiany.",
      specs: [
        { icon: Users, label: "4 pasażerów" },
        { icon: Fuel, label: "Hybryda" },
        { icon: Settings2, label: "Automat" },
        { icon: Snowflake, label: "Klimatyzacja" },
      ],
      price: "od 950 zł / tydzień",
    },
  ];
  return (
    <section id="auta" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nasza flota
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Auta gotowe do pracy
          </h2>
          <p className="mt-4 text-foreground/70">
            Wybierz auto dopasowane do swojego stylu jazdy. Wszystkie pojazdy
            są w pełni ubezpieczone i serwisowane.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {cars.map((c) => (
            <div
              key={c.name}
              className="group overflow-hidden rounded-3xl border border-border bg-white transition hover:border-primary hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-110"
                />
                <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {c.tag}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{c.name}</h3>
                    <p className="mt-1.5 text-sm text-foreground/70">
                      {c.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {c.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-2 rounded-xl bg-foreground/[0.03] px-3 py-2.5 text-sm"
                    >
                      <s.icon size={16} className="text-primary" />
                      <span className="text-foreground/80">{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-lg font-bold text-primary">
                    {c.price}
                  </span>
                  <a
                    href="#kontakt"
                    className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                  >
                    Wynajmij
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Cars />
        <WhyUs />
        <Steps />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
