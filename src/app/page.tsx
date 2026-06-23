import AppContainer from "@/components/common/app-container";
import SectionTitle from "@/components/common/section-title";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 py-16">
      <AppContainer>
        <SectionTitle title="Resume10" subtitle="Premium ATS Resume Builder" />

        <div className="mt-8">
          <Card className="max-w-lg">
            <h3 className="text-xl font-semibold">Build your first resume</h3>
            <p className="mt-3 text-slate-500">
              Create professional resumes in minutes.
            </p>
            <Link href="/editor">
              <Button className="mt-6">Create Resume</Button>
            </Link>{" "}
          </Card>
        </div>
      </AppContainer>
    </main>
  );
}
