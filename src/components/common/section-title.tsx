interface Props {
  title: string;

  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div>
      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}