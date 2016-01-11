import sizeOf from 'browser-image-size';
const PATH = 'assets/media/art';

const art = [];

for (let num = 0; num < 11; num++) {
  const fullSizeLink = `${ PATH }/full/art-${ num }.jpg`;

  art[num] = {
    name: `Картина ${ num }`,
    description: `Описание ${ num }`,
    tmb: {
      '1x': `${ PATH }/tmb/art-${ num }.jpg`,
      '2x': `${ PATH }/tmb/2x/art-${ num }.jpg`,
    },
    src: fullSizeLink,
    size: {},
  };
}

art.sort(() => 0.5 - Math.random());
art.forEach(a => sizeOf(a.src).then(size => a.size = size));

const anons = `
Ирина очень тонко чувствует цвет,
передавая всю магию моря – синие, фиолетовые,
лазурные оттенки – вся гамма глубины и абсолютной
свободы, которая выявляет мировозрения человека.
`;

const about = `
## Ирина Горемыкина

— родилась в Москве в 1973 году.

![](https://scontent-frt3-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/1523334_500225666762809_992291016_o.jpg)

Самые яркие впечатления связаны с Крымом, т.к. семья каждое лето выезжала на живописный берег. С детства звуки моря, запахи трав, горячий песок и камни, камни похожие на скульптуры, необыкновенно красивые, непохожие друг на друга, живые. В них особая красота и даже тайна. Любовь к морю и к Югу, к синим долинам “Коктебеля” рождают в художнике новое особое видение этих мест, в новой форме созвучной с 21 веком.

Ирина окончила факультет прикладного искусства в Московском Государственном Текстильном Университете им. Косыгина. Участник всероссийских и международных выставок, творческих проектов и пленэров. Её работы находятся в частных коллекциях США, России и Украины.

В 2008 году Ирина Горемыкина была удостоенного Серебряного Ордена Международной академии культуры и искусства “Служение искусству”.

Особым качеством её произведений является видение цвета и его психологическое воздействие.

> Её девиз - индивидуальность, профессионализм, гармония.

> Её философия - через искусство мы познаём мир.

> Её работа - окно в мечту.
`;

export { art, anons, about };
