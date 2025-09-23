"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PageTwoProps {
  data: any;
  onNext: (values: any) => void;
  onBack: () => void;
}

export default function PageTwo({ data, onNext, onBack }: PageTwoProps) {
  const [formData, setFormData] = useState({
    relationshipStatus: data.relationshipStatus || "",
    pastRelationships: data.pastRelationships || "",
    longestDuration: data.longestDuration || "",
    pastEndReason: data.pastEndReason || "",
    currentEfforts: data.currentEfforts || "",
    uniqueness: data.uniqueness || "",
    strengths: data.strengths || "",
    challenges: data.challenges || "",
    growthGoals: data.growthGoals || "",
    dietaryPreference: data.dietaryPreference || "",
    smoking: data.smoking || "",
    drinking: data.drinking || "",
    fitness: data.fitness || 5,
    hobbies: data.hobbies || "",
  });

  const handleChange = (key: string, value: any) => {
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
            Lifestyle & Personal Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Relationship Status */}
            <div>
              <Label>Current Relationship Status *</Label>
              <RadioGroup
                value={formData.relationshipStatus}
                onValueChange={(val) => handleChange("relationshipStatus", val)}
                className="mt-2 space-y-2"
              >
                {["Never married", "Divorced", "Separated", "Widowed"].map(
                  (opt) => (
                    <div key={opt} className="flex items-center space-x-2">
                      <RadioGroupItem value={opt} id={opt} />
                      <Label htmlFor={opt}>{opt}</Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            {/* Past Relationships */}
            <div>
              <Label>How many serious relationships have you had?</Label>
              <Input
                type="number"
                value={formData.pastRelationships}
                onChange={(e) =>
                  handleChange("pastRelationships", e.target.value)
                }
              />
            </div>

            <div>
              <Label>What was the longest relationship duration?</Label>
              <Input
                placeholder="e.g. 3 years"
                value={formData.longestDuration}
                onChange={(e) =>
                  handleChange("longestDuration", e.target.value)
                }
              />
            </div>

            <div>
              <Label>Why did your past relationship(s) end?</Label>
              <Textarea
                rows={3}
                value={formData.pastEndReason}
                onChange={(e) => handleChange("pastEndReason", e.target.value)}
              />
            </div>

            {/* Current Efforts */}
            <div>
              <Label>What are your current efforts to find a partner?</Label>
              <Textarea
                rows={2}
                value={formData.currentEfforts}
                onChange={(e) => handleChange("currentEfforts", e.target.value)}
              />
            </div>

            {/* Self Reflection */}
            <div>
              <Label>What makes you unique as a partner?</Label>
              <Textarea
                rows={2}
                value={formData.uniqueness}
                onChange={(e) => handleChange("uniqueness", e.target.value)}
              />
            </div>

            <div>
              <Label>Your biggest strengths as a partner?</Label>
              <Textarea
                rows={2}
                value={formData.strengths}
                onChange={(e) => handleChange("strengths", e.target.value)}
              />
            </div>

            <div>
              <Label>Your biggest challenge in relationships so far?</Label>
              <Textarea
                rows={2}
                value={formData.challenges}
                onChange={(e) => handleChange("challenges", e.target.value)}
              />
            </div>

            <div>
              <Label>What personal growth goals are you working on?</Label>
              <Textarea
                rows={2}
                value={formData.growthGoals}
                onChange={(e) => handleChange("growthGoals", e.target.value)}
              />
            </div>

            {/* Lifestyle Choices */}
            <div>
              <Label>Dietary Preference</Label>
              <select
                className="w-full mt-2 rounded-md border border-input bg-background p-2"
                value={formData.dietaryPreference}
                onChange={(e) =>
                  handleChange("dietaryPreference", e.target.value)
                }
              >
                <option value="">Select</option>
                <option>Omnivore</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
                <option>Pescatarian</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <Label>Do you smoke?</Label>
              <select
                className="w-full mt-2 rounded-md border border-input bg-background p-2"
                value={formData.smoking}
                onChange={(e) => handleChange("smoking", e.target.value)}
              >
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
                <option>Occasionally</option>
              </select>
            </div>

            <div>
              <Label>Do you drink alcohol?</Label>
              <select
                className="w-full mt-2 rounded-md border border-input bg-background p-2"
                value={formData.drinking}
                onChange={(e) => handleChange("drinking", e.target.value)}
              >
                <option value="">Select</option>
                <option>Never</option>
                <option>Socially</option>
                <option>Regularly</option>
              </select>
            </div>

            {/* Fitness Scale */}
            <div>
              <Label>
                How important is fitness & health in your life? (1–10)
              </Label>
              <Slider
                min={1}
                max={10}
                step={1}
                value={[formData.fitness]}
                onValueChange={(val) => handleChange("fitness", val[0])}
                className="mt-4"
              />
              <p className="mt-2 text-sm text-muted-foreground">
                Current:{" "}
                <span className="font-semibold">{formData.fitness}</span>
              </p>
            </div>

            <div>
              <Label>List your hobbies & interests</Label>
              <Textarea
                rows={3}
                value={formData.hobbies}
                onChange={(e) => handleChange("hobbies", e.target.value)}
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
