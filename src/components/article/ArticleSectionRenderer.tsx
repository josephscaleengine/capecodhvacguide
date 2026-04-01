import { ReactNode } from "react";
import { CheckCircle, Lightbulb, AlertTriangle } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface ArticleSection {
  heading: string;
  content: string;
}

interface ArticleSectionRendererProps {
  content: string;
  enhancements?: Record<number, ReactNode>;
}

function parseMarkdownSections(md: string): ArticleSection[] {
  const lines = md.trim().split("\n");
  const sections: ArticleSection[] = [];
  let currentHeading = "";
  let currentLines: string[] = [];

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (currentHeading || currentLines.length > 0) {
        sections.push({ heading: currentHeading, content: currentLines.join("\n").trim() });
      }
      currentHeading = line.replace("## ", "").trim();
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }
  if (currentHeading || currentLines.length > 0) {
    sections.push({ heading: currentHeading, content: currentLines.join("\n").trim() });
  }
  return sections;
}

const bgPatterns = [
  "bg-background",
  "bg-blush",
  "bg-background",
  "bg-yellow-accent/10",
  "bg-background",
  "bg-blush",
  "bg-background",
  "bg-yellow-accent/10",
];

const SectionMarkdown = ({ content }: { content: string }) => (
  <ReactMarkdown
    components={{
      h3: ({ children }) => (
        <h3 className="text-xl md:text-2xl font-semibold text-primary mt-4 mb-3 leading-tight">{children}</h3>
      ),
      p: ({ children }) => {
        const text = String(children);
        if (text.startsWith("*") && text.endsWith("*") && text.length > 10) {
          return (
            <div className="my-4 p-5 rounded-xl bg-yellow-accent/30 border border-yellow-accent/50 flex gap-3">
              <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground leading-relaxed text-base italic">{children}</p>
            </div>
          );
        }
        return <p className="text-foreground leading-[1.75] mb-5 text-base md:text-[17px]">{children}</p>;
      },
      strong: ({ children }) => (
        <strong className="text-foreground font-semibold block mt-5 mb-2">{children}</strong>
      ),
      ul: ({ children }) => (
        <ul className="my-4 space-y-3">{children}</ul>
      ),
      ol: ({ children }) => (
        <ol className="my-4 ml-5 space-y-3 list-decimal marker:text-accent marker:font-semibold">{children}</ol>
      ),
      li: ({ children }) => (
        <li className="flex items-start gap-3 p-3 rounded-xl bg-white border border-border shadow-sm">
          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
          <span className="text-foreground leading-relaxed">{children}</span>
        </li>
      ),
      em: ({ children }) => <em className="text-muted-foreground/80 italic">{children}</em>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-coral pl-5 my-6 py-3 bg-coral/5 rounded-r-lg">{children}</blockquote>
      ),
      table: ({ children }) => (
        <div className="my-8 overflow-hidden rounded-xl border border-border shadow-md">
          <table className="w-full text-sm">{children}</table>
        </div>
      ),
      thead: ({ children }) => <thead className="bg-primary text-white">{children}</thead>,
      th: ({ children }) => <th className="text-left px-4 py-3 font-semibold text-sm">{children}</th>,
      tr: ({ children }) => <tr className="even:bg-blush">{children}</tr>,
      td: ({ children }) => <td className="px-4 py-3 text-foreground border-t border-border">{children}</td>,
      hr: () => <hr className="my-8 border-t-2 border-border" />,
    }}
  >
    {content}
  </ReactMarkdown>
);

const ArticleSectionRenderer = ({ content, enhancements }: ArticleSectionRendererProps) => {
  const sections = parseMarkdownSections(content);

  return (
    <div>
      {sections.map((section, index) => {
        const bg = bgPatterns[index % bgPatterns.length];
        return (
          <div key={index}>
            <section className={`py-10 md:py-12 ${bg} rounded-xl my-2`}>
              <div className="px-6 md:px-8 max-w-[720px]">
                {section.heading && (
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 pb-4 border-b border-border leading-tight">
                    {section.heading}
                  </h2>
                )}
                <SectionMarkdown content={section.content} />
                {enhancements?.[index]}
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleSectionRenderer;
