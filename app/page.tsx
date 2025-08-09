export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
{/* Sección Envío y Garantía */}
<section className="mx-auto max-w-6xl px-4 py-12">
  <h2 className="text-center text-2xl font-bold text-yellow-600 mb-8">
    Envío y Garantía
  </h2>
  <div className="grid gap-6 md:grid-cols-3">
    <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow">
      <div className="bg-yellow-200 p-4 rounded-full mb-4">
        🚚
      </div>
      <h3 className="font-bold">Envío Gratis</h3>
      <p className="text-center text-sm text-gray-600">
        En pedidos superiores a $200.000,00
      </p>
    </div>
    <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow">
      <div className="bg-yellow-200 p-4 rounded-full mb-4">
        🛡️
      </div>
      <h3 className="font-bold">Garantía Oficial</h3>
      <p className="text-center text-sm text-gray-600">
        2 años de garantía en todos los productos
      </p>
    </div>
    <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow">
      <div className="bg-yellow-200 p-4 rounded-full mb-4">
        ↔️
      </div>
      <h3 className="font-bold">Devoluciones Fáciles</h3>
      <p className="text-center text-sm text-gray-600">
        30 días para cambios y devoluciones por fallas técnicas
      </p>
    </div>
  </div>
</section>
import Footer from 'components/layout/footer';

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
