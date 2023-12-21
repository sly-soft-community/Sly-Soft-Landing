import ExploreButton from "@/components/Ui/ui-buttons/explore-button/ExploreButton";
import Icons, {
  ServicesBg,
  ServicesBgFourth,
  ServicesBgThree,
} from "../../media/img";

export const servicesItems = [
  {
    id: 1,
    fillIcon: ServicesBg,
    mobileFillIcon: ServicesBgThree,
    ratated: "",
    title: "Разработка сайтов",
    subTitle:
      "Увеличьте свое присутствие в Интернете с помощью профессионально созданных веб-сайтов, включающие: сайты-визитки, корпоративные сайты, лендинги, интернет-магазины и промо-сайты.",
    button: <ExploreButton name="Explore" />,
  },
  {
    id: 2,
    fillIcon: ServicesBg,
    mobileFillIcon: ServicesBgThree,
    ratated: "desctop",
    title: "Сложные корпоративные проекты",
    subTitle:
      "Уверенно решайте сложные задачи. Наша команда преуспевает в выполнении многогранных корпоративных проектов, требующих точности и креативности.",
    button: <ExploreButton name="Explore" />,
  },
  {
    id: 3,
    fillIcon: ServicesBgThree,
    mobileFillIcon: ServicesBgThree,
    title: "Разработка Web-приложений",
    subTitle:
      "Используйте динамичные и удобные в использовании веб-приложения, которые оптимизируют ваши бизнес-процессы и вовлекают вашу аудиторию.",
    button: <ExploreButton name="Explore" />,
  },
  {
    id: 4,
    fillIcon: ServicesBgFourth,
    mobileFillIcon: ServicesBgThree,
    title: "Брендинг и дизайн веб-сайта",
    subTitle:
      "Создайте сильную индивидуальность бренда и привлекайте посетителей визуально потрясающим и интуитивно понятным дизайном веб-сайта, отражающим ваше уникальное видение.",
    button: <ExploreButton name="Explore" />,
  },
  {
    id: 5,
    fillIcon: ServicesBgThree,
    mobileFillIcon: ServicesBgThree,
    title: "Разработка мобильных приложений",
    subTitle:
      "Мы специализируемся на разработке для iOS и Android, обеспечивая оптимальную производительность на обеих платформах, разработанных для обеспечения исключительного пользовательского опыта.",
    button: <ExploreButton name="Explore" />,
  },
  {
    id: 6,
    fillIcon: ServicesBgFourth,
    mobileFillIcon: ServicesBgThree,
    ratated: "mobile",
    title: "Обеспечение качества (QA)",
    subTitle:
      "Мы тщательно тестируем и доводим до совершенства наши решения, чтобы убедиться, что они соответствуют самым высоким стандартам производительности и удовлетворенности пользователей.",
    button: <ExploreButton name="Explore" />,
  },
];
