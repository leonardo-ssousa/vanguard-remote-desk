import { useNavigate } from "react-router-dom";
import { useState } from "react";


function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@empresa.com");
  const [password, setPassword] = useState("admin");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // signIn();
    navigate("/devices");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-2 text-center">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-foreground text-background">
            LG
          </div>
          <h1 className="text-xl font-semibold tracking-tight">Entrar no painel</h1>
          <p className="text-sm text-muted-foreground">Gerencie seu parque remoto</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-border/70 bg-background p-6 shadow-sm"
        >
          <div className="space-y-2">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full">
            Entrar
          </button>
          <p className="text-center text-xs text-muted-foreground">
            Demonstração — qualquer credencial entra.
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage