"use client";
import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl bg-brand-panel/70 border border-brand-border p-6 text-center shadow-soft hover:shadow-lg transition">
      <div className="flex justify-center mb-4">
        <Icon className="w-10 h-10 text-brand-blue" strokeWidth={2.2} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-brand-sub text-sm leading-relaxed">{description}</p>
    </div>
  );
}
