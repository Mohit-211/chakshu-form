"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PageThreeProps {
  data: any;
  onNext: (values: any) => void;
  onBack: () => void;
}

export default function PageThree({ data, onNext, onBack }: PageThreeProps) {
  const [formData, setFormData] = useState({
    relationshipGoal: data.relationshipGoal || "",
    whyNow: data.whyNow || "",
    nonNegotiables: data.nonNegotiables || "",
    partnerAgeRange: data.partnerAgeRange || "",
    locationPreference: data.locationPreference || "",
    partnerEducation: data.partnerEducation || "",
    partnerEmployment: data.partnerEmployment || "",
    valuedTraits: data.valuedTraits || "",
    appearanceImportance: data.appearanceImportance || "",
    respectDefinition: data.respectDefinition || "",
    crossCultureFaith: data.crossCultureFaith || "",
    relocationWillingness: data.relocationWillingness || "",
    marriageTimeline: data.marriageTimeline || "",
    childrenPreference: data.childrenPreference || "",
    familyRole: data.familyRole || "",
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <section className="py-12 max-w-3xl mx-auto">
      <Card className="shadow-soft bg-card/80 backdrop-blur-sm">
        <CardContent className="space-y-8 p-8">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center">
            Your Relationship Vision
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Relationship Goal */}
            <div>
              <Label>
                Are you looking for marriage, long-term partnership, or
                exploring serious connections?
              </Label>
              <select
                className="w-full mt-2 rounded-md border border-input bg-background p-2"
                value={formData.relationshipGoal}
                onChange={(e) =>
                  handleChange("relationshipGoal", e.target.value)
                }
              >
                <option value="">Select</option>
                <option>Marriage</option>
                <option>Long-term Partnership</option>
                <option>Exploring Serious Connections</option>
              </select>
            </div>

            {/* Why Now */}
            <div>
              <Label>
                Why do you feel now is the right time for a committed
                relationship?
              </Label>
              <Textarea
                rows={3}
                value={formData.whyNow}
                onChange={(e) => handleChange("whyNow", e.target.value)}
              />
            </div>

            {/* Non-negotiables */}
            <div>
              <Label>
                List your top 5 non-negotiables in a partner. (Explain why each
                matters)
              </Label>
              <Textarea
                rows={5}
                value={formData.nonNegotiables}
                onChange={(e) => handleChange("nonNegotiables", e.target.value)}
              />
            </div>

            {/* Partner Age Range */}
            <div>
              <Label>What is your preferred partner age range?</Label>
              <Input
                placeholder="e.g. 28–35"
                value={formData.partnerAgeRange}
                onChange={(e) =>
                  handleChange("partnerAgeRange", e.target.value)
                }
              />
            </div>

            {/* Location Preference */}
            <div>
              <Label>What is your partner's location preference?</Label>
              <select
                className="w-full mt-2 rounded-md border border-input bg-background p-2"
                value={formData.locationPreference}
                onChange={(e) =>
                  handleChange("locationPreference", e.target.value)
                }
              >
                <option value="">Select</option>
                <option>Same City</option>
                <option>Same Country</option>
                <option>Open to Relocation</option>
                <option>Global</option>
              </select>
            </div>

            {/* Partner Education */}
            <div>
              <Label>What is your preferred partner education level?</Label>
              <Input
                placeholder="e.g. Bachelor’s, Master’s, PhD"
                value={formData.partnerEducation}
                onChange={(e) =>
                  handleChange("partnerEducation", e.target.value)
                }
              />
            </div>

            {/* Partner Employment */}
            <div>
              <Label>
                What is your preferred partner employment status/type?
              </Label>
              <Input
                placeholder="e.g. Full-time, Entrepreneur, Freelance"
                value={formData.partnerEmployment}
                onChange={(e) =>
                  handleChange("partnerEmployment", e.target.value)
                }
              />
            </div>

            {/* Valued Traits */}
            <div>
              <Label>
                Which personality traits do you value most in a partner?
              </Label>
              <Textarea
                rows={3}
                value={formData.valuedTraits}
                onChange={(e) => handleChange("valuedTraits", e.target.value)}
              />
            </div>

            {/* Appearance Importance */}
            <div>
              <Label>How much does appearance matter to you?</Label>
              <Textarea
                rows={2}
                value={formData.appearanceImportance}
                onChange={(e) =>
                  handleChange("appearanceImportance", e.target.value)
                }
              />
            </div>

            {/* Respect Definition */}
            <div>
              <Label>How do you define respect in a relationship?</Label>
              <Textarea
                rows={2}
                value={formData.respectDefinition}
                onChange={(e) =>
                  handleChange("respectDefinition", e.target.value)
                }
              />
            </div>

            {/* Cross-Culture / Faith */}
            <div>
              <Label>
                Are you open to a partner from a different culture or faith?
              </Label>
              <select
                className="w-full mt-2 rounded-md border border-input bg-background p-2"
                value={formData.crossCultureFaith}
                onChange={(e) =>
                  handleChange("crossCultureFaith", e.target.value)
                }
              >
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
                <option>Conditional — explain</option>
              </select>
            </div>

            {/* Relocation */}
            <div>
              <Label>
                Would you be willing to relocate for the right partner?
              </Label>
              <select
                className="w-full mt-2 rounded-md border border-input bg-background p-2"
                value={formData.relocationWillingness}
                onChange={(e) =>
                  handleChange("relocationWillingness", e.target.value)
                }
              >
                <option value="">Select</option>
                <option>Yes</option>
                <option>Maybe</option>
                <option>No</option>
              </select>
            </div>

            {/* Marriage Timeline */}
            <div>
              <Label>
                Do you want marriage? If yes, in what timeframe ideally?
              </Label>
              <Input
                placeholder="e.g. Within 2 years"
                value={formData.marriageTimeline}
                onChange={(e) =>
                  handleChange("marriageTimeline", e.target.value)
                }
              />
            </div>

            {/* Children Preference */}
            <div>
              <Label>Do you want children? If yes, how many?</Label>
              <Input
                placeholder="e.g. 2"
                value={formData.childrenPreference}
                onChange={(e) =>
                  handleChange("childrenPreference", e.target.value)
                }
              />
            </div>

            {/* Family Role */}
            <div>
              <Label>
                What role does family play in your future relationship?
              </Label>
              <Textarea
                rows={3}
                value={formData.familyRole}
                onChange={(e) => handleChange("familyRole", e.target.value)}
              />
            </div>

            {/* Navigation */}
            <div className="flex justify-between pt-6">
              <Button type="button" variant="outline" onClick={onBack}>
                Back
              </Button>
              <Button type="submit" variant="default">
                Next →
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
