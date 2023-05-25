# 常见的流媒体协议
所谓的流可以理解为前端通过分片向后端请求数据，获得一个个chunk接着添加到video的缓冲区中进行播放，也就是说基于Range的HTTP协议（206）；传统的方式是直接加载整个视频到前端接着再进行播放，现代的做法是边加载边播放



# MediaSource

MediaSource是Web API中的一个接口，用于表示媒体源。它允许JavaScript生成媒体源并将其绑定到HTMLMediaElement以进行播放。使用MediaSource，JavaScript可以将媒体数据追加到媒体源缓冲区中，并在缓冲区中积累足够的数据时通知HTMLMediaElement开始播放。以下是一个简单的使用MediaSource的示例：

```js
// 创建MediaSource对象
var mediaSource = new MediaSource();

// 将MediaSource对象绑定到HTMLMediaElement
var video = document.querySelector('video');
video.src = URL.createObjectURL(mediaSource);

// 在MediaSource对象打开时创建媒体源缓冲区
mediaSource.addEventListener('sourceopen', function() {
  // sourceBuffer: 缓冲区对象
  var sourceBuffer = mediaSource.addSourceBuffer('video/mp4');
  // 将媒体数据追加到缓冲区中
  sourceBuffer.appendBuffer(mediaData);
});
```

在上面的示例中，首先创建了一个MediaSource对象，并将其绑定到HTMLMediaElement。然后，在sourceopen事件处理程序中，创建了一个媒体源缓冲区，并将媒体数据追加到其中。最后，HTMLMediaElement将开始播放缓冲区中的数据。


# MediaSource的readyState

`MediaSource.readyState`是`MediaSource`对象的一个属性，用于表示媒体源的当前状态。该属性可以是以下值之一：

- `closed`：表示媒体源已关闭，无法使用。
- `open`：表示媒体源已打开，可以使用。
- `ended`：表示媒体源已结束，无法再向其中追加数据。

以下是一个简单的使用`MediaSource.readyState`的示例：

```javascript
// 创建MediaSource对象
var mediaSource = new MediaSource();

// 将MediaSource对象绑定到HTMLMediaElement
var video = document.querySelector('video');
video.src = URL.createObjectURL(mediaSource);

// 监听MediaSource对象的状态变化
mediaSource.addEventListener('sourceopen', function() {
  console.log(mediaSource.readyState); // "open"
});
mediaSource.addEventListener('sourceended', function() {
  console.log(mediaSource.readyState); // "ended"
});
mediaSource.addEventListener('sourceclose', function() {
  console.log(mediaSource.readyState); // "closed"
});
```

在上面的示例中，首先创建了一个`MediaSource`对象，并将其绑定到HTMLMediaElement。然后，监听了`sourceopen`、`sourceended`和`sourceclose`事件，以便在媒体源状态发生变化时获取其当前状态。当媒体源打开时，`readyState`属性将为`open`。当媒体源结束时，`readyState`属性将为`ended`。当媒体源关闭时，`readyState`属性将为`closed`。



# MediaSource的endOfStream

`endOfStream()`是`MediaSource`对象的一个方法，用于指示媒体源已结束，无法再向其中追加数据。调用`endOfStream()`方法后，`MediaSource.readyState`属性将变为`ended`。以下是一个简单的使用`endOfStream()`方法的示例：

```javascript
// 创建MediaSource对象
var mediaSource = new MediaSource();

// 将MediaSource对象绑定到HTMLMediaElement
var video = document.querySelector('video');
video.src = URL.createObjectURL(mediaSource);

// 在MediaSource对象打开时创建媒体源缓冲区
mediaSource.addEventListener('sourceopen', function() {
  var sourceBuffer = mediaSource.addSourceBuffer('video/mp4');
  // 将媒体数据追加到缓冲区中
  sourceBuffer.appendBuffer(mediaData);
  // 指示媒体源已结束，无法再向其中追加数据
  mediaSource.endOfStream();
});
```

