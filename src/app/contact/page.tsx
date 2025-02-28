'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tutaj dodaj logikę wysyłania formularza
    console.log(formData);
  };

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">Kontakt</h1>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Dane kontaktowe</h2>
                <div className="space-y-4 text-gray-300">
                  <p>📧 contact@logix.com</p>
                  <p>📞 +48 123 456 789</p>
                  <p>📍 ul. Przykładowa 1, 00-000 Warszawa</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white mb-2">Imię i nazwisko</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-white mb-2">Wiadomość</label>
                <textarea
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
