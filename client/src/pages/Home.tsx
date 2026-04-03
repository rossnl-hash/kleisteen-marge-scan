import { useState } from "react";
import { Clock, CheckCircle, FileText, Building2, Anchor, Wrench, Star, ChevronRight, Phone, Shield, Euro, Settings, ScanLine, Landmark, Send, User, Briefcase, MessageSquare } from "lucide-react";

// Kleisteen huisstijl kleuren
// Primair: #1565C0 (kobaltblauw)
// Accent: #7CB342 (lime-groen)
// Zwart logo: #1A1A1A
// Wit: #FFFFFF
// Lichtgrijs: #F5F5F5
// Lichtblauw: #E3F2FD

type FormState = "idle" | "submitting" | "success" | "error";

export default function Home() {
  const [form, setForm] = useState({
    naam: "",
    bedrijf: "",
    sector: "",
    telefoon: "",
    email: "",
    bericht: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const scrollToScan = () => {
    document.getElementById("marge-scan")?.scrollIntoView({ behavior: "smooth" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.naam.trim()) newErrors.naam = "Vul uw naam in";
    if (!form.bedrijf.trim()) newErrors.bedrijf = "Vul uw bedrijfsnaam in";
    if (!form.telefoon.trim()) newErrors.telefoon = "Vul uw telefoonnummer in";
    if (!form.email.trim()) newErrors.email = "Vul uw e-mailadres in";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Ongeldig e-mailadres";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setFormState("submitting");

    // Simuleer verzending (mailto fallback)
    setTimeout(() => {
      setFormState("success");
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    }
  };

  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── NAVIGATIEBALK ── */}
      <nav style={{ backgroundColor: "#1565C0" }} className="sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div style={{ backgroundColor: "#1A1A1A" }} className="px-3 py-1.5 rounded-sm">
              <span className="text-white font-black text-lg tracking-wider uppercase">KLEISTEEN</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
            <a href="https://kleisteen.nl" className="hover:text-green-300 transition-colors">Home</a>
            <a href="https://kleisteen.nl/functies" className="hover:text-green-300 transition-colors">Functies</a>
            <a href="https://kleisteen.nl/tarieven" className="hover:text-green-300 transition-colors">Tarieven</a>
            <a href="https://kleisteen.nl/contact" className="hover:text-green-300 transition-colors">Contact</a>
          </div>
          <button
            onClick={scrollToScan}
            style={{ backgroundColor: "#7CB342", color: "#1A1A1A" }}
            className="px-4 py-2 rounded font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Gratis Marge Scan
          </button>
        </div>
      </nav>

      {/* ── HERO SECTIE ── */}
      <section className="bg-white pt-16 pb-12 border-b-4" style={{ borderColor: "#1565C0" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-sm font-semibold" style={{ backgroundColor: "#E3F2FD", color: "#1565C0" }}>
              <Building2 size={14} />
              Speciaal voor maatwerkbedrijven
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight text-gray-900 mb-4">
              Weet u pas{" "}
              <span className="italic">ná</span>{" "}
              het project of u er{" "}
              <span style={{ color: "#1565C0" }}>geld</span>{" "}
              aan verdiend heeft?
            </h1>
            <div className="w-24 h-1 mb-6 rounded" style={{ backgroundColor: "#1565C0" }} />
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Als maatwerkbedrijf levert u unieke producten. Maar uniek betekent ook onvoorspelbaar.
              Uren lopen uit, materialen worden duurder en uw marge verdampt.
              <strong className="text-gray-800"> Kleisteen geeft u live inzicht in de winstgevendheid van elk project — niet pas achteraf.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToScan}
                style={{ backgroundColor: "#7CB342", color: "#1A1A1A" }}
                className="px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all shadow-lg flex items-center gap-2 justify-center"
              >
                Gratis Marge Scan aanvragen <ChevronRight size={20} />
              </button>
              <a
                href="https://kleisteen.nl"
                className="px-8 py-4 rounded-lg font-semibold text-lg border-2 flex items-center gap-2 justify-center hover:bg-gray-50 transition-colors"
                style={{ borderColor: "#1565C0", color: "#1565C0" }}
              >
                Meer over Kleisteen
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-600" /> 20 minuten, geen verplichtingen</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-600" /> 100% gratis</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-600" /> Al 20 jaar vertrouwd</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOELGROEP SECTIE ── */}
      <section style={{ backgroundColor: "#F5F5F5" }} className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">Speciaal voor bedrijven die werken met unieke projecten en custom producten</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Anchor size={22} />, label: "Scheepsbouw & Botenbouw" },
              { icon: <Building2 size={22} />, label: "Bouw & Aannemerij" },
              { icon: <Wrench size={22} />, label: "Staal & Metaalbewerking" },
              { icon: <Settings size={22} />, label: "Technische Installatie" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-lg px-4 py-4 flex items-center gap-3 shadow-sm">
                <span style={{ color: "#1565C0" }}>{item.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DRIE VOORDELEN ── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">Wat Kleisteen voor u oplost</h2>
          <p className="text-gray-500 text-center mb-12">Drie problemen die elke maatwerkondernemer herkent</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock size={32} />,
                title: "Live marge-inzicht per project",
                body: "Zie tijdens het project al of u binnen budget blijft. Niet pas bij de eindafrekening — maar real-time, terwijl u werkt.",
              },
              {
                icon: <CheckCircle size={32} />,
                title: "Geen vergeten meerwerk",
                body: "Koppel gewerkte uren en inkoopfacturen direct aan het juiste project. Nooit meer meerwerk vergeten te factureren.",
              },
              {
                icon: <FileText size={32} />,
                title: "Eén overzicht van offerte tot factuur",
                body: "Van offerte en planning tot urenregistratie en eindfactuur — alles in één systeem. Geen losse Excel-lijstjes meer.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "#E3F2FD", color: "#1565C0" }}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1565C0" }}>{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAT IS KLEISTEEN ── */}
      <section style={{ backgroundColor: "#1565C0" }} className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-white mb-4">Wat is Kleisteen?</h2>
              <div className="w-16 h-1 bg-green-400 mb-6 rounded" />
              <p className="text-blue-100 leading-relaxed mb-6">
                Kleisteen is <strong className="text-white">100% Nederlandse online boekhoud- en ERP-software</strong>, speciaal ontwikkeld voor ondernemers die grip willen op hun projecten, uren en marge.
                Al meer dan 20 jaar helpen wij MKB-bedrijven om hun administratie eenvoudig, slim en volledig digitaal te regelen — zonder gedoe.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Kleisteen wordt ook wel het <em>"Zwitsers zakmes van de online boekhoudprogramma's"</em> genoemd. Of u nu alleen wilt factureren, uren wilt bijhouden of werkt met meerdere projecten en custom producten — met Kleisteen kan het.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Shield size={20} />, title: "100% Nederlands & Veilig", body: "Eigen servers, directe support, data 7 jaar bewaard." },
                { icon: <Euro size={20} />, title: "Vanaf €19,- per maand", body: "Geen verborgen kosten. Alles inbegrepen." },
                { icon: <ScanLine size={20} />, title: "Scan & Herken", body: "Bonnen automatisch inboeken, geen overtikken." },
                { icon: <Landmark size={20} />, title: "Slimme Bankkoppelingen", body: "Bankmutaties automatisch gekoppeld aan facturen." },
              ].map((item) => (
                <div key={item.title} className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
                  <div className="text-green-400 mb-2">{item.icon}</div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-blue-200 text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KLANTREVIEWS ── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Wat zeggen onze klanten?</h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#FFC107" color="#FFC107" />)}
              <span className="ml-2 font-bold text-gray-700">9,6</span>
              <span className="text-gray-500 text-sm">/ 10 uit 16 beoordelingen</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Kleisteen is eenvoudig in gebruik en maakt gebruik van de laatste technologie. Denk aan robotic accounting, scan en herken en bankkoppelingen. Dat scheelt bakken met tijd.", name: "Eric Plantema", company: "Certified Control" },
              { quote: "Al ruim 10 jaar werk ik met mijn administratiekantoor en klanten met veel plezier samen met Kleisteen. Ze zijn continu bezig met het innoveren van de software!", name: "Saskia Bothof", company: "Buro 98" },
              { quote: "Ik vind het dashboard echt GEWELDIG! Je kunt snel factureren. Het dashboard laat je doorklikken naar alle onderliggende cijfers.", name: "Hermes Ratgers", company: "Hera Finance" },
            ].map((review) => (
              <div key={review.name} className="rounded-xl p-6 border border-gray-100 shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
                <div className="text-4xl font-black mb-3" style={{ color: "#1565C0" }}>"</div>
                <p className="text-gray-700 italic leading-relaxed mb-4 text-sm">"{review.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">— {review.name}</p>
                  <p className="text-gray-500 text-xs">{review.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARIEVEN ── */}
      <section style={{ backgroundColor: "#F5F5F5" }} className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-2">Eenvoudige, eerlijke prijzen</h2>
          <p className="text-gray-500 text-center mb-12">Geen verborgen kosten. Alle functies inbegrepen.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Standaard", price: "19,-", desc: "Factureren & boekhouding", features: ["Onbeperkt factureren", "Relatiebeheer", "Bankkoppelingen", "Scan & Herken"], highlight: false },
              { name: "Premium", price: "29,-", desc: "Teams & meerdere valuta", features: ["Alles uit Standaard", "Meerdere medewerkers", "Rollen & rechten", "Vreemde valuta"], highlight: true },
              { name: "Pro", price: "49,-", desc: "Uren, projecten & ERP", features: ["Alles uit Premium", "Urenregistratie", "Projectbeheer", "Handelsmodule & voorraad"], highlight: false },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-6 shadow-sm ${plan.highlight ? "text-white" : "bg-white text-gray-900"}`}
                style={plan.highlight ? { backgroundColor: "#1565C0" } : {}}
              >
                <h3 className={`text-xl font-black mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.highlight ? "text-blue-200" : "text-gray-500"}`}>{plan.desc}</p>
                <div className="mb-6">
                  <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-gray-900"}`}>€{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? "text-blue-200" : "text-gray-500"}`}>/mnd</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map(f => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlight ? "text-blue-100" : "text-gray-600"}`}>
                      <CheckCircle size={15} className={plan.highlight ? "text-green-400" : "text-green-600"} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://kleisteen.nl/tarieven"
                  className={`block text-center py-2.5 rounded-lg font-bold text-sm transition-opacity hover:opacity-90 ${plan.highlight ? "bg-white text-blue-700" : "border-2 border-blue-700 text-blue-700"}`}
                >
                  Probeer 30 dagen gratis
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARGE SCAN + CONTACTFORMULIER ── */}
      <section id="marge-scan" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Links: uitleg */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-sm font-semibold" style={{ backgroundColor: "#E3F2FD", color: "#1565C0" }}>
                <Clock size={14} />
                20 minuten · Gratis · Geen verplichtingen
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Ontdek waar u <span style={{ color: "#1565C0" }}>marge</span> laat liggen.
              </h2>
              <div className="w-16 h-1 mb-6 rounded" style={{ backgroundColor: "#7CB342" }} />
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In een kort gesprek van 20 minuten kijken we naar uw huidige projectadministratie
                en laten we zien waar u direct winst kunt behalen. Geen verkooppraatje, gewoon eerlijk advies.
              </p>

              {/* Wat u kunt verwachten */}
              <div className="space-y-4 mb-8">
                {[
                  { step: "1", title: "Wij bellen u terug", body: "Binnen 1 werkdag neemt een Kleisteen-adviseur contact met u op." },
                  { step: "2", title: "Korte intake (20 min)", body: "We bespreken uw huidige werkwijze en waar de pijnpunten zitten." },
                  { step: "3", title: "U ontvangt uw Marge Scan", body: "Concreet overzicht van waar u marge laat liggen, gratis en vrijblijvend." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-black text-sm text-white" style={{ backgroundColor: "#1565C0" }}>
                      {item.step}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vertrouwensbadges */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><Shield size={15} className="text-blue-600" /> 100% Nederlands</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-green-600" /> Al 20 jaar actief</span>
                <span className="flex items-center gap-1.5"><Star size={15} fill="#FFC107" color="#FFC107" /> 9,6 / 10 beoordeling</span>
              </div>

              {/* Telefoonnummer */}
              <div className="mt-6 flex items-center gap-3 p-4 rounded-xl border-2" style={{ borderColor: "#1565C0" }}>
                <Phone size={20} style={{ color: "#1565C0" }} />
                <div>
                  <p className="text-xs text-gray-500">Liever direct bellen?</p>
                  <a href="tel:+31553680000" className="font-bold text-gray-900 hover:underline">055 - 368 0000</a>
                </div>
              </div>
            </div>

            {/* Rechts: formulier */}
            <div className="rounded-2xl shadow-xl p-8 border border-gray-100" style={{ backgroundColor: "#F9FAFB" }}>
              {formState === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#E8F5E9" }}>
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Aanvraag ontvangen!</h3>
                  <p className="text-gray-600 mb-6">Bedankt, <strong>{form.naam}</strong>. We nemen binnen 1 werkdag contact met u op via <strong>{form.telefoon}</strong> of <strong>{form.email}</strong>.</p>
                  <button
                    onClick={() => { setFormState("idle"); setForm({ naam: "", bedrijf: "", sector: "", telefoon: "", email: "", bericht: "" }); }}
                    className="text-sm font-semibold underline"
                    style={{ color: "#1565C0" }}
                  >
                    Nog een aanvraag indienen
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-black text-gray-900 mb-1">Marge Scan aanvragen</h3>
                  <p className="text-gray-500 text-sm mb-6">Vul het formulier in — wij bellen u terug.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Naam */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        <span className="flex items-center gap-1.5"><User size={13} /> Uw naam <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="text"
                        name="naam"
                        value={form.naam}
                        onChange={handleChange}
                        placeholder="Jan de Vries"
                        className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${errors.naam ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-blue-200"}`}
                        style={{ backgroundColor: "white" }}
                      />
                      {errors.naam && <p className="text-red-500 text-xs mt-1">{errors.naam}</p>}
                    </div>

                    {/* Bedrijf */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        <span className="flex items-center gap-1.5"><Briefcase size={13} /> Bedrijfsnaam <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="text"
                        name="bedrijf"
                        value={form.bedrijf}
                        onChange={handleChange}
                        placeholder="De Vries Bouw B.V."
                        className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${errors.bedrijf ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-blue-200"}`}
                        style={{ backgroundColor: "white" }}
                      />
                      {errors.bedrijf && <p className="text-red-500 text-xs mt-1">{errors.bedrijf}</p>}
                    </div>

                    {/* Sector */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Sector</label>
                      <select
                        name="sector"
                        value={form.sector}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                        style={{ backgroundColor: "white" }}
                      >
                        <option value="">Selecteer uw sector</option>
                        <option value="scheepsbouw">Scheepsbouw / Botenbouw</option>
                        <option value="bouw">Bouw / Aannemerij</option>
                        <option value="staal">Staal / Metaalbewerking</option>
                        <option value="installatie">Technische Installatie</option>
                        <option value="interieurbouw">Interieurbouw / Meubelmaatwerk</option>
                        <option value="overig">Overige maatwerkproductie</option>
                      </select>
                    </div>

                    {/* Telefoon + Email naast elkaar */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Telefoon <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="telefoon"
                          value={form.telefoon}
                          onChange={handleChange}
                          placeholder="06-12345678"
                          className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${errors.telefoon ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-blue-200"}`}
                          style={{ backgroundColor: "white" }}
                        />
                        {errors.telefoon && <p className="text-red-500 text-xs mt-1">{errors.telefoon}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          E-mail <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jan@bedrijf.nl"
                          className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all ${errors.email ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-blue-200"}`}
                          style={{ backgroundColor: "white" }}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Bericht */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        <span className="flex items-center gap-1.5"><MessageSquare size={13} /> Korte toelichting (optioneel)</span>
                      </label>
                      <textarea
                        name="bericht"
                        value={form.bericht}
                        onChange={handleChange}
                        placeholder="Bijv: We werken met 5 medewerkers aan bouwprojecten en hebben moeite met het bijhouden van projectkosten..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                        style={{ backgroundColor: "white" }}
                      />
                    </div>

                    {/* Submit knop */}
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      style={{ backgroundColor: formState === "submitting" ? "#9E9E9E" : "#7CB342", color: "#1A1A1A" }}
                      className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md disabled:cursor-not-allowed"
                    >
                      {formState === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
                          Aanvraag wordt verzonden...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Gratis Marge Scan aanvragen
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      Uw gegevens worden vertrouwelijk behandeld en niet gedeeld met derden.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#1565C0" }} className="py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div style={{ backgroundColor: "#1A1A1A" }} className="px-3 py-1.5 rounded-sm">
              <span className="text-white font-black text-sm tracking-wider uppercase">KLEISTEEN</span>
            </div>
            <span className="text-blue-200 text-sm">Kleisteen Software B.V.</span>
          </div>
          <div className="flex gap-6 text-blue-200 text-sm">
            <a href="https://kleisteen.nl" className="hover:text-white transition-colors">kleisteen.nl</a>
            <a href="https://kleisteen.nl/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="https://kleisteen.nl/helpdesk" className="hover:text-white transition-colors">Helpdesk</a>
          </div>
          <p className="text-blue-300 text-xs">© 2026 Kleisteen. Alle rechten voorbehouden.</p>
        </div>
      </footer>

    </div>
  );
}
