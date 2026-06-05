"use client";
import { useState } from "react";

/* ─── SVG Arte – painel esquerdo ─────────────────────────────────────────── */
function LandscapeArt() {
  return (
    <svg
      viewBox="0 0 340 440"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7dbd4" />
          <stop offset="50%" stopColor="#edbbaf" />
          <stop offset="100%" stopColor="#d9a09a" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#fde8e2" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#edbbaf" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="w0" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#eac0b8" />
          <stop offset="50%" stopColor="#f5d8d0" />
          <stop offset="100%" stopColor="#daa8a0" />
        </linearGradient>
        <linearGradient id="w1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d8a098" />
          <stop offset="50%" stopColor="#eec0b4" />
          <stop offset="100%" stopColor="#cca098" />
        </linearGradient>
        <linearGradient id="w2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f0ccc4" />
          <stop offset="50%" stopColor="#fde0d8" />
          <stop offset="100%" stopColor="#e0b0a8" />
        </linearGradient>
        <linearGradient id="w3" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d09090" />
          <stop offset="50%" stopColor="#e8b4aa" />
          <stop offset="100%" stopColor="#c89090" />
        </linearGradient>
        <linearGradient id="w4" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f2d0c8" />
          <stop offset="40%" stopColor="#fde8e0" />
          <stop offset="100%" stopColor="#e0b8b0" />
        </linearGradient>
        <linearGradient id="fg1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c88080" />
          <stop offset="100%" stopColor="#b06868" />
        </linearGradient>
        <linearGradient id="fg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d09090" />
          <stop offset="100%" stopColor="#b87878" />
        </linearGradient>
        <filter id="softBlur">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      {/* Céu */}
      <rect width="340" height="440" fill="url(#sky)" />
      <rect width="340" height="440" fill="url(#glow)" />

      {/* Dunas distantes / silhueta fundo */}
      <path
        d="M0,190 Q60,155 130,178 Q200,202 270,168 Q310,150 340,162 L340,440 L0,440 Z"
        fill="#d4a098"
        opacity="0.35"
        filter="url(#softBlur)"
      />
      <path
        d="M0,215 Q80,182 160,205 Q240,228 340,195 L340,440 L0,440 Z"
        fill="#ddb0a8"
        opacity="0.4"
        filter="url(#softBlur)"
      />

      {/* Camadas de ondas / tecido */}
      <path
        d="M-10,252 Q40,225 100,245 Q170,268 240,240 Q290,222 350,234 L350,440 L-10,440 Z"
        fill="url(#w0)"
      />
      <path
        d="M-10,278 Q50,256 115,272 Q185,290 255,264 Q300,250 350,258 L350,440 L-10,440 Z"
        fill="url(#w1)"
      />
      <path
        d="M-10,300 Q55,280 125,296 Q195,314 265,290 Q305,275 350,282 L350,440 L-10,440 Z"
        fill="url(#w2)"
      />
      <path
        d="M-10,322 Q60,304 132,320 Q205,337 272,315 Q308,300 350,307 L350,440 L-10,440 Z"
        fill="url(#w3)"
      />
      <path
        d="M-10,342 Q65,325 138,340 Q212,356 278,336 Q312,323 350,330 L350,440 L-10,440 Z"
        fill="url(#w4)"
      />
      <path
        d="M-10,360 Q68,344 142,358 Q218,374 284,355 Q316,343 350,350 L350,440 L-10,440 Z"
        fill="url(#w1)"
        opacity="0.85"
      />
      <path
        d="M-10,378 Q70,363 145,376 Q222,390 288,373 Q318,362 350,368 L350,440 L-10,440 Z"
        fill="url(#w2)"
        opacity="0.8"
      />
      <path
        d="M-10,395 Q72,382 148,393 Q224,406 290,390 Q320,380 350,385 L350,440 L-10,440 Z"
        fill="url(#w0)"
        opacity="0.75"
      />

      {/* Figura 1 – mais alta, à direita */}
      {/* cabeça */}
      <ellipse cx="195" cy="224" rx="9" ry="9.5" fill="url(#fg1)" />
      {/* cabelo longo */}
      <path
        d="M188,228 Q183,250 186,268 Q190,258 195,248 Q200,258 204,268 Q207,250 202,228 Z"
        fill="#a86868"
        opacity="0.7"
      />
      {/* vestido */}
      <path
        d="M187,233 Q180,258 175,278 Q168,302 175,322 Q185,312 190,295 Q195,280 196,262
           Q197,280 202,295 Q207,312 215,322 Q222,302 215,278 Q210,258 203,233 Z"
        fill="url(#fg1)"
      />
      {/* babado / flare saia */}
      <path
        d="M175,310 Q165,328 162,345 Q170,338 180,330 Q185,322 190,315
           Q195,322 200,330 Q210,338 218,345 Q215,328 205,310 Z"
        fill="#c08080"
        opacity="0.8"
      />

      {/* Figura 2 – mais baixa, à esquerda */}
      {/* cabeça */}
      <ellipse cx="155" cy="242" rx="7.5" ry="8" fill="url(#fg2)" />
      {/* cabelo */}
      <path
        d="M148,246 Q144,264 147,280 Q151,272 155,264 Q159,272 163,280 Q166,264 162,246 Z"
        fill="#b07878"
        opacity="0.7"
      />
      {/* vestido */}
      <path
        d="M148,250 Q143,272 139,290 Q133,312 140,330 Q149,320 153,304 Q157,290 158,274
           Q159,290 163,304 Q167,320 170,330 Q177,312 171,290 Q167,272 162,250 Z"
        fill="url(#fg2)"
      />
      {/* babado */}
      <path
        d="M140,318 Q132,334 130,348 Q138,342 147,334 Q151,327 155,320
           Q159,327 163,334 Q172,342 178,348 Q176,334 168,318 Z"
        fill="#c09090"
        opacity="0.8"
      />
    </svg>
  );
}

