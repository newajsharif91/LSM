const getElement = id => {
    const getElement = document.getElementById(id);
    return getElement;
  }
  const clickEvent1 = (textId, divId) => {
    const getTextElement = getElement(textId);
    getTextElement.style.color = 'green';
    const getDivElement = getElement(divId)
    getDivElement.style.borderBottom = '3px solid green';
  }
  const clickEvent2 = (textId, divId) => {
    const getTextElement = getElement(textId);
    getTextElement.style.color = 'gray';
    const getDivElement = getElement(divId)
    getDivElement.style.borderBottom = 'none';
  }
  const displayPage = pageId => {
    const page = getElement(pageId);
    page.style.display = 'block'
  }
  const hidePage = pageId => {
    const page = getElement(pageId);
    page.style.display = 'none';
  }
  
  document.getElementById('notes-display').addEventListener('click', function () {
    clickEvent1('notes-display', 'notes-div');
    clickEvent2('download', 'download-div');
    displayPage('note-page');
    hidePage('download-page');
  })
  document.getElementById('download').addEventListener('click', function () {
    clickEvent1('download', 'download-div');
    clickEvent2('notes-display', 'notes-div');
    displayPage('download-page');
    hidePage('note-page');
  })