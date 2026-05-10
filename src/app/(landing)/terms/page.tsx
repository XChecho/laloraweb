'use client';

import { motion } from "motion/react";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-20 w-full text-left">
        <header className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-display font-extrabold text-primary mb-4"
          >
            Términos y Condiciones
          </motion.h1>
          <p className="text-lg text-on-surface-variant">Última actualización: 24 de Octubre, 2023</p>
        </header>

        <article className="space-y-12">
          <section>
            <h2 className="text-3xl font-display font-bold text-on-background mb-6">1. Introducción</h2>
            <div className="space-y-4 text-on-surface-variant">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-on-background mb-6">2. Cuentas de Usuario</h2>
            <div className="space-y-4 text-on-surface-variant">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</li>
                <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</li>
                <li>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-on-background mb-6">3. Pedidos y Pagos</h2>
            <div className="space-y-4 text-on-surface-variant">
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
              <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold text-on-background mb-6">4. Servicios de Entrega</h2>
            <div className="space-y-4 text-on-surface-variant">
              <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
              <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
