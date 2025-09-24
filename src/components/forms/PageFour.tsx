"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

interface PageFourProps {
  data: any;
  onNext: (values: any) => void;
  onBack: () => void;
}

export default function PageFour({ data, onNext, onBack }: PageFourProps) {
  const [formData, setFormData] = useState({
    whyMocha: data.whyMocha || "",
    additionalNote: data.additionalNote || "",
    profileLink: data.profileLink || "",
    email: data.email || "",
    phone: data.phone || "",
    signatureName: data.signatureName || "",
    consent: data.consent || false,
  });

  const handleChange = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.whyMocha ||
      !formData.profileLink ||
      !formData.email ||
      !formData.phone ||
      !formData.signatureName
    ) {
      toast.error("⚠️ Please fill in all required fields.");
      return;
    }

    if (!formData.consent) {
      toast.error("⚠️ You must agree to provide accurate information.");
      return;
    }

    onNext(formData);
  };

  return (
    <section className="py-12 max-w-3xl mx-auto">
      <Card className="shadow-soft bg-card/80 backdrop-blur-sm">
        <CardContent className="space-y-8 p-8">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center">
            Final Personal Note
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Why Petal & Promise */}
            <div>
              <Label>
                Why do you want to join Petal & Promise instead of continuing
                with apps or organic dating? *
              </Label>
              <Textarea
                rows={3}
                value={formData.whyMocha}
                onChange={(e) => handleChange("whyMocha", e.target.value)}
                required
              />
            </div>

            {/* Additional Notes */}
            <div>
              <Label>Anything else you’d like us to know? (Optional)</Label>
              <Textarea
                rows={3}
                value={formData.additionalNote}
                onChange={(e) => handleChange("additionalNote", e.target.value)}
              />
            </div>

            {/* Profile Link */}
            <div>
              <Label>
                LinkedIn / Instagram / any profile link (for verification) *
              </Label>
              <Input
                type="url"
                placeholder="https://linkedin.com/in/username"
                value={formData.profileLink}
                onChange={(e) => handleChange("profileLink", e.target.value)}
                required
              />
            </div>

            {/* Contact Info */}
            <div>
              <Label>Email Address *</Label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>

            <div>
              <Label>Phone Number *</Label>
              <Input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
              />
            </div>

            {/* Signature */}
            <div>
              <Label>
                Final Signature (Enter full name to authorize your responses) *
              </Label>
              <Input
                type="text"
                placeholder="Your Full Name"
                value={formData.signatureName}
                onChange={(e) => handleChange("signatureName", e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground mt-1">
                By signing, you confirm all information provided is accurate and
                truthful.
              </p>
            </div>

            {/* Consent */}
            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(val) => handleChange("consent", Boolean(val))}
                required
              />
              <Label htmlFor="consent" className="text-sm leading-snug">
                I agree to provide accurate information and allow Petal &
                Promise to use it for matchmaking.
              </Label>
            </div>

            {/* Navigation */}
            <div className="flex justify-between pt-6">
              <Button type="button" variant="outline" onClick={onBack}>
                Back
              </Button>
              <Button
                type="submit"
                variant="default"
                disabled={!formData.consent}
              >
                Next →
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
