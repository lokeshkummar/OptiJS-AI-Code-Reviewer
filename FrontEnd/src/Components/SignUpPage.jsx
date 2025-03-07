import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-black">
    
        <SignUp path="/sign-up" routing="path" />
     
    </div>
  );
}
