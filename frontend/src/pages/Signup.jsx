import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Signup() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <form className="space-y-4 p-8 rounded-xl w-full max-w-sm bg-[#1a1a1a] shadow-lg">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button className="w-full">Create Account</Button>
      </form>
    </div>
  );
}
