import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const LevierPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <Navbar />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            5 leviers d’automatisation par l’IA
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Découvrez comment l'intelligence artificielle peut simplifier et accélérer votre activité, même dans une PME ou une ETI.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Ce guide présente 5 leviers simples et immédiatement activables pour automatiser vos tâches, réduire les erreurs et gagner du temps au quotidien.
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Levier 1 – Automatisation de la saisie documentaire</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>📄 Cas typique : factures, bons de livraison, contrats scannés à la main.</li>
                <li>🧠 Solution : Outils OCR intelligents et IA de catégorisation.</li>
                <li>✅ Bénéfices :
                  <ul className="list-disc pl-6">
                    <li>90% de gain de temps</li>
                    <li>Moins d’erreurs de saisie</li>
                    <li>Intégration directe dans vos outils comptables</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Levier 2 – Cybersécurité comportementale</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>🔐 Cas typique : connexions anormales, fuites de données, failles réseau.</li>
                <li>🧠 Solution : IA comportementale qui surveille les activités réseau 24/7.</li>
                <li>✅ Bénéfices :
                  <ul className="list-disc pl-6">
                    <li>Protection proactive</li>
                    <li>Alertes avant incident</li>
                    <li>Conformité RGPD renforcée</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Levier 3 – Relances automatisées</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>📩 Cas typique : devis sans réponse, impayés, tickets ouverts trop longtemps.</li>
                <li>🧠 Solution : Scénarios automatisés (email/SMS), bots conversationnels.</li>
                <li>✅ Bénéfices :
                  <ul className="list-disc pl-6">
                    <li>Moins d’impayés</li>
                    <li>Gain de temps pour les équipes</li>
                    <li>Meilleure satisfaction client</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Levier 4 – Pilotage en temps réel</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>📊 Cas typique : données dispersées, fichiers Excel à jour partiellement.</li>
                <li>🧠 Solution : Dashboard IA connecté à vos outils métiers (ERP, CRM, etc).</li>
                <li>✅ Bénéfices :
                  <ul className="list-disc pl-6">
                    <li>Décisions plus rapides</li>
                    <li>Vision claire de l’activité</li>
                    <li>Moins de dépendance aux fichiers manuels</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Levier 5 – Synchronisation des logiciels</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>🔄 Cas typique : outils qui ne se parlent pas entre eux (ERP + CRM + emails).</li>
                <li>🧠 Solution : Middleware ou plateforme IA low-code pour connecter les apps.</li>
                <li>✅ Bénéfices :
                  <ul className="list-disc pl-6">
                    <li>Moins de double saisie</li>
                    <li>Processus fluides</li>
                    <li>Données centralisées</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-700 mt-8">
            <strong>Envie d’activer un de ces leviers ?</strong><br />
            Connectio vous accompagne dans l’identification, la mise en œuvre et le financement de vos projets IA.
          </p>
        </div>
        <main className="flex-grow" />
      </div>
      <Footer />
    </div>
  );
};

export default LevierPage;