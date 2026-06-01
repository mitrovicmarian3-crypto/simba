
import Image from 'next/image';

export default function TestPage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-5">Image Test</h1>
      <div className="space-y-10">
        <div>
          <p>Standard img tag:</p>
          <img src="/images/logos/logo.png" alt="Standard Logo" className="w-32" />
        </div>
        <div>
          <p>Standard img tag (Logo):</p>
          <img src="/images/logos/logo.png" alt="Standard Logo" className="w-32" />
        </div>
        <div>
          <p>Standard img tag (Hero):</p>
          <img src="/images/hero/header.webp" alt="Hero Header" className="w-96" />
        </div>
      </div>
    </div>
  );
}
