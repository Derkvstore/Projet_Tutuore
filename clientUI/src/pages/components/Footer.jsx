function Footer() {
  return (
    <div>
      {/* Pied de page */}
      <footer className="bg-gray-800 text-white py-6 px-4 text-center text-sm sm:text-base md:text-sm lg:text-base">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-400">Techno-Lab ISTA</span>. Tous droits réservés.
      </footer>
    </div>
  );
}

export default Footer;
