import { SignIn } from "@clerk/nextjs";

export default function SinInPage() {
  return (
    <div className="h-screen w-full grid place-content-center">
        <SignIn/>
    </div>
  )
}
