import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const body = document.querySelector("body");
const parag = document.createElement("div");
const progress = document.createElement("div");

parag.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie dignissim blandit. Proin tempor congue augue vitae dictum. Vestibulum convallis mauris a tellus tincidunt, non placerat dui tristique. Quisque ac urna luctus, efficitur odio dignissim, aliquet sem. Suspendisse vitae suscipit risus, vitae pellentesque eros. Integer sagittis scelerisque lacus a finibus. Donec ultricies ex at elit consequat viverra. Proin dictum tempus vulputate. Aliquam in metus erat. Curabitur magna ante, gravida nec tortor id, maximus volutpat est. Sed et eros est. Cras consequat, nisl laoreet imperdiet laoreet, nibh elit finibus dolor, a rhoncus massa lectus a leo. Praesent posuere lacus magna. Aliquam ut malesuada eros, auctor fermentum mauris. Donec eget maximus odio. Fusce porta quam neque, eu rhoncus dui maximus sed.
<br/><br/>
Duis a purus ac tortor vestibulum sagittis in et massa. Mauris dictum, augue et congue convallis, enim arcu scelerisque lorem, quis pulvinar lorem felis a diam. Nulla id magna sed nibh ultricies mollis ac non arcu. Praesent rhoncus interdum mauris, sed fringilla nisi iaculis in. Curabitur rhoncus posuere facilisis. Vestibulum eu vehicula nisl, in egestas velit. Cras augue nisi, facilisis sit amet nisi sed, sagittis porttitor ante. Integer egestas luctus sem, ac ultricies nisl pretium vel. Praesent consequat venenatis massa vitae elementum. Morbi tellus velit, posuere sed nibh at, bibendum euismod lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi odio, ultrices vel dolor ac, volutpat fringilla erat. Nulla at ipsum ac nibh malesuada bibendum. Vivamus ornare elementum velit, eget tempus tortor mollis a.
<br/><br/>
Praesent consequat imperdiet augue, eget auctor orci consectetur in. Vivamus ac ultricies ex, non ultrices velit. Aenean semper ex quis tempor rutrum. Proin at mollis sapien. Aenean mattis tortor eget dui elementum dapibus. Fusce vitae felis in sapien accumsan consequat at sit amet lacus. Ut sit amet semper augue.
<br/><br/>
Etiam lacinia, mi at porttitor fermentum, nisi orci scelerisque est, sit amet commodo nulla metus eu leo. Curabitur ante purus, mattis ac velit at, venenatis volutpat metus. Phasellus at sapien ante. Donec ante metus, eleifend sit amet tortor eu, pellentesque congue sapien. Integer non turpis sed leo pharetra tempor. Morbi vehicula dui eros. Praesent vulputate risus et auctor feugiat. Nullam iaculis viverra blandit. Morbi a elit sit amet lacus consectetur vehicula. Nullam ac molestie massa. Nam urna ipsum, mollis vitae ante quis, lobortis lobortis lectus. Etiam porta ante id metus consequat varius vitae sed purus.
<br/><br/>
Sed sed lectus diam. Pellentesque egestas lectus ac lacinia tincidunt. Aenean placerat nisi at nisl vehicula iaculis. Sed egestas nisl vitae nibh maximus blandit. Aenean malesuada consequat mauris et rhoncus. Mauris ac ex et elit sollicitudin pellentesque et sit amet est. Phasellus pretium sit amet diam vitae facilisis. Phasellus vitae libero enim. Nunc finibus dignissim diam, non cursus orci laoreet non. Sed posuere dignissim lectus a lacinia. Suspendisse cursus sagittis auctor. Etiam rhoncus, erat a condimentum luctus, erat tellus sollicitudin neque, euismod venenatis mauris nulla vitae mi.
<br/><br/>
Mauris mauris metus, placerat eget tincidunt nec, blandit at arcu. Suspendisse consectetur euismod erat, a cursus dolor aliquet quis. Duis molestie tortor at nisl viverra gravida. Sed feugiat semper nibh, vitae cursus metus gravida quis. Integer consequat dui velit, nec vehicula libero condimentum non. Cras at efficitur quam. Etiam at arcu elit. Curabitur ac lectus at nisl faucibus fermentum.
<br/><br/>
Curabitur hendrerit porta elementum. Vivamus blandit suscipit maximus. Vivamus volutpat arcu a justo faucibus, vitae ultrices nulla mattis. Proin ac augue condimentum, facilisis mauris non, imperdiet nulla. Vestibulum risus purus, tincidunt vel vulputate et, cursus nec ipsum. Quisque blandit, purus laoreet volutpat sodales, magna metus porttitor elit, lacinia rutrum diam lacus non sapien. Nulla eget turpis dapibus, venenatis neque at, tempus libero. Vestibulum mi orci, facilisis sit amet molestie at, ultrices vel orci. Aliquam hendrerit dolor dapibus nibh dapibus, mollis feugiat urna scelerisque. Duis tincidunt interdum euismod. Praesent dapibus semper lectus, ac consectetur enim ornare vitae. Nam pharetra felis eget orci mollis, nec iaculis dui maximus. Vestibulum at sem ac tortor pulvinar feugiat. Curabitur aliquam mi arcu, ac tempor quam commodo ac. Sed feugiat porttitor urna in sollicitudin. In sit amet varius quam.
<br/><br/>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam lectus mi, ornare sed hendrerit at, fermentum quis orci. Donec a sapien elit. Sed varius mollis ipsum non dictum. Donec quis ante quam. Fusce nec imperdiet risus. Duis viverra quam id orci iaculis sodales non vitae mi.
<br/><br/>
Nullam at dolor in dolor maximus porta. Vivamus tempus ante eget justo auctor, quis vestibulum nisi sodales. Praesent sit amet hendrerit nisl. Phasellus vehicula eget neque ut vulputate. Donec tempus finibus tortor quis posuere. Proin hendrerit, elit maximus pellentesque sagittis, quam diam gravida quam, sit amet aliquet sem nisl non turpis. Aliquam tristique ipsum sed ipsum lacinia posuere. Morbi ut neque et augue tempor iaculis vel non diam. Sed molestie ex nulla, vel vehicula nunc rutrum sit amet. Mauris elementum sem in nibh volutpat faucibus. Sed quis sagittis purus, non hendrerit mi. Pellentesque euismod posuere purus eleifend cursus.
<br/><br/>
Nam vehicula felis sit amet purus congue commodo. Integer sapien est, laoreet vitae tempus sit amet, rutrum in libero. Morbi sed euismod eros. Etiam mauris lectus, tincidunt quis turpis quis, interdum fringilla mi. Nunc maximus rutrum elit, id venenatis risus sollicitudin vitae. Duis leo sem, porta at gravida et, scelerisque et odio. Mauris non eros metus. Suspendisse potenti. Suspendisse auctor magna in mauris pharetra ullamcorper.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie dignissim blandit. Proin tempor congue augue vitae dictum. Vestibulum convallis mauris a tellus tincidunt, non placerat dui tristique. Quisque ac urna luctus, efficitur odio dignissim, aliquet sem. Suspendisse vitae suscipit risus, vitae pellentesque eros. Integer sagittis scelerisque lacus a finibus. Donec ultricies ex at elit consequat viverra. Proin dictum tempus vulputate. Aliquam in metus erat. Curabitur magna ante, gravida nec tortor id, maximus volutpat est. Sed et eros est. Cras consequat, nisl laoreet imperdiet laoreet, nibh elit finibus dolor, a rhoncus massa lectus a leo. Praesent posuere lacus magna. Aliquam ut malesuada eros, auctor fermentum mauris. Donec eget maximus odio. Fusce porta quam neque, eu rhoncus dui maximus sed.
<br/><br/>
Duis a purus ac tortor vestibulum sagittis in et massa. Mauris dictum, augue et congue convallis, enim arcu scelerisque lorem, quis pulvinar lorem felis a diam. Nulla id magna sed nibh ultricies mollis ac non arcu. Praesent rhoncus interdum mauris, sed fringilla nisi iaculis in. Curabitur rhoncus posuere facilisis. Vestibulum eu vehicula nisl, in egestas velit. Cras augue nisi, facilisis sit amet nisi sed, sagittis porttitor ante. Integer egestas luctus sem, ac ultricies nisl pretium vel. Praesent consequat venenatis massa vitae elementum. Morbi tellus velit, posuere sed nibh at, bibendum euismod lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi odio, ultrices vel dolor ac, volutpat fringilla erat. Nulla at ipsum ac nibh malesuada bibendum. Vivamus ornare elementum velit, eget tempus tortor mollis a.
<br/><br/>
Praesent consequat imperdiet augue, eget auctor orci consectetur in. Vivamus ac ultricies ex, non ultrices velit. Aenean semper ex quis tempor rutrum. Proin at mollis sapien. Aenean mattis tortor eget dui elementum dapibus. Fusce vitae felis in sapien accumsan consequat at sit amet lacus. Ut sit amet semper augue.
<br/><br/>
Etiam lacinia, mi at porttitor fermentum, nisi orci scelerisque est, sit amet commodo nulla metus eu leo. Curabitur ante purus, mattis ac velit at, venenatis volutpat metus. Phasellus at sapien ante. Donec ante metus, eleifend sit amet tortor eu, pellentesque congue sapien. Integer non turpis sed leo pharetra tempor. Morbi vehicula dui eros. Praesent vulputate risus et auctor feugiat. Nullam iaculis viverra blandit. Morbi a elit sit amet lacus consectetur vehicula. Nullam ac molestie massa. Nam urna ipsum, mollis vitae ante quis, lobortis lobortis lectus. Etiam porta ante id metus consequat varius vitae sed purus.
<br/><br/>
Sed sed lectus diam. Pellentesque egestas lectus ac lacinia tincidunt. Aenean placerat nisi at nisl vehicula iaculis. Sed egestas nisl vitae nibh maximus blandit. Aenean malesuada consequat mauris et rhoncus. Mauris ac ex et elit sollicitudin pellentesque et sit amet est. Phasellus pretium sit amet diam vitae facilisis. Phasellus vitae libero enim. Nunc finibus dignissim diam, non cursus orci laoreet non. Sed posuere dignissim lectus a lacinia. Suspendisse cursus sagittis auctor. Etiam rhoncus, erat a condimentum luctus, erat tellus sollicitudin neque, euismod venenatis mauris nulla vitae mi.
<br/><br/>
Mauris mauris metus, placerat eget tincidunt nec, blandit at arcu. Suspendisse consectetur euismod erat, a cursus dolor aliquet quis. Duis molestie tortor at nisl viverra gravida. Sed feugiat semper nibh, vitae cursus metus gravida quis. Integer consequat dui velit, nec vehicula libero condimentum non. Cras at efficitur quam. Etiam at arcu elit. Curabitur ac lectus at nisl faucibus fermentum.
<br/><br/>
Curabitur hendrerit porta elementum. Vivamus blandit suscipit maximus. Vivamus volutpat arcu a justo faucibus, vitae ultrices nulla mattis. Proin ac augue condimentum, facilisis mauris non, imperdiet nulla. Vestibulum risus purus, tincidunt vel vulputate et, cursus nec ipsum. Quisque blandit, purus laoreet volutpat sodales, magna metus porttitor elit, lacinia rutrum diam lacus non sapien. Nulla eget turpis dapibus, venenatis neque at, tempus libero. Vestibulum mi orci, facilisis sit amet molestie at, ultrices vel orci. Aliquam hendrerit dolor dapibus nibh dapibus, mollis feugiat urna scelerisque. Duis tincidunt interdum euismod. Praesent dapibus semper lectus, ac consectetur enim ornare vitae. Nam pharetra felis eget orci mollis, nec iaculis dui maximus. Vestibulum at sem ac tortor pulvinar feugiat. Curabitur aliquam mi arcu, ac tempor quam commodo ac. Sed feugiat porttitor urna in sollicitudin. In sit amet varius quam.
<br/><br/>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam lectus mi, ornare sed hendrerit at, fermentum quis orci. Donec a sapien elit. Sed varius mollis ipsum non dictum. Donec quis ante quam. Fusce nec imperdiet risus. Duis viverra quam id orci iaculis sodales non vitae mi.
<br/><br/>
Nullam at dolor in dolor maximus porta. Vivamus tempus ante eget justo auctor, quis vestibulum nisi sodales. Praesent sit amet hendrerit nisl. Phasellus vehicula eget neque ut vulputate. Donec tempus finibus tortor quis posuere. Proin hendrerit, elit maximus pellentesque sagittis, quam diam gravida quam, sit amet aliquet sem nisl non turpis. Aliquam tristique ipsum sed ipsum lacinia posuere. Morbi ut neque et augue tempor iaculis vel non diam. Sed molestie ex nulla, vel vehicula nunc rutrum sit amet. Mauris elementum sem in nibh volutpat faucibus. Sed quis sagittis purus, non hendrerit mi. Pellentesque euismod posuere purus eleifend cursus.
<br/><br/>
Nam vehicula felis sit amet purus congue commodo. Integer sapien est, laoreet vitae tempus sit amet, rutrum in libero. Morbi sed euismod eros. Etiam mauris lectus, tincidunt quis turpis quis, interdum fringilla mi. Nunc maximus rutrum elit, id venenatis risus sollicitudin vitae. Duis leo sem, porta at gravida et, scelerisque et odio. Mauris non eros metus. Suspendisse potenti. Suspendisse auctor magna in mauris pharetra ullamcorper.
`;
body.append(parag);

progress.setAttribute("class", "progress-bar");
body.append(progress);

// Calculate percentage
const calculatePercentage = (event) => {
  const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const scroll$ = fromEvent(document, "scroll");

const progress$ = scroll$.pipe(map(calculatePercentage), tap(console.log));

progress$.subscribe((percentage) => (progress.style.width = `${percentage}%`));
