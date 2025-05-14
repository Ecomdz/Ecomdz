import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("ar");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const t = {
    ar: {
      welcome: "مرحبًا بك في Ecom Dz",
      description: "أنشئ متجرك الإلكتروني وابدأ البيع الآن!",
      register: "تسجيل كبائع",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      submit: "إنشاء حساب"
    },
    fr: {
      welcome: "Bienvenue sur Ecom Dz",
      description: "Créez votre boutique en ligne et commencez à vendre !",
      register: "S'inscrire comme vendeur",
      name: "Nom complet",
      email: "Adresse e-mail",
      password: "Mot de passe",
      submit: "Créer un compte"
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="mb-6">
        <button onClick={() => setLanguage('ar')} className="mx-2">العربية</button>
        <button onClick={() => setLanguage('fr')} className="mx-2">Français</button>
      </div>

      <div className="w-full max-w-md border p-6 rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-2">{t[language].welcome}</h1>
        <p className="mb-4">{t[language].description}</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label>{t[language].name}</label>
            <input name="name" value={formData.name} onChange={handleChange} required className="w-full border p-2 rounded"/>
          </div>
          <div>
            <label>{t[language].email}</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border p-2 rounded"/>
          </div>
          <div>
            <label>{t[language].password}</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full border p-2 rounded"/>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">{t[language].submit}</button>
        </form>
      </div>
    </div>
  );
}
