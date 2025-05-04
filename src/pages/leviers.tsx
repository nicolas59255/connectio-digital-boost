
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAButton from '@/components/ui/CTAButton';
import { ArrowRight, CheckCircle2, LightbulbIcon } from 'lucide-react';

const LevierPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-purple/5">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/2 -left-20 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
            <div className="mb-8 inline-block">
              <span className="bg-primary-50 text-primary-700 font-medium px-4 py-2 rounded-full text-sm inline-flex items-center">
                <LightbulbIcon className="h-4 w-4 mr-2" />
                Guide pratique
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              5 leviers d'automatisation par l'IA
            </h1>
            
            <div className="bg-white rounded-xl shadow-xl p-6 mb-10">
              <p className="text-lg text-gray-700 mb-6">
                Découvrez comment l'intelligence artificielle peut <span className="font-semibold">simplifier et accélérer</span> votre activité, même dans une PME ou une ETI.
              </p>
              <p className="text-lg text-gray-700">
                Ce guide présente 5 leviers <span className="text-primary-600 font-medium">simples et immédiatement activables</span> pour automatiser vos tâches, réduire les erreurs et gagner du temps au quotidien.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-16">
            {/* Levier 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 py-4 px-6">
                <h2 className="text-2xl font-bold text-white">
                  Levier 1 – Automatisation de la saisie documentaire
                </h2>
              </div>
              <div className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-700 text-xl">📄</span>
                    </div>
                    <p className="text-gray-800">
                      <span className="font-medium">Cas typique:</span> factures, bons de livraison, contrats scannés à la main.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-700 text-xl">🧠</span>
                    </div>
                    <p className="text-gray-800">
                      <span className="font-medium">Solution:</span> Outils OCR intelligents et IA de catégorisation.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-700 text-xl">✅</span>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Bénéfices:</p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-center text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>90% de gain de temps</span>
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>Moins d'erreurs de saisie</span>
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>Intégration directe dans vos outils comptables</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Levier 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-accent-purple to-accent-purple/80 py-4 px-6">
                <h2 className="text-2xl font-bold text-white">
                  Levier 2 – Cybersécurité comportementale
                </h2>
              </div>
              <div className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-accent-purple text-xl">🔐</span>
                    </div>
                    <p className="text-gray-800">
                      <span className="font-medium">Cas typique:</span> connexions anormales, fuites de données, failles réseau.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-accent-purple text-xl">🧠</span>
                    </div>
                    <p className="text-gray-800">
                      <span className="font-medium">Solution:</span> IA comportementale qui surveille les activités réseau 24/7.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-accent-purple text-xl">✅</span>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Bénéfices:</p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-center text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>Protection proactive</span>
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>Alertes avant incident</span>
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>Conformité RGPD renforcée</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Levier 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 py-4 px-6">
                <h2 className="text-2xl font-bold text-white">
                  Levier 3 – Relances automatisées
                </h2>
              </div>
              <div className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-xl">📩</span>
                    </div>
                    <p className="text-gray-800">
                      <span className="font-medium">Cas typique:</span> devis sans réponse, impayés, tickets ouverts trop longtemps.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-xl">🧠</span>
                    </div>
                    <p className="text-gray-800">
                      <span className="font-medium">Solution:</span> Scénarios automatisés (email/SMS), bots conversationnels.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-xl">✅</span>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Bénéfices:</p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-center text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>Moins d'impayés</span>
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>Gain de temps pour les équipes</span>
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>Meilleure satisfaction client</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Levier 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-amber-400 py-4 px-6">
                <h2 className="text-2xl font-bold text-white">
                  Levier 4 – Pilotage en temps réel
                </h2>
              </div>
              <div className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-amber-600 text-xl">📊</span>
                    </div>
                    <p className="text-gray-800">
                      <span className="font-medium">Cas typique:</span> données dispersées, fichiers Excel à jour partiellement.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-amber-600 text-xl">🧠</span>
                    </div>
                    <p className="text-gray-800">
                      <span className="font-medium">Solution:</span> Dashboard IA connecté à vos outils métiers (ERP, CRM, etc).
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-amber-600 text-xl">✅</span>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Bénéfices:</p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-center text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>Décisions plus rapides</span>
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>Vision claire de l'activité</span>
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>Moins de dépendance aux fichiers manuels</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Levier 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 py-4 px-6">
                <h2 className="text-2xl font-bold text-white">
                  Levier 5 – Synchronisation des logiciels
                </h2>
              </div>
              <div className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-xl">🔄</span>
                    </div>
                    <p className="text-gray-800">
                      <span className="font-medium">Cas typique:</span> outils qui ne se parlent pas entre eux (ERP + CRM + emails).
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-xl">🧠</span>
                    </div>
                    <p className="text-gray-800">
                      <span className="font-medium">Solution:</span> Middleware ou plateforme IA low-code pour connecter les apps.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-xl">✅</span>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Bénéfices:</p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-center text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>Moins de double saisie</span>
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>Processus fluides</span>
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>Données centralisées</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-primary-600 to-accent-purple rounded-xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Envie d'activer un de ces leviers ?
            </h3>
            <p className="text-lg mb-6">
              Connectio vous accompagne dans l'identification, la mise en œuvre et le financement de vos projets IA.
            </p>
            <CTAButton href="/#contact" className="bg-white text-primary-700 hover:bg-gray-100">
              Prendre rendez-vous <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LevierPage;
