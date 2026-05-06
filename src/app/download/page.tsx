import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { QRCodeSVG } from '@/components/QRCodeWrapper';

export default async function DownloadPage() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';

  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
  const isAndroid = /Android/i.test(userAgent);

  // Redirect mobile to appropriate store
  // For now, redirect to store homepages
  const appStoreUrl = 'https://apps.apple.com';
  const playStoreUrl = 'https://play.google.com/store/apps';

  if (isIOS) {
    redirect(appStoreUrl);
  }

  if (isAndroid) {
    redirect(playStoreUrl);
  }

  // Desktop: show both options
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-lora-bg px-6 py-20">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center space-y-8">
        <h1 className="text-2xl font-bold text-lora-text">
          Descarga La Lora App
        </h1>
        <p className="text-lora-text-muted">
          Escanea el código QR con tu celular o elige tu tienda de aplicaciones.
        </p>

        {/* QR Code */}
        <div className="flex justify-center">
          <QRCodeSVG
            value={`${process.env.NEXT_PUBLIC_APP_URL || 'https://lalora.com'}/download`}
            size={150}
            level="M"
            fgColor="#0A873A"
          />
        </div>

        {/* Store Links */}
        <div className="space-y-3">
          <Link
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-black hover:bg-gray-800 text-white py-4 rounded-2xl font-semibold transition-colors"
          >
            Descargar en App Store
          </Link>
          <Link
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-black hover:bg-gray-800 text-white py-4 rounded-2xl font-semibold transition-colors"
          >
            Descargar en Google Play
          </Link>
        </div>
      </div>
    </main>
  );
}