在上面的示例中，首先创建了一个`MediaSource`对象，并将其绑定到HTMLMediaElement。然后，在`sourceopen`事件处理程序中，创建了一个媒体源缓冲区，并将媒体数据追加到其中。最后，调用了`endOfStream()`方法，指示媒体源已结束，无法再向其中追加数据。



# mediaSource 的 duration

`MediaSource`对象的`duration`属性表示媒体源的持续时间，以秒为单位。在创建`MediaSource`对象后，可以设置`duration`属性，以指定整个媒体的持续时间。例如：

```javascript
// 创建MediaSource对象
var mediaSource = new MediaSource();

// 将MediaSource对象绑定到HTMLMediaElement
var video = document.querySelector('video');
video.src = URL.createObjectURL(mediaSource);

// 在MediaSource对象打开时设置duration属性
mediaSource.addEventListener('sourceopen', function() {
  // 设置媒体源的持续时间为60秒
  mediaSource.duration = 60;
});
```

在上面的示例中，首先创建了一个`MediaSource`对象，并将其绑定到HTMLMediaElement。然后，在`sourceopen`事件处理程序中，设置了`duration`属性的值为60秒。这将指示整个媒体的持续时间为60秒。

需要注意的是，设置`duration`属性并不会自动将媒体源缓冲区的持续时间设置为相应的值。要设置缓冲区的持续时间，需要在相应的缓冲区上设置`timestampOffset`和`appendWindowEnd`属性。




# sourceBuffer

`SourceBuffer`是Web API中的一个接口，用于表示媒体源缓冲区。它允许JavaScript将媒体数据追加到缓冲区中，以便进行后续处理，例如播放或存储。`SourceBuffer`对象通常使用`MediaSource.addSourceBuffer()`方法创建，并与`MediaSource`对象相关联。以下是一个简单的使用`SourceBuffer`的示例：

```javascript
// 创建MediaSource对象
var mediaSource = new MediaSource();

// 将MediaSource对象绑定到HTMLMediaElement
var video = document.querySelector('video');
video.src = URL.createObjectURL(mediaSource);

// 在MediaSource对象打开时创建媒体源缓冲区
mediaSource.addEventListener('sourceopen', function() {
  // sourceBuffer: 缓冲区对象
  var sourceBuffer = mediaSource.addSourceBuffer('video/mp4');
  // 将媒体数据追加到缓冲区中
  sourceBuffer.appendBuffer(mediaData);
});
```

在上面的示例中，首先创建了一个`MediaSource`对象，并将其绑定到HTMLMediaElement。然后，在`sourceopen`事件处理程序中，创建了一个媒体源缓冲区，并将媒体数据追加到其中。`sourceBuffer`对象允许JavaScript操作缓冲区，例如追加更多数据、获取缓冲区的当前状态等。



# updateend

`updateend`是`SourceBuffer`对象的一个事件，当媒体数据追加到缓冲区并且缓冲区状态已更新时触发。该事件通常用于在JavaScript中管理媒体数据的追加和缓冲区状态的更新。以下是一个简单的使用`updateend`事件的示例：

```javascript
// 创建MediaSource对象
var mediaSource = new MediaSource();

// 将MediaSource对象绑定到HTMLMediaElement
var video = document.querySelector('video');
video.src = URL.createObjectURL(mediaSource);

// 在MediaSource对象打开时创建媒体源缓冲区
mediaSource.addEventListener('sourceopen', function() {
  // sourceBuffer: 缓冲区对象
  var sourceBuffer = mediaSource.addSourceBuffer('video/mp4');
  // 将媒体数据追加到缓冲区中
  sourceBuffer.appendBuffer(mediaData);
  // 监听updateend事件
  sourceBuffer.addEventListener('updateend', function() {
    // 缓冲区状态已更新，可以继续追加更多数据
    sourceBuffer.appendBuffer(moreMediaData);
  });
});
```

在上面的示例中，首先创建了一个`MediaSource`对象，并将其绑定到HTMLMediaElement。然后，在`sourceopen`事件处理程序中，创建了一个媒体源缓冲区，并将媒体数据追加到其中。接下来，监听了`updateend`事件，当缓冲区状态已更新时，可以继续追加更多数据。



