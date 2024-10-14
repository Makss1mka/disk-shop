import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { KatalogList } from '../components/katalogPageParts/katalog';
import { SearchBar } from '../components/katalogPageParts/searchBar';

export function KatalogPage() {
  return (
    <>
      <Header/>
      <main>
        <SearchBar/>
        <KatalogList/>
        <div style={{ height: "300px", width: "100%" }} />
      </main>
      <Footer/>
    </>
  );
}