function BenefitItem({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 text-lg">
      <Icon className="w-6 h-6 text-blue-500" />
      <span>{title}</span>
    </div>
  );
}

export default BenefitItem;
