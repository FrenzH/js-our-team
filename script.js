console.log('JS OK!')
const dataCard = [

    { name : 'Wayne Barnett',
      position : 'Founder & CEO',
      img : 'wayne-barnett-founder-ceo.jpg'},

    { name : 'Angela Caroll',
      position : 'Chief Editor',
      img : 'angela-caroll-chief-editor.jpg'},

    { name : 'Walter Gordon',
      position : 'Office Manager',
      img : 'walter-gordon-office-manager.jpg'},

    { name : 'Angela Lopez',
      position : 'Social Media Manager',
      img : 'angela-lopez-social-media-manager.jpg'},

    { name : 'Scott Estrada',
      position : 'Developer',
      img : 'scott-estrada-developer.jpg'},

    {  name : 'Barbara Ramos',
       position : 'Graphic Designer',
       img : 'barbara-ramos-graphic-designer.jpg'}
];



for(let i=0;i<dataCard.length;i++){
    console.log(dataCard[i].name)
    console.log(dataCard[i].position)
    console.log(dataCard[i].img)

}