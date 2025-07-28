import type { Server } from 'stackpress/server';

export default function plugin(server: Server) {
    server.on('route', async _ => {
        server.get('/api/home', () => import('./pages/home.js'));
        server.get('/', () => import('./pages/home.js'));
        server.get('/', '@/plugins/app/views/home', -100);
    });
}