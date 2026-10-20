import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays, BookOpen, CheckCircle2, RefreshCw, Target, BarChart3, Clock, ListChecks,
  Repeat, TrendingUp, GraduationCap, ClipboardCheck, Stethoscope, BookMarked, ShieldCheck, Check,
  type LucideIcon,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import hero from "@/assets/hero-planner.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cronograma de Estudos para Enfermagem" },
      { name: "description", content: "Organize seus estudos de enfermagem com planejamento semanal, revisões e acompanhamento do progresso." },
      { property: "og:title", content: "Cronograma de Estudos para Enfermagem" },
      { property: "og:description", content: "Organize seus estudos de enfermagem com planejamento semanal, revisões e acompanhamento do progresso." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Item = { icon: LucideIcon; t: string; d: string };

const conteudo: Item[] = [
  { icon: CalendarDays, t: "Planejamento semanal", d: "Organize os conteúdos que deseja estudar ao longo da semana." },
  { icon: BookOpen, t: "Organização por matérias", d: "Distribua os temas de enfermagem conforme suas prioridades." },
  { icon: CheckCircle2, t: "Checklist de tarefas", d: "Marque os conteúdos estudados e acompanhe o que já foi concluído." },
  { icon: RefreshCw, t: "Planejamento de revisões", d: "Reserve momentos para retomar os conteúdos já estudados." },
  { icon: Target, t: "Metas de estudo", d: "Defina objetivos realistas para sua rotina de aprendizagem." },
  { icon: BarChart3, t: "Acompanhamento do progresso", d: "Visualize sua evolução e identifique o que precisa de mais atenção." },
];
const beneficios: Item[] = [
  { icon: Clock, t: "Melhor organização do tempo", d: "Distribua suas atividades de estudo conforme sua disponibilidade." },
  { icon: ListChecks, t: "Mais clareza na rotina", d: "Saiba quais conteúdos pretende estudar em cada período." },
  { icon: Repeat, t: "Revisões planejadas", d: "Inclua revisões periódicas para reforçar o aprendizado." },
  { icon: TrendingUp, t: "Consistência nos estudos", d: "Acompanhe suas metas e ajuste o planejamento quando necessário." },
];
const publico: Item[] = [
  { icon: GraduationCap, t: "Estudantes de enfermagem", d: "Para organizar os conteúdos da faculdade e planejar revisões." },
  { icon: ClipboardCheck, t: "Candidatos a concursos", d: "Para estruturar a preparação de acordo com o edital e a data da prova." },
  { icon: Stethoscope, t: "Técnicos de enfermagem", d: "Para planejar estudos complementares e revisões de conteúdos." },
  { icon: BookMarked, t: "Quem precisa retomar os estudos", d: "Para criar uma rotina organizada mesmo com pouco tempo disponível." },
];
const passos = [
  ["Defina sua disponibilidade", "Identifique os dias e horários que você pode dedicar aos estudos."],
  ["Organize os conteúdos", "Distribua as matérias de acordo com suas prioridades e objetivos."],
  ["Siga seu planejamento", "Utilize o cronograma como guia para suas sessões de estudo."],
  ["Acompanhe e ajuste", "Marque as tarefas concluídas e adapte o plano conforme sua evolução."],
];
const faq = [
  ["Como vou receber o cronograma?", "Em breve informaremos os detalhes de entrega."],
  ["O material é digital?", "Sim, o cronograma é um produto digital."],
  ["O cronograma pode ser personalizado?", "Em breve informaremos os detalhes."],
  ["Ele serve para estudar para concursos de enfermagem?", "Pode ser utilizado como ferramenta de organização. A distribuição dos conteúdos deve considerar o edital, as prioridades e a data da prova."],
  ["Posso usar o cronograma pelo celular?", "Em breve informaremos os detalhes."],
  ["Preciso estudar várias horas por dia?", "A rotina deve considerar sua disponibilidade. O ideal é definir metas realistas e manter uma frequência de estudos compatível com seus objetivos."],
  ["Qual é o valor do cronograma?", "O valor será divulgado em breve."],
];

function Cta({ children }: { children: string }) {
  return (
    <a href="#compra" className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-bold tracking-wide text-accent-foreground shadow-glow transition hover:-translate-y-0.5 hover:brightness-110">
      {children}
    </a>
  );
}

function Head({ t, s, dark }: { t: string; s?: string; dark?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className={`text-3xl font-bold md:text-4xl ${dark ? "text-primary-foreground" : "text-primary"}`}>{t}</h2>
      {s && <p className={`mt-4 text-lg ${dark ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{s}</p>}
    </div>
  );
}

function Cards({ items, cols }: { items: Item[]; cols: string }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${cols}`}>
      {items.map(({ icon: I, t, d }) => (
        <div key={t} className="rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:border-accent">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-primary"><I className="h-6 w-6" /></div>
          <h3 className="text-lg font-semibold text-primary">{t}</h3>
          <p className="mt-2 text-muted-foreground">{d}</p>
        </div>
      ))}
    </div>
  );
}

function Index() {
  return (
    <main>
      <section className="bg-dark-gradient text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-accent/40 px-4 py-1 text-sm text-accent">Cronograma de Estudos para Enfermagem</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">Organize Seus Estudos de Enfermagem de Uma Vez por Todas</h1>
            <p className="mt-5 text-xl font-medium text-accent">Tenha um plano para estudar com mais organização e consistência.</p>
            <p className="mt-4 text-primary-foreground/75">Um cronograma de estudos pensado para ajudar você a distribuir os conteúdos, planejar revisões e acompanhar sua rotina de preparação em enfermagem.</p>
            <ul className="mt-6 space-y-2">
              {["Organização da rotina de estudos", "Planejamento semanal", "Acompanhamento do progresso"].map((x) => (
                <li key={x} className="flex items-center gap-3"><Check className="h-5 w-5 text-accent" />{x}</li>
              ))}
            </ul>
            <div className="mt-8"><Cta>QUERO ORGANIZAR MEUS ESTUDOS</Cta></div>
          </div>
          <img src={hero} alt="Planner digital de estudos em notebook, tablet e celular" width={1280} height={960} className="rounded-3xl shadow-soft" />
        </div>
      </section>

      <section id="conteudo" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Head t="O que você vai encontrar?" s="Recursos para planejar seus estudos de forma mais clara e organizada." />
          <Cards items={conteudo} cols="lg:grid-cols-3" />
          <div className="mt-12 text-center"><Cta>QUERO MEU CRONOGRAMA</Cta></div>
        </div>
      </section>

      <section className="bg-muted px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Head t="Estude com mais organização e direção" s="Uma rotina planejada pode ajudar você a aproveitar melhor o tempo disponível." />
          <Cards items={beneficios} cols="lg:grid-cols-4" />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Head t="Para quem é este cronograma?" />
          <Cards items={publico} cols="lg:grid-cols-4" />
        </div>
      </section>

      <section className="bg-muted px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Head t="Como começar a usar?" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map(([t, d], i) => (
              <div key={t} className="rounded-2xl bg-card p-7 shadow-soft">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">{i + 1}</div>
                <h3 className="text-lg font-semibold text-primary">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compra" className="bg-dark-gradient px-6 py-20">
        <Head dark t="Dê o primeiro passo para organizar seus estudos" s="Tenha um plano de estudos para sua jornada na enfermagem." />
        <div className="mx-auto max-w-md rounded-3xl bg-card p-8 text-center shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Produto digital</p>
          <h3 className="mt-2 text-2xl font-bold text-primary">Cronograma de Estudos para Enfermagem</h3>
          <ul className="my-6 space-y-3 text-left">
            {["Apoio ao planejamento da rotina", "Organização dos conteúdos de estudo", "Espaço para acompanhar tarefas e metas", "Planejamento de revisões"].map((x) => (
              <li key={x} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />{x}</li>
            ))}
          </ul>
          <p className="mb-6 text-3xl font-extrabold text-primary">R$ --,--</p>
          <Cta>QUERO GARANTIR MEU CRONOGRAMA</Cta>
        </div>
      </section>

      <section className="px-6 pt-20">
        <div className="mx-auto flex max-w-3xl items-center gap-6 rounded-2xl border border-border bg-card p-8 shadow-soft">
          <ShieldCheck className="h-12 w-12 shrink-0 text-accent" />
          <div>
            <h2 className="text-2xl font-bold text-primary">Compre com tranquilidade</h2>
            <p className="mt-1 text-muted-foreground">Informações claras sobre pagamento, entrega e suporte.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <Head t="Dúvidas frequentes" />
          <Accordion type="single" collapsible className="rounded-2xl bg-card px-6 shadow-soft">
            {faq.map(([q, a]) => (
              <AccordionItem key={q} value={q}>
                <AccordionTrigger className="text-left font-semibold text-primary">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-dark-gradient px-6 py-20 text-center">
        <Head dark t="Seus objetivos merecem um plano" s="Organize sua rotina, distribua os conteúdos e dê mais clareza à sua preparação em enfermagem." />
        <Cta>QUERO COMEÇAR A ME ORGANIZAR</Cta>
      </section>

      <footer className="bg-secondary px-6 py-8 text-sm text-secondary-foreground/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p>© 2026 Cronograma de Estudos para Enfermagem</p>
          <nav className="flex gap-6">
            {["Termos de uso", "Política de privacidade", "Contato"].map((x) => <a key={x} href="#" className="hover:text-accent">{x}</a>)}
          </nav>
        </div>
      </footer>
    </main>
  );
}
