interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`max-w-sm md:max-w-md lg:max-w-lg mx-auto px-4 ${className}`}
    >
      {children}
    </div>
  );
}
