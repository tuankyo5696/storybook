function loadStories(){
    require('../src/stories');
    require('./../src/component/Button/Button.component.story');
    require('./../src/component/AlertDialog/AlertDialog.component.story');
    require('./../src/component/Loading/Loading.component.story');
    require('./../src/component/CheckboxInput/CheckboxInput.component.story');

}

const stories = [
    './../src/component/Button/Button.component.story',
    './../src/component/AlertDialog/AlertDialog.component.story',
    './../src/component/Loading/Loading.component.story',
    './../src/component/CheckboxInput/CheckboxInput.component.story'
]

module.exports = {
    loadStories,
    stories
} 