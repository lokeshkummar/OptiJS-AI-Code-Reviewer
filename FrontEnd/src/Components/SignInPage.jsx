import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-full max-w-md">
        <SignIn path="/sign-in" routing="path" />
      </div>
    </div>
  );
}