# sourcebuffer的updating

`SourceBuffer.updating`是`SourceBuffer`对象的一个布尔值属性，用于表示媒体源缓冲区是否正在更新。如果`updating`属性为`true`，则表示缓冲区正在更新，无法向其中追加更多数据。如果`updating`属性为`false`，则表示缓冲区未在更新，可以向其中追加更多数据。

以下是一个简单的使用`SourceBuffer.updating`的示例：

```javascript
// 创建MediaSource对象
var mediaSource = new MediaSource();

// 将MediaSource对象绑定到HTMLMediaElement
var video = document.querySelector('video');
video.src = URL.createObjectURL(mediaSource);

// 在MediaSource对象打开时创建媒体源缓冲区
mediaSource.addEventListener('sourceopen', function() {
  var sourceBuffer = mediaSource.addSourceBuffer('video/mp4');
  // 将媒体数据追加到缓冲区中
  sourceBuffer.appendBuffer(mediaData);
  // 监听updateend事件
  sourceBuffer.addEventListener('updateend', function() {
    console.log(sourceBuffer.updating); // false
    // 缓冲区状态已更新，可以继续追加更多数据
    sourceBuffer.appendBuffer(moreMediaData);
  });
  console.log(sourceBuffer.updating); // true
});
```

在上面的示例中，首先创建了一个`MediaSource`对象，并将其绑定到HTMLMediaElement。然后，在`sourceopen`事件处理程序中，创建了一个媒体源缓冲区，并将媒体数据追加到其中。接下来，监听了`updateend`事件，并在事件处理程序中检查了`updating`属性的值。在数据追加完成之前，`updating`属性的值为`true`，表示缓冲区正在更新。在数据追加完成后，`updating`属性的值为`false`，表示缓冲区未在更新。



# MediaSource 的 pendingInits

`MediaSource.pendingInits`是`MediaSource`对象的一个整数属性，用于表示当前等待初始化的媒体源缓冲区数量。如果`pendingInits`属性为0，则表示所有缓冲区都已初始化。

以下是一个简单的使用`MediaSource.pendingInits`的示例：

```js
// 创建MediaSource对象
var mediaSource = new MediaSource();

// 将MediaSource对象绑定到HTMLMediaElement
var video = document.querySelector('video');
video.src = URL.createObjectURL(mediaSource);

// 在MediaSource对象打开时创建媒体源缓冲区
mediaSource.addEventListener('sourceopen', function() {
  var sourceBuffer1 = mediaSource.addSourceBuffer('video/mp4');
  var sourceBuffer2 = mediaSource.addSourceBuffer('audio/mp4');
  console.log(mediaSource.pendingInits); // 2
  // 监听sourcebuffer的updateend事件
  sourceBuffer1.addEventListener('updateend', function() {
    console.log(mediaSource.pendingInits); // 1
  });
  sourceBuffer2.addEventListener('updateend', function() {
    console.log(mediaSource.pendingInits); // 0
  });
});
```

在上面的示例中，首先创建了一个`MediaSource`对象，并将其绑定到HTMLMediaElement。然后，在`sourceopen`事件处理程序中，创建了两个媒体源缓冲区，并在控制台中输出了`pendingInits`属性的值。此时，`pendingInits`属性的值为2，表示两个缓冲区都未初始化。接下来，分别监听了两个缓冲区的`updateend`事件，并在事件处理程序中检查了`pendingInits`属性的值。在第一个缓冲区的数据追加完成之后，`pendingInits`属性的值为1，表示还有一个缓冲区未初始化。在第二个缓冲区的数据追加完成之后，`pendingInits`属性的值为0，表示所有缓冲区都已初始化。




# MP4Box.js如何使用
MP4Box.js 是一个 JavaScript 库，用于处理 MP4 文件。您可以使用它来解析、修改和创建 MP4 文件。

要使用 MP4Box.js，您需要在 HTML 页面中引入它。您可以使用以下代码：

