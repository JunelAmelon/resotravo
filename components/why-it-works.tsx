import { Check, Users, TrendingUp, Shield, Award, Star, Briefcase, Target } from "lucide-react";

export function WhyItWorks() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "1500+",
      label: "Membres actifs",
      color: "bg-resotravo-blue"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "150%",
      label: "Croissance annuelle",
      color: "bg-resotravo-orange"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      value: "8 ans",
      label: "D'expérience",
      color: "bg-resotravo-blue"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "97%",
      label: "Satisfaction client",
      color: "bg-resotravo-orange"
    }
  ];

  const features = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Aucun Droit d'Entrée",
      description: "Démarrez sans investissement initial"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Engagement Flexible",
      description: "Adaptez votre activité à vos besoins"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "RC Pro Négociée",
      description: "Protection professionnelle optimale"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Juridique Inclus",
      description: "Support légal et administratif complet"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Coaching Personnalisé",
      description: "Accompagnement sur mesure"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Marketing Inclus",
      description: "Stratégie digitale clé en main"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Stats Section */}
      

      <div className="bg-resotravo-blue text-white p-8 rounded-2xl mb-16">
        <p className="text-xl text-center leading-relaxed">
          RESOTRAVO est né de l'expérience d'AXIMOTRAVO, un réseau solide lancé en 2015.
          <br />
          <span className="font-koulen text-2xl block mt-4">
            Nous avons mixé la puissance du digital, la proximité humaine,
            <br />
            et un accompagnement réel.
          </span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-resotravo-orange/10 rounded-xl flex items-center justify-center text-resotravo-orange">
                {feature.icon}
              </div>
              <h3 className="font-koulen text-xl text-gray-800">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}