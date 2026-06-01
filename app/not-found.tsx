import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-5 bg-slate-50">
      <h1 className="text-9xl font-serif text-primary mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-6 text-dark">Seite nicht gefunden</h2>
      <p className="text-xl text-dark/70 max-w-md mb-10">
        Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
      </p>
      <Link 
        href="/" 
        className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-all"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