/* ─── Ícone envelope ─────────────────────────────────────────────────────── */
function IconMail({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

/* ─── Ícone cadeado ──────────────────────────────────────────────────────── */
function IconLock({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

/* ─── Componente principal ───────────────────────────────────────────────── */
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@300;400;500&display=swap');

        .login-font { font-family: 'Cormorant Garamond', Georgia, serif; }
        .body-font  { font-family: 'Outfit', sans-serif; }

        .card-glass {
          background: rgba(236, 188, 180, 0.38);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(255, 224, 218, 0.55);
          box-shadow:
            0 24px 64px rgba(148, 56, 56, 0.22),
            inset 0 1px 0 rgba(255, 240, 235, 0.45);
        }

        .input-field {
          background: transparent;
          outline: none;
          color: #6b2f2f;
          font-family: 'Outfit', sans-serif;
          font-size: 0.875rem;
          width: 100%;
          padding: 4px 0;
        }
        .input-field::placeholder { color: #c4a0a0; }

        .input-line {
          border-bottom: 1px solid #c89090;
          transition: border-color 0.2s;
        }
        .input-line:focus-within { border-color: #a05555; }

        .btn-login {
          background: linear-gradient(145deg, #e8b4ac, #d49898);
          color: #7b2e2e;
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          font-size: 0.9rem;
          letter-spacing: 0.03em;
          border-radius: 9999px;
          padding: 11px 0;
          width: 100%;
          box-shadow:
            5px 5px 12px rgba(155, 72, 72, 0.30),
            -3px -3px 8px rgba(255, 225, 218, 0.55);
          transition: box-shadow 0.2s, transform 0.15s;
          cursor: pointer;
          border: none;
        }
        .btn-login:hover {
          box-shadow:
            3px 3px 8px rgba(155, 72, 72, 0.38),
            -2px -2px 5px rgba(255, 225, 218, 0.60);
          transform: translateY(-1px);
        }
        .btn-login:active {
          box-shadow:
            inset 3px 3px 6px rgba(155, 72, 72, 0.28),
            inset -2px -2px 5px rgba(255, 225, 218, 0.40);
          transform: translateY(0);
        }

        .link-btn {
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          color: #9b5050;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
        }
        .link-btn:hover { color: #7b2e2e; text-decoration: underline; }
      `}</style>

      {/* ── Background ───────────────────────────────────────────────────── */}
      <div
        className="min-h-screen w-screen flex items-center justify-center relative overflow-hidden p-4 body-font"
        style={{
          background: `
            radial-gradient(ellipse 60% 55% at 12% 18%, rgba(255, 220, 208, 0.85) 0%, transparent 55%),
            radial-gradient(ellipse 45% 40% at 88% 82%, rgba(172, 68, 68, 0.65) 0%, transparent 55%),
            radial-gradient(ellipse 55% 50% at 65% 45%, rgba(210, 130, 120, 0.6) 0%, transparent 60%),
            linear-gradient(140deg, #e8a8a0 0%, #c46868 45%, #b85858 70%, #ce9898 100%)
          `,
        }}
      >

        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-80"
          style={{
            background: "radial-gradient(circle, #ffded6 0%, transparent 70%)",
            transform: "translate(30%, -35%)",
          }}
        />

        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-45"
          style={{
            background: "radial-gradient(circle, #b85858 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
          }}
        />

        <div className="card-glass flex rounded-[2rem] overflow-hidden w-full md:w-1/2">

        <div className="card hidden md:flex w-1/2">
          
            

        </div>

        


          <div className="flex flex-1 flex-col justify-center md:w-1/2 px-8 sm:px-10 py-10">

            <h1
              className="login-font text-[2.1rem] font-bold text-center mb-8 tracking-wide"
              style={{ color: "#872e2e" }}
            >
              Login
            </h1>


            <div className="mb-6">
              <label
                className="block text-[0.78rem] font-medium mb-2"
                style={{ color: "#8b4040" }}
              >
                Email
              </label>
              <div className="input-line flex items-center gap-2">
                <input
                  type="email"
                  className="input-field"
                  placeholder="nome@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <IconMail className="w-4 h-4 flex-shrink-0" style={{ color: "#c08888" }} />
              </div>
            </div>

           
            <div className="mb-9">
              <label
                className="block text-[0.78rem] font-medium mb-2"
                style={{ color: "#8b4040" }}
              >
                Password
              </label>
              <div className="input-line flex items-center gap-2">
                <input
                  type="password"
                  className="input-field"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <IconLock className="w-4 h-4 flex-shrink-0" style={{ color: "#c08888" }} />
              </div>
            </div>

            <button className="btn-login mb-6">Login</button>


            <div className="flex justify-end">
              <button className="link-btn">Forgot password</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}