```js
<script src="mp4box.all.js"></script>
var mp4box = new MP4Box();
mp4box.appendBuffer(buffer);
mp4box.flush();
```
其中，buffer 是包含 MP4 文件数据的 ArrayBuffer 对象。

请注意，MP4Box.js 是一个强大的工具，需要一定的编程知识和经验才能使用。如果您不确定如何使用它，请参考官方文档或寻求专业帮助。



# MP4Box.js如何解析mp4文件

`MP4Box.js`是一个JavaScript库，用于解析和处理MP4文件。它可以在浏览器中使用，也可以在Node.js中使用。

以下是使用`MP4Box.js`解析MP4文件的简单示例：

```javascript
// 加载MP4Box.js库
const MP4Box = require('mp4box');

// 创建MP4Box对象
const mp4box = new MP4Box();

// 加载MP4文件
const url = 'http://example.com/video.mp4';
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'arraybuffer';
xhr.onload = function() {
  if (xhr.status === 200) {
    // 将MP4文件数据传递给【MP4Box对象】
    mp4box.appendBuffer(xhr.response);

    // 监听【MP4Box对象】的事件
    mp4box.onReady = function(info) {
      console.log(info);
      // 输出MP4文件的信息
    };
  }
};
xhr.send();
```

在上面的示例中，首先加载了`MP4Box.js`库，并创建了一个`MP4Box`对象。然后，使用XMLHttpRequest加载了一个MP4文件，并在`onload`事件处理程序中将其数据传递给`MP4Box`对象的`appendBuffer`方法。接下来，监听了`MP4Box`对象的`onReady`事件，并在事件处理程序中输出了MP4文件的信息。当`onReady`事件触发时，`info`参数将包含MP4文件的详细信息，例如视频轨道和音频轨道的数量、持续时间、帧率等等。

注意：在浏览器中使用`MP4Box.js`时，需要将其作为脚本引入到HTML页面中。例如：

```html
<script src="mp4box.all.min.js"></script>
```


# 关于MP4文件基本格式的调研
__MP4文件由众多box组成，因此box是MP4文件的基本组成单位__


#### Box列举
1. __ftyp__ -- File Type Box，一般在文件的开始位置，描述的文件的版本、兼容协议等。
2. __moov__ -- Movie Box，包含本文件中所有媒体数据的宏观描述信息以及每路媒体轨道的具体信息。一般位于 ftyp 之后，也有的视频放在文件末尾。


# moov box 
moov box 是 MP4 文件中的一个重要 box，包含了 MP4 文件的元数据信息，例如视频和音频的格式、时长和分辨率等。moov box 通常在 MP4 文件的开头位置，因此可以很快地获取 MP4 文件的元数据信息。

moov box 的结构如下：
```js
moov
├── mvhd
├── track
│   ├── tkhd
│   ├── mdia
│   │   ├── mdhd
│   │   ├── hdlr
│   │   ├── minf
│   │   │   ├── vmhd
│   │   │   └── dinf
│   │   │       └── dref
│   │   │           └── url
│   │   └── stbl
│   │       ├── stsd
│   │       ├── stts
│   │       ├── stsc
│   │       ├── stsz
│   │       ├── stco
│   │       └── ctts
└── trak
    ├── tkhd
    ├── mdia
    │   ├── mdhd
    │   ├── hdlr
    │   ├── minf
    │   │   ├── smhd
    │   │   └── dinf
    │   │       └── dref
    │   │           └── url
    │   └── stbl
    │       ├── stsd
    │       ├── stts
    │       ├── stsc
    │       ├── stsz
    │       ├── stco
    │       └── ctts

```
其中，mvhd box 包含了 MP4 文件的基本信息，例如时长和时间戳等。track box 包含了 MP4 文件中的一个轨道，例如视频或音频轨道。每个 trak box 包含了该轨道的详细信息，例如轨道的格式、时长和分辨率等。

__tkhd__ -- Track Header Box，包含关于媒体流的头信息。此处的媒体流可以是视频流，音频流，文本字幕流等等。

__mdia__ -- Media Data Box，存放具体的媒体数据。

