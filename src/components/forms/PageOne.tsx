"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner"; // ✅ FIXED: use sonner
import { Card, CardContent } from "@/components/ui/card";

type PageOneProps = {
  data: any;
  onNext: (data: any) => void;
};

export default function PageOne({ data, onNext }: PageOneProps) {
  const [formData, setFormData] = useState({
    fullName: data.fullName || "",
    dob: data.dob || "",
    gender: data.gender || "",
    orientation: data.orientation || "",
    occupation: data.occupation || "",
    employmentStatus: data.employmentStatus || "",
    industry: data.industry || "",
    education: data.education || "",
    languages: data.languages || "",
    religion: data.religion || "",
    livingSituation: data.livingSituation || "",
    bio: data.bio || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelect = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.dob || !formData.gender) {
      toast.error("⚠️ Please complete all required fields.");
      return;
    }

    onNext(formData);
  };

  return (
    <section className="py-12 max-w-3xl mx-auto">
      <Card className="shadow-luxury bg-card/90 backdrop-blur-sm">
        <CardContent className="p-8">
          <h2 className="font-heading text-2xl font-bold mb-6 text-center">
            Basic Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Date of Birth */}
            <div>
              <Label htmlFor="dob">Date of Birth *</Label>
              <Input
                id="dob"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            {/* Gender */}
            <div>
              <Label>Gender *</Label>
              <Select
                onValueChange={(val) => handleSelect("gender", val)}
                value={formData.gender}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="nonbinary">Non-binary</SelectItem>
                  <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sexual Orientation */}
            <div>
              <Label>Sexual Orientation *</Label>
              <Select
                onValueChange={(val) => handleSelect("orientation", val)}
                value={formData.orientation}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select orientation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="straight">Straight</SelectItem>
                  <SelectItem value="gay">Gay</SelectItem>
                  <SelectItem value="lesbian">Lesbian</SelectItem>
                  <SelectItem value="bisexual">Bisexual</SelectItem>
                  <SelectItem value="asexual">Asexual</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Occupation */}
            <div>
              <Label htmlFor="occupation">Occupation *</Label>
              <Input
                id="occupation"
                name="occupation"
                type="text"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="e.g. Software Engineer"
                required
              />
            </div>

            {/* Employment Status */}
            <div>
              <Label>Employment Status *</Label>
              <Select
                onValueChange={(val) => handleSelect("employmentStatus", val)}
                value={formData.employmentStatus}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="self-employed">Self-employed</SelectItem>
                  <SelectItem value="freelance">Freelance</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="unemployed">Unemployed</SelectItem>
                  <SelectItem value="retired">Retired</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Industry */}
            <div>
              <Label htmlFor="industry">Industry</Label>
              <Input
                id="industry"
                name="industry"
                type="text"
                value={formData.industry}
                onChange={handleChange}
                placeholder="e.g. Finance, Healthcare, Tech"
              />
            </div>

            {/* Education */}
            <div>
              <Label>Highest Education *</Label>
              <Select
                onValueChange={(val) => handleSelect("education", val)}
                value={formData.education}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select education" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="highschool">High School</SelectItem>
                  <SelectItem value="bachelors">Bachelor’s</SelectItem>
                  <SelectItem value="masters">Master’s</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Languages */}
            <div>
              <Label htmlFor="languages">Languages</Label>
              <Input
                id="languages"
                name="languages"
                type="text"
                value={formData.languages}
                onChange={handleChange}
                placeholder="e.g. English, Hindi, Spanish"
              />
            </div>

            {/* Religion */}
            <div>
              <Label htmlFor="religion">Religion / Beliefs</Label>
              <Input
                id="religion"
                name="religion"
                type="text"
                value={formData.religion}
                onChange={handleChange}
                placeholder="Optional"
              />
            </div>

            {/* Living Situation */}
            <div>
              <Label>Living Situation</Label>
              <Select
                onValueChange={(val) => handleSelect("livingSituation", val)}
                value={formData.livingSituation}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select situation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alone">Alone</SelectItem>
                  <SelectItem value="family">With Family</SelectItem>
                  <SelectItem value="roommates">With Roommates</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Bio */}
            <div>
              <Label htmlFor="bio">One-liner Bio *</Label>
              <Textarea
                id="bio"
                name="bio"
                maxLength={200}
                value={formData.bio}
                onChange={handleChange}
                placeholder="e.g. Dreamer, traveler, coffee lover ☕"
                required
              />
              <p className="text-xs text-muted-foreground mt-1">
                {formData.bio.length}/200 characters
              </p>
            </div>

            {/* Next Button */}
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="w-full"
            >
              Next →
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
