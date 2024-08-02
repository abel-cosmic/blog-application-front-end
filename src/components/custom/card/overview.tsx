"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FC } from "react";

const OverviewCard: FC<CardComponentProps> = ({
  title,
  value,
  description,
  icon,
}) => {
  const Icon = icon;

  return (
    <Card className="w-full min-w-60 p-8 bg-transparent border border-black/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="p-2 bg-primary rounded-full">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
