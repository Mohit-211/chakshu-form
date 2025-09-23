// src/types/Application.ts

export interface ApplicationForm {
    personalInfo: {
      fullName: string;
      dob: string;
      gender: string;
      orientation: string;
      occupation: string;
      employmentStatus: string;
      industry: string;
      education: string;
      languages: string[];
      religion: string;
      livingSituation: string;
      bio: string;
    };
    lifestyle: {
      relationshipStatus: string;
      seriousRelationships: number;
      longestRelationship: string;
      relationshipEndReason: string;
      currentEfforts: string;
      uniqueAsPartner: string;
      strengths: string;
      challenges: string;
      growthGoals: string;
      diet: string;
      smoke: string;
      drink: string;
      fitnessImportance: number;
      hobbies: string[];
    };
    relationshipVision: {
      lookingFor: string;
      whyNow: string;
      nonNegotiables: { value: string; reason: string }[];
      preferredAgeRange: string;
      locationPreference: string;
      preferredEducation: string;
      preferredEmployment: string;
      valuedTraits: string[];
      appearanceImportance: number;
      definitionOfRespect: string;
      openToDifferentCulture: string;
      willingToRelocate: string;
      marriageTimeframe: string;
      wantsChildren: string;
      familyRole: string;
    };
    finalNote: {
      whyJoin: string;
      extraInfo?: string;
      socialLinks: {
        linkedin?: string;
        instagram?: string;
      };
      consent: boolean;
    };
    meta: {
      createdAt: any; // serverTimestamp
      status: "new" | "reviewed" | "shortlisted";
    };
  }
  