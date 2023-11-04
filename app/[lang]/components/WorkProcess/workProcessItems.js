import Icons from "@/media/img";

export const workProcessItems = [
  {
    id: 1,
    icon: Icons.Planning,
    title: "Планирование",
    width: 300,
    subTitle: [
      {
        title: "Анализ",
        styles: {
          display: "inline-flex",
          padding: "4px 43px",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) 0%, rgba(237, 129, 39, 0.80) 1360%)",
        },
      },
      {
        title: "Сост. требований",
        styles: {
          display: "flex",
          padding: "4px 8px",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) -180%, rgba(237, 129, 39, 0.80) 1180%)",
        },
      },
    ],
  },
  {
    id: 2,
    icon: Icons.Design,
    title: "Дизайн",
    width: 573,
    display: "flex",
    flexDirection: "column",
    left: "26%",
    top: "34%",
    subTitle: [
      {
        title: "Разработка брендинга",
        styles: {
          display: "flex",
          width: 370,
          padding: "4px 55px",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) -360%, rgba(237, 129, 39, 0.80) 1000%)",
        },
      },
      {
        title: "Разработка дизайна сайта",
        styles: {
          display: "flex",
          width: 470,
          padding: "4px 82px",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) -540%, rgba(237, 129, 39, 0.80) 820%)",
          alignSelf: "flex-end",
        },
      },
    ],
  },
  {
    id: 3,
    icon: Icons.Script,
    title: "Разработка",
    width: 870,
    display: "flex",
    flexDirection: "column",
    left: "69%",
    top: "68%",
    subTitle: [
      {
        title: "Верстка",
        styles: {
          display: "inline-flex",
          width: 670,
          padding: "4px 289px",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) -720%, rgba(237, 129, 39, 0.80) 640%)",
        },
      },
      {
        title: "Разработка ",
        styles: {
          display: "flex",
          padding: "4px 368px",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) -898.75%, rgba(237, 129, 39, 0.80) 460%)",
          alignSelf: "flex-end",
        },
      },
    ],
  },
  {
    id: 4,
    icon: Icons.Testing,
    title: "Тестирование",
    width: 870,
    left: "69%",
    top: "97%",
    subTitle: [
      {
        title: "Тестирование",
        styles: {
          display: "flex",
          padding: "4px 354px",
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) -1080%, rgba(237, 129, 39, 0.80) 280%)",
        },
      },
    ],
  },
  {
    id: 5,
    icon: Icons.Support,
    title: "Запуск & Поддержка",
    width: 370,
    left: "139%",
    top: "111%",
    subTitle: [
      {
        title: "Запуск, поддержка",
        styles: {
          display: "flex",
          padding: "4px 76px",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, rgba(194, 37, 44, 0.80) -1260%, rgba(237, 129, 39, 0.80) 100%)",
        },
      },
    ],
  },
];