在解析 MP4 文件时，通常需要先解析 moov box，以获取 MP4 文件的元数据信息。



# MP4Box.js 的 onMoovStart

onMoovStart 是 MP4Box.js 中的一个回调函数，用于在解析 MP4 文件时开始解析 moov box 时执行。moov box 包含了 MP4 文件的元数据信息，例如视频和音频的格式、时长和分辨率等。您可以使用以下代码来设置 onMoovStart 回调函数：

```js
mp4box.onMoovStart = function() {
  console.log("Start parsing moov box...");
};
```
在上面的示例中，当 MP4Box 对象开始解析 moov box 时，会执行 onMoovStart 回调函数。

请注意，onMoovStart 回调函数只有在 moov box 开始解析时才会执行。如果您需要在解析 moov box 时执行某些操作，可以使用 onMoovStart 回调函数。



# MP4Box.js 的 onReady 

onReady 是 MP4Box.js 中的一个回调函数，用于在【MP4Box 对象】准备好处理 MP4 文件时执行。您可以使用以下代码来设置 onReady 回调函数：

```js
mp4box.onReady = function(info) {
  console.log("MP4Box is ready to process MP4 files");
};
```


# MP4Box.js 的 appendBuffer

appendBuffer 是 MP4Box.js 中的一个方法，用于向【MP4Box 对象】添加 MP4 文件的数据。您可以使用以下代码来调用 

```js
mp4box.appendBuffer(buffer);
```

在上面的示例中，buffer 参数是包含 MP4 文件数据的 ArrayBuffer 对象。

请注意，appendBuffer 方法只是将 MP4 文件数据添加到【MP4Box 对象】中，并不会立即解析或处理它。要解析和处理 MP4 文件数据，您需要调用 flush 方法。例如，您可以使用以下代码来解析 MP4 文件数据：

```js
mp4box.appendBuffer(buffer);
mp4box.flush();
```

在上面的示例中，appendBuffer 方法将 MP4 文件数据添加到【MP4Box 对象中】，然后 flush 方法将解析和处理这些数据。



# MP4Box.js 的 flush
`flush`是MP4Box.js中的一个方法，用于将所有已缓冲的媒体数据发送到MediaSource缓冲区。该方法用于在媒体数据流结束时手动刷新缓冲区。以下是`flush`方法的示例用法：

```javascript
// 创建MP4Box对象
var mp4box = new MP4Box();

// 将媒体数据追加到缓冲区
mp4box.appendBuffer(mediaData);

// 在媒体数据流结束时手动刷新缓冲区
mp4box.flush();
```

在上面的示例中，`flush`方法用于将所有已缓冲的媒体数据发送到MediaSource缓冲区。这是在媒体数据流结束时手动刷新缓冲区的一种常见方法。



# MP4Box.js 的 setSegmentOptions

`MP4Box.js`中的`setSegmentOptions`方法用于设置分段选项。分段选项是指将媒体文件划分为多个分段的方式和规则。

以下是`setSegmentOptions`方法的使用示例：

```javascript
// 创建MP4Box对象
const mp4box = new MP4Box();

// 设置分段选项
mp4box.setSegmentOptions({
  nbSamples: 1000,
  rapAlignement: true,
  fragmentation: 'segmented',
  outputFragment: true,
  forceKeyFrameOnDiscontinuity: true
});
```

在上面的示例中，首先创建了一个`MP4Box`对象。然后，调用`setSegmentOptions`方法，并传递一个包含分段选项的对象作为参数。该对象包含以下属性：

- `nbSamples`：每个分段中包含的样本数。默认值为1000。
- `rapAlignement`：是否将每个分段的第一个样本设置为关键帧。默认值为`true`。
- `fragmentation`：分段模式。可以是`'none'`、`'basic'`或`'segmented'`。默认值为`'basic'`。
- `outputFragment`：是否在分段模式下输出分段文件。默认值为`false`。
- `forceKeyFrameOnDiscontinuity`: 是否在不连续的地方强制插入关键帧。默认值为`false`。

