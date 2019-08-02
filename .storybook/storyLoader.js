function loadStories(){
    require('../src/stories');
    require('./../src/component/Button/Button.component.story');
    require('./../src/component/AlertDialog/AlertDialog.component.story');
    require('./../src/component/Loading/Loading.component.story');
    require('./../src/component/CheckboxInput/CheckboxInput.component.story');
    require('./../src/component/OnlineStatusBar/OnlineStatusBar.component.story');
    require('./../src/component/BaseSelectDialog/BaseSelectDialog.component.story');
    require('./../src/component/FontIcon/FontIcon.component.story');
    require('./../src/component/SelectColorModal/SelectColorModal.component.story');

}

const stories = [
    './../src/component/Button/Button.component.story',
    './../src/component/AlertDialog/AlertDialog.component.story',
    './../src/component/Loading/Loading.component.story',
    './../src/component/CheckboxInput/CheckboxInput.component.story',
    './../src/component/OnlineStatusBar/OnlineStatusBar.component.story',
    './../src/component/SelectColorModal/SelectColorModal.component.story',
    './../src/component/FontIcon/FontIcon.component.story',
    './../src/component/BaseSelectDialog/BaseSelectDialog.component.story'
]

module.exports = {
    loadStories,
    stories
} 