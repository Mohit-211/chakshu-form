"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

interface PageFiveProps {
  data: any;
  onBack: () => void;
  onSubmit: () => void;
}

export default function PageFive({ data, onBack, onSubmit }: PageFiveProps) {
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaChecked) {
      toast.error("⚠️ Please verify that you are human before submitting.");
      return;
    }

    onSubmit();
  };

  return (
    <section className="py-12 max-w-3xl mx-auto">
      <Card className="shadow-soft bg-card/80 backdrop-blur-sm">
        <CardContent className="space-y-8 p-8">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center">
            Review & Submit
          </h2>

          {/* Summary */}
          <div className="space-y-4 max-h-[400px] overflow-y-auto border rounded-md p-4 bg-background">
            {Object.entries(data).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <Label className="font-medium capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </Label>
                <span className="text-muted-foreground text-right">
                  {String(value || "—")}
                </span>
              </div>
            ))}
          </div>

          {/* Captcha */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="captcha"
              checked={captchaChecked}
              onCheckedChange={(val) => setCaptchaChecked(Boolean(val))}
            />
            <Label htmlFor="captcha" className="text-sm leading-snug">
              I am not a robot 🤖
            </Label>
          </div>

          {/* Navigation */}
          <form
            onSubmit={handleFinalSubmit}
            className="flex justify-between pt-6"
          >
            <Button type="button" variant="outline" onClick={onBack}>
              Back
            </Button>
            <Button type="submit" variant="default">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
