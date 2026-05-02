// src/app/components/docs/DocsContent.tsx

export function DocsSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-(--title-color) tracking-[-0.01em]">
        # {title}
      </h2>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

export function DocsCodeBlock({
  code,
  language,
}: {
  code: string;
  language?: string;
}) {
  return (
    <div className="rounded-(--frame-round) border border-white/8 overflow-hidden">
      {language && (
        <span className="block bg-white/5 text-foreground text-[10px] uppercase tracking-widest px-3.5 py-1 opacity-40">
          {language}
        </span>
      )}
      <pre className="bg-background m-0 p-4 overflow-x-auto font-mono text-[13px] leading-[1.6] text-foreground [scrollbar-height:4px] [scrollbar-color:rgba(255,255,255,0.1)_transparent]">
        <code className="font-[inherit] whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}
