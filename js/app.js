const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandparent.addEventListener(
  'click', 
  e => {
    console.log('Grandparent Capture')
  }, 
  { capture: true })

grandparent.addEventListener(
  'click', 
  e => {
    console.log('Grandparent Bubble')
  }, 
  { capture: false })

parent.addEventListener(
  'click', 
  e => {
    console.log('Parent Capture')
  }, 
  { capture: true })

parent.addEventListener(
  'click', 
  e => {
    console.log('Parent Bubble')
  }, 
  { capture: false })

child.addEventListener(
  'click', 
  e => {
    console.log('Child Capture')
  }, 
  { capture: true })

child.addEventListener(
  'click', 
  e => {
    console.log('Child Bubble')
  }, 
  { capture: false })

document.addEventListener(
  'click', 
  e => {
    console.log('Document Capture')
  }, 
  { capture: true })

document.addEventListener(
  'click', 
  e => {
    console.log('Document Bubble')
  }, 
  { capture: false })