# ngDropzone ☞ : [Preview](https://htmlpreview.github.io/?https://github.com/thatisuday/ngDropzone/blob/master/test.html)
AngularJS directive for __[dropzone](https://github.com/enyo/dropzone)__



## Getting started
##### Step 1
You must have AngularJS library included for this directive to work : [Download from Google CDN](https://developers.google.com/speed/libraries/#angularjs)

##### Step 2
You need to download dropzone.js and dropzone.css files from dropzone repository : [Get from offical release](https://github.com/enyo/dropzone/releases/tag/v4.3.0)

##### Step 3
Download ngDropzone.js from this repository

##### Step 4
Include above files in `<head></head>` section of your html page



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

> You can configure dropzone before a app starts running. ngDropzone comes with built in **dropzoneOps** provider to configure [dropzone options](http://www.dropzonejs.com/#configuration-options) which can be implemented as below. _setOptions_ function will set default options fot all your dropzone instances in that app.

```
myNgApp.config(function(dropzoneOpsProvider){
	dropzoneOpsProvider.setOptions({
		url : '/upload_url',
		maxFilesize : '10',
		...
	});
});
```



## Create dropzone(s)
You can create dropzone using `ng-dropzone` attribute or `<ng-dropzone></ng-dropzone>` element.
```
<div class="dropzone" options="dzOptions" callbacks="dzCallbacks" ng-dropzone></div>
```
**_OR_**
```
<ng-dropzone class="dropzone" options="dzOptions" callbacks="dzCallbacks"></ng-dropzone>
```
> **options** attribute specifies model that will set [dropzone options](http://www.dropzonejs.com/#configuration-options) for dropzone and will override any options that may have been provided with **dropzoneOps** provider.

> **callbacks** attribute specifies model that will handle [dropzone events](http://www.dropzonejs.com/#events) for dropzone.

As per above example, **_dzOptions_** is model that set options for dropzone while **_dzCallbacks_** is model that handles events for dropzone.



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

>Take a look at **test.html** source code for better understanding of working with different controllers and options overriding.



# Beautify Dropzone
Add `beautify.css` file below dropzone.css file for professional looking dropzone.



# Complaints & Contribute
Create an issue and mention your commits there. Don't take a fork.
