import { cn } from "@/utils/cn";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <section className={cn("relative pt-40 pb-20 overflow-hidden", className)}>
      {/* Background Gradients & Noise */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/10 via-black to-black opacity-80" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

      {/* Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        {/* Accent Line */}
        <div className="flex justify-center mb-8">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-thin tracking-tight text-white mb-6 uppercase">
          {title}
        </h1>

        {description && (
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
