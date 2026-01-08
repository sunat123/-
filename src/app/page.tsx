import Image from "next/image";

const topLanguages = [
  { name: "English", articles: "7,116,000+", code: "en", native: "English" },
  { name: "Japanese", articles: "1,484,000+", code: "ja", native: "日本語" },
  { name: "German", articles: "3.084.000+", code: "de", native: "Deutsch" },
  { name: "French", articles: "2,730,000+", code: "fr", native: "Français" },
  { name: "Russian", articles: "2,078,000+", code: "ru", native: "Русский" },
  { name: "Spanish", articles: "2.085.000+", code: "es", native: "Español" },
  { name: "Italian", articles: "1.950.000+", code: "it", native: "Italiano" },
  { name: "Chinese", articles: "1,518,000+", code: "zh", native: "中文" },
  { name: "Polish", articles: "1,680,000+", code: "pl", native: "Polski" },
  { name: "Portuguese", articles: "1.162.000+", code: "pt", native: "Português" },
];

const wikiProjects = [
  { name: "Commons", description: "Free media collection", icon: "https://ext.same-assets.com/3573477185/133134669.svg" },
  { name: "Wikivoyage", description: "Free travel guide", icon: "https://ext.same-assets.com/3573477185/2234953682.svg" },
  { name: "Wiktionary", description: "Free dictionary", icon: "https://ext.same-assets.com/3573477185/1378760777.svg" },
  { name: "Wikibooks", description: "Free textbooks", icon: "https://ext.same-assets.com/3573477185/4071379535.svg" },
  { name: "Wikinews", description: "Free news source", icon: "https://ext.same-assets.com/3573477185/772797738.svg" },
  { name: "Wikidata", description: "Free knowledge base", icon: "https://ext.same-assets.com/3573477185/1847915696.svg" },
  { name: "Wikiversity", description: "Free learning resources", icon: "https://ext.same-assets.com/3573477185/117259783.svg" },
  { name: "Wikiquote", description: "Free quote compendium", icon: "https://ext.same-assets.com/3573477185/310005087.svg" },
  { name: "MediaWiki", description: "Free & open wiki software", icon: "https://ext.same-assets.com/3573477185/2799127061.svg" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <div className="text-center pt-8 md:pt-12">
        <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-black">Wikipedia</h1>
        <p className="text-sm md:text-base text-gray-600 mt-1">The Free Encyclopedia</p>
      </div>

      <div className="flex flex-col items-center mt-6 md:mt-8 px-4 w-full max-w-4xl">
        <div className="relative flex items-center justify-center w-full">
          <div className="hidden md:flex flex-col items-end space-y-3 mr-4 text-right">
            {topLanguages.slice(0, 5).map((lang) => (
              <a key={lang.code} href={`https://${lang.code}.wikipedia.org`} className="group">
                <span className="text-blue-600 hover:underline font-medium">{lang.native}</span>
                <span className="text-gray-500 text-sm ml-1">{lang.articles}</span>
              </a>
            ))}
          </div>

          <div className="w-32 h-32 md:w-44 md:h-44 mx-4 flex-shrink-0">
            <Image src="https://ext.same-assets.com/3573477185/3758921987.png" alt="Wikipedia Globe" width={176} height={176} className="w-full h-full object-contain" />
          </div>

          <div className="hidden md:flex flex-col items-start space-y-3 ml-4 text-left">
            {topLanguages.slice(5, 10).map((lang) => (
              <a key={lang.code} href={`https://${lang.code}.wikipedia.org`} className="group">
                <span className="text-blue-600 hover:underline font-medium">{lang.native}</span>
                <span className="text-gray-500 text-sm ml-1">{lang.articles}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-lg px-4 mt-6 md:mt-8">
        <div className="flex border border-gray-300 rounded-sm overflow-hidden">
          <input type="text" placeholder="Search Wikipedia" className="flex-1 px-4 py-2.5 text-base outline-none" />
          <select className="border-l border-gray-300 px-3 py-2 bg-gray-50 text-gray-600 text-sm cursor-pointer">
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="de">DE</option>
          </select>
          <button type="button" className="bg-gray-100 px-4 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-gray-600">
        <span className="text-sm">Read Wikipedia in your language</span>
      </div>

      <div className="w-full max-w-4xl border-t border-gray-200 mt-8" />

      <div className="w-full max-w-5xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-start gap-3">
              <Image src="https://ext.same-assets.com/3573477185/1105993308.svg" alt="Wikipedia logo" width={40} height={40} />
              <div className="text-sm text-gray-600">
                <p>Wikipedia is hosted by the Wikimedia Foundation, a non-profit organization.</p>
                <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">You can support our work with a donation.</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {wikiProjects.map((project) => (
                <a key={project.name} href="#" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                  <Image src={project.icon} alt={project.name} width={40} height={40} className="w-10 h-10" />
                  <div>
                    <span className="text-blue-600 font-medium text-sm">{project.name}</span>
                    <p className="text-xs text-gray-500">{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        <p>This page is available under the <a href="#" className="text-blue-600 hover:underline">Creative Commons Attribution-ShareAlike License</a></p>
      </footer>
    </main>
  );
}