import type { TimeLineType } from "~/types/TimeLineType";

export function useTimeLine() {
  const timeLineDataEn: TimeLineType[][] = [
    [
      {
        id: 1,
        title: "EGIODIGITAL",
        date: "From 01/20",
        body: `<ul>
              <li>Vue js (Nuxt js)</li>
              <li>Maintenance and development of new features</li>
              <li>
                Frontend development in CMS solutions such as Magento,
                PrestaShop, Wordpress
              </li>
              <li>Frontend development in the Symfony framework</li>
              <li>Fixed bugs</li>
            </ul>`,
        type: "experiences",
        image: "/images/timeline/agence-web-maroc-offshore-egio.svg",
      },
    ],
    [
      {
        id: 2,
        title: "SUPMTI - Engineering cycle",
        date: "21/22",
        body: "<ul><li>Information Systems Engineering</li></ul>",
        type: "educations",
        image: "/images/timeline/supmti.png",
      },
    ],
    [
      {
        id: 4,
        title: "SUPMTI - Professional license",
        date: "18/19",
        body: "<ul><li>Professional degree in computer systems",
        type: "educations",
        image: "/images/timeline/supmti.png",
      },
      {
        id: 3,
        title: "FORNET",
        date: "18/19",
        body: `<ul>
              <li>Integration of responsive HTML mockups</li>
              <li>Creation of starter themes</li>
              <li>Integration into Drupal and WordPress CMS</li>
            </ul>`,
        type: "experiences",
        image: "/images/timeline/fornet.png",
      },
    ],
    [
      {
        id: 5,
        title: "ISTA - DTS",
        date: "16/17",
        body: "<ul><li>Technician specializing in software development</li></ul>",
        type: "educations",
        image: "/images/timeline/ofppt.png",
      },
    ],
    [
      {
        id: 6,
        title: "Baccalaureate",
        date: "June 2013",
        body: "<ul><li>Baccalauréat sciences de la vie et de la terre</li></ul>",
        type: "educations",
        image: "/images/timeline/Baccalaureate.png",
      },
    ],
  ];
  const timeLineDataFr: TimeLineType[][] = [
    [
      {
        id: 1,
        title: "EGIODIGITAL",
        date: "Depuis 01/20",
        body: `<ul>
              <li>Vue js (Nuxt js)</li>
              <li>Maintenance et développement de nouvelles fonctionnalités</li>
              <li>
                Développement frontend dans des solutions CMS telles que Magento,
                PrestaShop, Wordpress
              </li>
              <li>Développement frontend dans le framework Symfony</li>
              <li>Correction de bugs</li>
            </ul>`,
        type: "experiences",
        image: "/images/timeline/agence-web-maroc-offshore-egio.svg",
      },
    ],
    [
      {
        id: 2,
        title: "SUPMTI - Cycle d'ingénierie",
        date: "21/22",
        body: "<ul><li>Ingénierie des systèmes d'information</li></ul>",
        type: "educations",
        image: "/images/timeline/supmti.png",
      },
    ],
    [
      {
        id: 4,
        title: "SUPMTI - Licence professionnelle",
        date: "18/19",
        body: "<ul><li>Licence professionnelle en systèmes informatiques",
        type: "educations",
        image: "/images/timeline/supmti.png",
      },
      {
        id: 3,
        title: "FORNET",
        date: "18/19",
        body: `<ul>
              <li>Intégration de maquettes HTML responsives</li>
              <li>Création de thèmes de démarrage</li>
              <li>Intégration dans les CMS Drupal et WordPress</li>
            </ul>`,
        type: "experiences",
        image: "/images/timeline/fornet.png",
      },
    ],
    [
      {
        id: 5,
        title: "ISTA - DTS",
        date: "16/17",
        body: "<ul><li>Technicien spécialisé en développement logiciel</li></ul>",
        type: "educations",
        image: "/images/timeline/ofppt.png",
      },
    ],
    [
      {
        id: 6,
        title: "Baccalauréat",
        date: "Juin 2013",
        body: "<ul><li>Baccalauréat sciences de la vie et de la terre</li></ul>",
        type: "educations",
        image: "/images/timeline/Baccalaureate.png",
      },
    ],
  ];
  return {
    timeLineDataEn,
    timeLineDataFr,
  };
}
