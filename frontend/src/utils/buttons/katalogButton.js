import ReactDOM from 'react-dom/client';
import { KatalogPage } from '../../pages/katalogPage';

export function goToKatalog() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <KatalogPage/>
    );
}