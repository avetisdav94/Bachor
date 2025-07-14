import { DocumentTypeInfo, Voivodeship } from "@/src/types/profile";

export const voivodeships: Voivodeship[] = [
  { id: "dolnoslaskie", name: "Dolnośląskie", nameEn: "Нижнесилезское" },
  {
    id: "kujawsko-pomorskie",
    name: "Kujawsko-pomorskie",
    nameEn: "Куявско-поморское",
  },
  { id: "lubelskie", name: "Lubelskie", nameEn: "Люблинское" },
  { id: "lubuskie", name: "Lubuskie", nameEn: "Любушское" },
  { id: "lodzkie", name: "Łódzkie", nameEn: "Лодзинское" },
  { id: "malopolskie", name: "Małopolskie", nameEn: "Малопольское" },
  { id: "mazowieckie", name: "Mazowieckie", nameEn: "Мазовецкое" },
  { id: "opolskie", name: "Opolskie", nameEn: "Опольское" },
  { id: "podkarpackie", name: "Podkarpackie", nameEn: "Подкарпатское" },
  { id: "podlaskie", name: "Podlaskie", nameEn: "Подляское" },
  { id: "pomorskie", name: "Pomorskie", nameEn: "Поморское" },
  { id: "slaskie", name: "Śląskie", nameEn: "Силезское" },
  { id: "swietokrzyskie", name: "Świętokrzyskie", nameEn: "Свентокшиское" },
  {
    id: "warminsko-mazurskie",
    name: "Warmińsko-mazurskie",
    nameEn: "Варминьско-мазурское",
  },
  { id: "wielkopolskie", name: "Wielkopolskie", nameEn: "Великопольское" },
  {
    id: "zachodniopomorskie",
    name: "Zachodniopomorskie",
    nameEn: "Западно-поморское",
  },
];

export const documentTypes: DocumentTypeInfo[] = [
  {
    id: "none",
    name: "Не выбрано",
    description: "Документы не указаны",
    icon: "❓",
  },
  {
    id: "tourist_visa",
    name: "Туристическая виза",
    description: "Краткосрочное пребывание до 90 дней",
    icon: "🧳",
  },
  {
    id: "work_visa",
    name: "Рабочая виза",
    description: "Виза для трудоустройства",
    icon: "💼",
  },
  {
    id: "student_visa",
    name: "Студенческая виза",
    description: "Виза для обучения",
    icon: "🎓",
  },
  {
    id: "work_permit",
    name: "Разрешение на работу",
    description: "Zezwolenie na pracę",
    icon: "🔨",
  },
  {
    id: "residence_card",
    name: "Карта побыту",
    description: "Karta pobytu - временное пребывание",
    icon: "🏠",
  },
  {
    id: "permanent_residence",
    name: "Постоянное пребывание",
    description: "Karta stałego pobytu",
    icon: "🏡",
  },
  {
    id: "eu_citizen",
    name: "Гражданин ЕС",
    description: "Гражданство страны ЕС",
    icon: "🇪🇺",
  },
];
