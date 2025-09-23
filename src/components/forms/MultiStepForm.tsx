"use client";

import { useState } from "react";
import PageOne from "@/components/forms/PageOne";
import PageTwo from "@/components/forms/PageTwo";
import PageThree from "@/components/forms/PageThree";
import PageFour from "@/components/forms/PageFour";
import PageFive from "@/components/forms/PageFive";
import { Progress } from "@/components/ui/progress";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "sonner";
import { ApplicationForm } from "@/types/Application";

export default function MultiStepForm() {
  const totalSteps = 5;
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});

  const handleNext = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async () => {
    try {
      const application: ApplicationForm = {
        personalInfo: {
          fullName: formData.fullName,
          dob: formData.dob,
          gender: formData.gender,
          orientation: formData.orientation,
          occupation: formData.occupation,
          employmentStatus: formData.employmentStatus,
          industry: formData.industry,
          education: formData.education,
          languages:
            formData.languages?.split(",").map((l: string) => l.trim()) || [],
          religion: formData.religion,
          livingSituation: formData.livingSituation,
          bio: formData.bio,
        },
        lifestyle: {
          relationshipStatus: formData.relationshipStatus,
          seriousRelationships: Number(formData.pastRelationships || 0),
          longestRelationship: formData.longestDuration,
          relationshipEndReason: formData.pastEndReason,
          currentEfforts: formData.currentEfforts,
          uniqueAsPartner: formData.uniqueness,
          strengths: formData.strengths,
          challenges: formData.challenges,
          growthGoals: formData.growthGoals,
          diet: formData.dietaryPreference,
          smoke: formData.smoking,
          drink: formData.drinking,
          fitnessImportance: Number(formData.fitness || 5),
          hobbies:
            formData.hobbies?.split(",").map((h: string) => h.trim()) || [],
        },
        relationshipVision: {
          lookingFor: formData.relationshipGoal,
          whyNow: formData.whyNow,
          nonNegotiables: (formData.nonNegotiables || "")
            .split("\n")
            .filter((line: string) => line.trim())
            .map((value: string) => ({ value, reason: "" })),
          preferredAgeRange: formData.partnerAgeRange,
          locationPreference: formData.locationPreference,
          preferredEducation: formData.partnerEducation,
          preferredEmployment: formData.partnerEmployment,
          valuedTraits:
            formData.valuedTraits?.split(",").map((t: string) => t.trim()) ||
            [],
          appearanceImportance: Number(formData.appearanceImportance || 0),
          definitionOfRespect: formData.respectDefinition,
          openToDifferentCulture: formData.crossCultureFaith,
          willingToRelocate: formData.relocationWillingness,
          marriageTimeframe: formData.marriageTimeline,
          wantsChildren: formData.childrenPreference,
          familyRole: formData.familyRole,
        },
        finalNote: {
          whyJoin: formData.whyMocha,
          extraInfo: formData.additionalNote || null,
          socialLinks: {
            ...(formData.profileLink?.includes("linkedin")
              ? { linkedin: formData.profileLink }
              : {}),
            ...(formData.profileLink?.includes("instagram")
              ? { instagram: formData.profileLink }
              : {}),
          },
          consent: Boolean(formData.consent),
        },

        meta: {
          createdAt: serverTimestamp(), // ✅ real value, not type
          status: "new",
        },
      };

      await addDoc(collection(db, "application-form"), application);

      toast.success("✅ Application Submitted", {
        description:
          "Thank you for sharing your details. Our team will carefully review your responses.",
      });

      setStep(1);
      setFormData({});
    } catch (error) {
      console.error("Error submitting:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="py-12 max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <Progress value={(step / totalSteps) * 100} className="h-2" />
        <p className="text-sm text-muted-foreground mt-2 text-center">
          Step {step} of {totalSteps}
        </p>
      </div>

      {/* Step Content */}
      {step === 1 && <PageOne data={formData} onNext={handleNext} />}
      {step === 2 && (
        <PageTwo data={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {step === 3 && (
        <PageThree data={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {step === 4 && (
        <PageFour data={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {step === 5 && (
        <PageFive data={formData} onBack={handleBack} onSubmit={handleSubmit} />
      )}
    </section>
  );
}
