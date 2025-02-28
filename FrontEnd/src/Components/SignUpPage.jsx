import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-full max-w-md">
        <SignUp path="/sign-up" routing="path" />
      </div>
    </div>
  );
}
