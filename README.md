# ngDropzone ☛ : [Preview](https://htmlpreview.github.io/?https://github.com/thatisuday/ngDropzone/blob/master/test/test.html)
AngularJS directive for __[dropzone](https://github.com/enyo/dropzone)__



## Getting started

### Install using bower
Run following command in your working directory using bash shell
```
bower install ngDropzone
```


### Install using npm
Run following command in your working directory using bash shell
```
npm install ngdropzone
```


### Install manually
##### Step 1
You must have AngularJS library included for this directive to work : [Download from Google CDN](https://developers.google.com/speed/libraries/#angularjs)

##### Step 2
You need to download `dropzone.js` and `dropzone.css` files from dropzone repository : [Get from official release](https://github.com/enyo/dropzone/releases/tag/v4.3.0)

##### Step 3
Download `ngDropzone.js` from this [official release](https://github.com/thatisuday/ngDropzone/releases)

##### Step 4
Include above files in `<head></head>` section of your html page

----------

## Create .js file and set _Dropzone.autoDiscover_ to _false_
```
//Add below line at the top of your JavaScript code
Dropzone.autoDiscover = false;
//This will prevent Dropzone to instantiate on it's own unless you are using dropzone class for styling
```


## Configure your angular app
Include `thatisuday.dropzone` module inside your angular app.
```
var myNgApp = angular.module('myAppName', ['thatisuday.dropzone']);
```

> You can configure dropzone before an app starts running. ngDropzone comes with built in **dropzoneOps** provider to configure [dropzone options](http://www.dropzonejs.com/#configuration-options) which can be implemented as below. _setOptions_ function will set default options fot all your dropzone instances in that app.

```
myNgApp.config(function(dropzoneOpsProvider){
	dropzoneOpsProvider.setOptions({
		url : '/upload_url',
		maxFilesize : '10',
		...
	});
});
```

>You can also add default options in **dropzoneOps** provider `(ngDropzone.js)` inside `defOps` object. This is very helpful in case you have multiple apps.  **_But it is not recommended because if you upgrade this directive in future, your app might not behave the way it should._**


## Create dropzone(s)
You can create dropzone using `ng-dropzone` attribute or `<ng-dropzone></ng-dropzone>` element.
```
<div class="dropzone" options="dzOptions" callbacks="dzCallbacks" methods="dzMethods" ng-dropzone></div>
```
**_OR_**
```
<ng-dropzone class="dropzone" options="dzOptions" callbacks="dzCallbacks" methods="dzMethods"></ng-dropzone>
```
> **options** attribute specifies model that will set [options](http://www.dropzonejs.com/#configuration-options) for dropzone and will override any options that may have been provided with **dropzoneOps** provider.

> **callbacks** attribute specifies model that will handle [events](http://www.dropzonejs.com/#events) for dropzone.

> **methods** attribute specifies model that will set [methods](http://www.dropzonejs.com/#dropzone-methods) for dropzone.

As per above example, **_dzOptions_** is model that set options for dropzone, **_dzCallbacks_** is model that handles events for dropzone while **_dzMethods_** is model that triggers dropzone methods.



## Configure dropzone(s)
**callbacks** are not necessary for your dropzone to work, these are just events that you may need as a callback for certain activities of your dropzone. But **options** must be given inside your controller _unless you are configuring it from **dropzoneOps** provider_. _url_ field in dropzone options is mandatory.

```
myNgApp.controller('main', function($scope){
	//Set options for dropzone
	//Visit http://www.dropzonejs.com/#configuration-options for more options
	$scope.dzOptions = {
		url : '/alt_upload_url',
		paramName : 'photo',
		maxFilesize : '10',
		acceptedFiles : 'image/jpeg, images/jpg, image/png',
		addRemoveLinks : true,
		...
	};
	
	
	//Handle events for dropzone
	//Visit http://www.dropzonejs.com/#events for more events
	$scope.dzCallbacks = {
		'success' : function(file, xhr){
			console.log(file, xhr);
		},
		...
	};
});
```

#### NEW v1.0.4 : [dropzone-methods](http://www.dropzonejs.com/#dropzone-methods)
By default, dropzone starts file upload when file is dropped or added to the list. But this can be prevented using `autoProcessQueue:false` in options. Then you have to manually start file upload using **_dzMethods_** model. You just have to call function `dzMethods.processQueue();` to start upload.

For example `<button ng-click="dzMethods.processQueue();">Start Uploading</button>`.

Similarly there are few other methods that dropzone provide out of the box to play with dropzone files. 

> For better understanding, **__⚑__**  checkout source code in /test/test.html file or visit [preview](ttps://htmlpreview.github.io/?https://github.com/thatisuday/ngDropzone/blob/master/test/test.html) of this directive.

> I have added to more extra methods `getDropzone` and `getAllFiles` which returns **dropzone instance** and **dropzone files** respectively. These methods do not accept any _arguments_ and only work with _ngDropzone_.



# Beautify Dropzone
Add `beautify.css` file below `dropzone.css` file for professional looking dropzone.



# Complaints & Contribute
Create an issue and mention your commits there. Don't take a fork.