通过设置这些选项，可以控制如何将媒体文件划分为多个分段，并控制每个分段的特性，例如每个分段中包含的样本数、是否将第一个样本设置为关键帧等。



# MP4Box 的 initializeSegmentation

`MP4Box.initializeSegmentation`是`MP4Box.js`中的一个方法，用于初始化分段选项和分段器。它会为媒体文件创建一个新的分段器，并设置分段选项。

以下是`MP4Box.initializeSegmentation`方法的使用示例：

```javascript
// 创建MP4Box对象
const mp4box = new MP4Box();

// 初始化分段选项和分段器
mp4box.initializeSegmentation({
  nbSamples: 1000,
  rapAlignement: true,
  fragmentation: 'segmented',
  outputFragment: true,
  forceKeyFrameOnDiscontinuity: true
});
```

在上面的示例中，首先创建了一个`MP4Box`对象。然后，调用`initializeSegmentation`方法，并传递一个包含分段选项的对象作为参数。该对象包含以下属性：

- `nbSamples`：每个分段中包含的样本数。默认值为1000。
- `rapAlignement`：是否将每个分段的第一个样本设置为关键帧。默认值为`true`。
- `fragmentation`：分段模式。可以是`'none'`、`'basic'`或`'segmented'`。默认值为`'basic'`。
- `outputFragment`：是否在分段模式下输出分段文件。默认值为`false`。
- `forceKeyFrameOnDiscontinuity`: 是否在不连续的地方强制插入关键帧。默认值为`false`。

通过调用`initializeSegmentation`方法，可以为媒体文件创建一个新的分段器，并设置分段选项。如果需要在初始化分段器后向其中添加媒体数据，可以使用`MP4Box.appendBuffer`方法进行操作。




# MP4Box.js 的 start()
`MP4Box.start()`是`MP4Box.js`中的一个方法，用于开始处理已添加的媒体数据。

以下是`MP4Box.start()`方法的使用示例：

```javascript
// 创建MP4Box对象
const mp4box = new MP4Box();

// 向MP4Box对象添加媒体数据
mp4box.appendBuffer(mediaData1);
mp4box.appendBuffer(mediaData2);
mp4box.appendBuffer(mediaData3);

// 开始处理已添加的媒体数据
mp4box.start();
```

在上面的示例中，首先创建了一个`MP4Box`对象。然后，使用`appendBuffer`方法向该对象添加了三个媒体数据。最后，调用`start`方法，开始处理已添加的媒体数据。

需要注意的是，如果需要对添加的媒体数据进行分段操作，请先调用`MP4Box.initializeSegmentation()`方法进行初始化。否则，生成的MP4文件将是单个文件，而不是多个分段文件。




# MP4Box.js 中回调函数

MP4Box.js 中有多个回调函数，用于在处理 MP4 文件时执行某些操作。以下是一些常用的回调函数：

onReady: 当 MP4Box 对象准备好处理 MP4 文件时执行。
onSegment: 当 MP4Box 对象解析 MP4 文件中的一个片段时执行。
onMoovStart: 当 MP4Box 对象开始解析 moov box 时执行。
onFragmentedInitSegment: 当 MP4Box 对象解析 MP4 文件中的初始化片段时执行。
onSamples: 当 MP4Box 对象解析 MP4 文件中的样本数据时执行。
您可以使用以下代码来设置这些回调函数：

```js
mp4box.onReady = function(info) {
  console.log("MP4Box is ready to process MP4 files");
};

mp4box.onSegment = function(id, user, buffer, sampleNum, mp4time) {
  console.log("Parsed segment with id " + id + " and user " + user);
};

mp4box.onMoovStart = function() {
  console.log("Start parsing moov box...");
};

mp4box.onFragmentedInitSegment = function(tracks) {
  console.log("Parsed fragmented initialization segment with tracks", tracks);
};

mp4box.onSamples = function(id, user, samples) {
  console.log("Parsed samples with id " + id + " and user " + user);
};
```
请注意，MP4Box.js 中的回调函数是可选的，您可以根据需要选择要使用的回调函数。这些回调函数可以帮助您在处理 MP4 文件时进行调试和监视。



