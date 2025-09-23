import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function Intro() {
  const navigate = useNavigate();

  console.log("✅ Intro component mounted");

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-rose-100 px-6 py-12">
      <Card className="max-w-2xl w-full shadow-luxury bg-card/90 backdrop-blur-sm">
        <CardContent className="p-10 text-center space-y-8">
          {/* Title */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Let’s Find Your Kind of Love
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            This isn’t a swipe-and-forget app. Mocha Date is built to understand{" "}
            <span className="text-accent font-medium">who you are</span> and{" "}
            <span className="text-accent font-medium">
              what you’re looking for
            </span>
            . Your answers shape a more personal, thoughtful matching
            experience.
          </p>

          {/* Key Points */}
          <ul className="space-y-4 text-left list-disc list-inside text-muted-foreground font-body">
            <li>
              Answer around{" "}
              <span className="text-foreground font-semibold">
                50 questions
              </span>
              designed to go deeper than just hobbies and job titles.
            </li>
            <li>
              Take about{" "}
              <span className="text-foreground font-semibold">10 minutes</span>{" "}
              — honesty matters more than speed.
            </li>
            <li>
              Your profile stays{" "}
              <span className="text-foreground font-semibold">
                private and secure
              </span>
              . Only used to make meaningful matches.
            </li>
            <li>
              We value{" "}
              <span className="text-foreground font-semibold">
                authenticity
              </span>{" "}
              — the more real you are, the better your experience.
            </li>
          </ul>

          {/* CTA */}
          <div className="pt-6 space-y-2">
            <Button
              aria-label="Start Mocha Date application"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-maroon-light px-8 py-3 text-lg shadow-elegant transition-smooth"
              onClick={() => navigate("/application")}
            >
              Begin Application
            </Button>
            <p className="text-xs text-muted-foreground">
              No right or wrong answers — just be yourself.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
