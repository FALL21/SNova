import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Brain,
  ShieldCheck,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src={APP_LOGO}
              alt="SNova Logo"
              className="h-12 w-auto object-contain scale-[1.25]"
              style={{ transformOrigin: "center" }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projets
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Équipe
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="flex flex-col gap-4 p-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium hover:text-primary transition-colors text-left"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium hover:text-primary transition-colors text-left"
              >
                Projets
              </button>
              <button
                onClick={() => scrollToSection("expertise")}
                className="text-sm font-medium hover:text-primary transition-colors text-left"
              >
                Expertise
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-sm font-medium hover:text-primary transition-colors text-left"
              >
                Équipe
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-transparent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Smart Nova
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              L'Explosion de l'Innovation
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              Illuminer le monde de la technologie et de l'innovation en créant des solutions intelligentes qui transforment les idées en réalité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Découvrir nos projets
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Smart Nova est une entreprise de technologie et d'innovation fondée sur la conviction que l'intelligence artificielle et les solutions technologiques peuvent transformer le monde. Nous créons des écosystèmes intelligents et centralisés qui résolvent les défis complexes des entreprises et de la société.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Innovation</h3>
                <p className="text-foreground/80">
                  Nous repoussons les limites de ce qui est possible en explorant les frontières de la technologie.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Intelligence</h3>
                <p className="text-foreground/80">
                  L'IA et la réflexion stratégique au cœur de chaque solution que nous développons.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Impact</h3>
                <p className="text-foreground/80">
                  Créer des solutions qui transforment réellement les choses pour nos clients et la société.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Confiance</h3>
                <p className="text-foreground/80">
                  Sécurité, transparence et authenticité garanties dans tous nos projets.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Nos Projets Phares
          </h2>
          <p className="text-lg text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
            Découvrez comment nous illuminons le monde de l'innovation
          </p>

          {/* SmartEdu Project */}
          <div className="max-w-5xl mx-auto mb-16">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/smart_edu_logo.PNG" 
                      alt="SmartEdu Logo" 
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      SmartEdu
                    </h3>
                    <p className="text-lg font-semibold text-foreground/80">
                      Plateforme d'Accompagnement et d'Emploi Étudiant
                    </p>
                  </div>
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed">
                  SmartEdu est une plateforme révolutionnaire qui crée un écosystème intelligent reliant étudiants, entreprises, établissements d'enseignement et l'État pour optimiser l'orientation académique et l'insertion professionnelle.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Pour les Étudiants</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>✓ Orientation personnalisée par IA</li>
                      <li>✓ Coaching en développement de compétences</li>
                      <li>✓ Accompagnement financier</li>
                      <li>✓ Portfolio de compétences dynamique</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Pour les Entreprises</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>✓ Matchmaking intelligent</li>
                      <li>✓ Identification de talents</li>
                      <li>✓ Scoring de candidats</li>
                      <li>✓ Recherche avancée par compétences</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Technologies</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• Intelligence Artificielle</li>
                      <li>• Blockchain (Ethereum)</li>
                      <li>• Smart Contracts</li>
                      <li>• Sécurité & RGPD</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Pour l'État</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li>✓ Tableaux de bord stratégiques</li>
                      <li>✓ Analyse Compétences/Besoins</li>
                      <li>✓ Suivi d'insertion</li>
                      <li>✓ Modélisation de scénarios</li>
                    </ul>
                  </div>
                </div>

                <p className="text-foreground/80 italic">
                  SmartEdu transcende la simple mise en relation. C'est une infrastructure incontournable qui comble le fossé entre l'éducation et l'emploi tout en fournissant à l'État les outils nécessaires pour piloter l'avenir de son capital humain.
                </p>
              </div>
            </Card>
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-primary">
                  <Brain className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-primary">Solutions IA Personnalisées</h3>
              </div>
              <p className="text-foreground/80">
                Développement de solutions d'Intelligence Artificielle sur mesure pour les entreprises, optimisant processus et décisions stratégiques.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-primary">
                  <ShieldCheck className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-primary">Plateforme de Données Sécurisée</h3>
              </div>
              <p className="text-foreground/80">
                Infrastructure de gestion de données utilisant la Blockchain pour garantir l'authenticité, la traçabilité et la conformité réglementaire.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-primary">
                  <BarChart3 className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-primary">Conseil en Transformation Numérique</h3>
              </div>
              <p className="text-foreground/80">
                Accompagnement stratégique des organisations dans leur transformation numérique et l'intégration de technologies innovantes.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-primary">
                  <Lightbulb className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-primary">Innovation Lab</h3>
              </div>
              <p className="text-foreground/80">
                Espace de création et d'expérimentation pour explorer les frontières de la technologie et développer les solutions de demain.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 md:py-32 bg-card">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Notre Expertise
          </h2>
          <p className="text-lg text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
            Nous maîtrisons les technologies de pointe pour créer des solutions innovantes
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Intelligence Artificielle</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Systèmes de recommandation avancés</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Traitement du Langage Naturel (NLP)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Modèles prédictifs et machine learning</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Automatisation intelligente</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Blockchain et Sécurité</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Architecture Blockchain de consortium</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Smart Contracts et automatisation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Gestion sécurisée des données</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Conformité RGPD et légale</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Développement Technologique</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Architecture logicielle scalable</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Développement full-stack</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Intégration d'APIs et services</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Optimisation de performance</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Stratégie et Conseil</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Transformation numérique</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Modélisation économique</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Analyse de marché et données</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">→</span>
                  <span>Planification stratégique</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Notre Équipe
          </h2>
          <p className="text-lg text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
            Rencontrez les talents qui font de Smart Nova une entreprise d'exception
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Mame Bou FALL */}
            <Card className="p-6 text-center">
              <div className="mb-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                  <img
                    src="/team/mame-bou-fall.jpg"
                    alt="Mame Bou FALL"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl font-bold text-primary">MBF</div>';
                      }
                    }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Mame Bou FALL</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Full Stack Developer chez Tresor Public | Élève ingénieur en IA & Big Data à l'ESP
              </p>
              <p className="text-foreground/70 text-sm mt-2">Co-fondateur</p>
            </Card>

            {/* Maire Alioune Awa SENE */}
            <Card className="p-6 text-center">
              <div className="mb-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                  <img
                    src="/team/maire-alioune-awa-sene.jpg"
                    alt="Maire Alioune Awa SENE"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl font-bold text-primary">MAS</div>';
                      }
                    }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Maire Alioune Awa SENE</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Élève ingénieure en Intelligence Artificielle et Big Data à l'ESP
              </p>
              <p className="text-foreground/70 text-sm mt-2">Co-fondatrice</p>
            </Card>

            {/* Serigne Modou THIAM */}
            <Card className="p-6 text-center">
              <div className="mb-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                  <img
                    src="/team/serigne-modou-thiam.jpg"
                    alt="Serigne Modou THIAM"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl font-bold text-primary">SMT</div>';
                      }
                    }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Serigne Modou THIAM</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Support IT chez Promobile | Élève ingénieur en IA & Big Data à l'ESP
              </p>
              <p className="text-foreground/70 text-sm mt-2">Co-fondateur</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Parlons de Votre Projet
            </h2>
            <p className="text-lg text-foreground/80 text-center mb-12">
              Vous avez une idée innovante ? Vous souhaitez transformer votre organisation ? Contactez-nous pour discuter de comment Smart Nova peut illuminer votre avenir.
            </p>

            <Card className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom complet</label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Entreprise</label>
                    <input
                      type="text"
                      placeholder="Votre entreprise"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Sujet du projet</label>
                    <select className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Sélectionnez un sujet</option>
                      <option value="smartedu">SmartEdu</option>
                      <option value="ia">Solutions IA</option>
                      <option value="blockchain">Blockchain</option>
                      <option value="transformation">Transformation Numérique</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message détaillé</label>
                  <textarea
                    placeholder="Décrivez votre projet..."
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Envoyer
                </Button>
              </form>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-semibold text-lg mb-6">Autres moyens de nous contacter</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-foreground/80">snova.startup@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium">Téléphone</p>
                      <p className="text-foreground/80">+221 77 795 49 21</p>
                      <p className="text-foreground/80">+221 77 717 65 32</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={APP_LOGO} alt="SNova Logo" className="h-12 w-12" />
              </div>
              <p className="text-sm opacity-90">
                L'Explosion de l'Innovation
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:opacity-80 transition-opacity"
                  >
                    À propos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="hover:opacity-80 transition-opacity"
                  >
                    Projets
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("expertise")}
                    className="hover:opacity-80 transition-opacity"
                  >
                    Expertise
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("team")}
                    className="hover:opacity-80 transition-opacity"
                  >
                    Équipe
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Réseaux Sociaux</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    Politique de confidentialité
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
            <p>© 2025 Smart Nova. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
