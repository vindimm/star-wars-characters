export enum AppRoute {
  Home = '/',
  Characters = '/characters',
  NotFound = '/404',
}

export enum NameSpace {
  CatalogData = 'CATALOG_DATA',
  CatalogSearch = 'CATALOG_SEARCH',
}

export enum APIRoute {
  Heroes = '/people',
  HeroesByPage = '/people/?page=:id',
  HeroesBySearch = '/people/?search=:query',
  HeroById = '/people/:id',
  Schema = '/people/:id/schema',
}

export enum Pages {
  Home = 'home',
  Characters = 'characters',
}

export enum Genders {
  Male = 'male',
  Female = 'female',
  Hermaphrodite = 'hermaphrodite',
  NA = 'n/a',
}
