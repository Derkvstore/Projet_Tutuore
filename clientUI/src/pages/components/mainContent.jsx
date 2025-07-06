import { Link } from 'react-router-dom';

function MainContent() {
    return (
        <div>
            {/* Section principale */}
            <main className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 px-6 py-12 bg-gray-200">
                    {/* Nous allons animé la page  */}
                    <div
                      className="w-full md:w-1/2 text-center md:text-left opacity-0 animate-fade-in-up"
                      style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
                    >
                      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">
                        Bienvenue à Techno-Lab Ista !
                      </h1>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        Restez informé, suivez votre progression et communiquez
                        facilement avec votre établissement.
                      </p>

                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-sm sm:text-base text-blue-800 font-semibold my-6">
                        {[
                          { icon: "📚", text: "Suivez votre étude en ligne" },
                          { icon: "🎓", text: " Nos Étudiants actifs" },
                          { icon: "👩‍🏫", text: "Les meilleurs Profs sont chez nous 🔥" },
                          { icon: "🕒", text: "Emplois du temps à jour" },
                          { icon: "📨", text: "Alertes en temps réel" },
                          { icon: "🏆", text: "100% motivation garantie" },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="bg-white rounded-xl shadow-md py-4 hover:shadow-lg transition transform opacity-0 animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.2}s`, animationFillMode: 'forwards' }}
                          >
                            <div className="text-2xl">{item.icon}</div>
                            <p className="mt-2">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Anime mon image */}
                    <div
                      className="w-full md:w-1/2 opacity-0 animate-fade-in-up"
                      style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
                    >
                      <img
                        src="assets/eleve.avif"
                        alt="Techno-Lab ISTA Publicité"
                        className="rounded-lg shadow-lg w-full object-cover"
                      />
                    </div>
                  </main>




            {/* La section Aperçus  */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-12 bg-gray-100">
  {[
    {
      icon: "🏫",
      title: "À propos de Techno-Lab ISTA",
      text: "Fondée en 2015, Techno-Lab ISTA est une institution de formation professionnelle reconnue, spécialisée dans les filières technologiques, commerciales et de gestion.",
      link: { href: "/politique", text: "" },
    },
    {
      icon: "📚",
      title: "Nos Formations",
      text: (
        <ul className="space-y-1">
          <li>Analyste Programmation (AP)</li>
          <li>Informatique de Gestion (IG)</li>
          <li>Banque Finance Assurance (FBA)</li>
          <li>Marketing & GRH</li>
        </ul>
      ),
      link: { href: "/filieres", text: "Découvrir toutes les filières" },
    },
    {
      icon: "🌟",
      title: "Notre Mission",
      text: "Offrir une formation professionnelle de qualité, axée sur la pratique et l'employabilité, tout en favorisant l'innovation et l'excellence académique.",
      link: { href: "#valeurs", text: "" },
    },
  ].map((block, i) => (
    <div
      key={i}
      className="bg-white p-6 rounded-lg shadow hover:shadow-md transition transform hover:-translate-y-1 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${i * 0.3}s`, animationFillMode: "forwards" }}
    >
      <div className="text-3xl text-blue-600 mb-4">{block.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
      <div className="text-sm text-gray-600 mb-4">
        {block.text}
      </div>
      <a href={block.link.href} className="text-blue-600 hover:underline">
        {block.link.text}
      </a>
    </div>
  ))}
</section>


        </div>
    );
}

export default MainContent;
