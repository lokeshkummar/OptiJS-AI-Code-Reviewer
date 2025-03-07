import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-black">

      <SignIn path="/sign-in" routing="path" />

    </div>
  );
}
