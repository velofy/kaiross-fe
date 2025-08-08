import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { MOCK_CREDENTIALS } from "@/data/mockData";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
      login({ id: "u1", name: "Anish", email });
      toast({ title: "Welcome back!", description: "Logged in successfully." });
      navigate("/feed");
    } else {
      toast({ title: "Invalid credentials", description: "Please try again.", variant: "destructive" as any });
    }
  };

  return (
    <>
      <Helmet>
        <title>Login Kaiross</title>
        <meta name="description" content="Login to Kaiross with mock credentials to explore the prototype." />
        <link rel="canonical" href={window.location.origin + "/login"} />
      </Helmet>

      <main className="container mx-auto grid min-h-[calc(100svh-56px)] md:min-h-[calc(100dvh-56px)] place-items-center px-4">
        <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4 rounded-lg border bg-card p-6 md:p-6 shadow-elevated">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full">Sign In</Button>
          <p className="text-xs text-muted-foreground">
            Demo Account<br  />
            Use email: anish@harvard.edu - password: anishfyi
          </p>
        </form>
      </main>
    </>
  );
};

export default Login;
