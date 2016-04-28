# ngDropzone
AngularJS directive for dropzone-js


## Getting started
##### Step 1
You must need AngularJS for this directive to work : [Download from Google CDN](https://developers.google.com/speed/libraries/#angularjs)

##### Step 2
You need to download dropzone.js and dropzone.css files from dropzone-js repository : [Get from offical release](https://github.com/enyo/dropzone/releases/tag/v4.3.0)

##### Step 3
Download ngDropzone.js from this repository

```
Include above files in <head></head> section of your html page
```


## Configure your angular app
Include `thatisuday.dropzone` module inside your angular app.
```
var myNgApp = angular.module('myAppName', ['thatisuday.dropzone']);
```

> You can configure dropzone before app starts running. ngDropzone comes with built in **dropzoneOps** provider to configure [dropzone-js options](http://www.dropzonejs.com/#configuration-options) which can be implemented below. This will provide default options all your dropzone instances in given app.

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
> **options** attribute specifies model that will set [dropzone-js options](http://www.dropzonejs.com/#configuration-options) for dropzone and will override any options that may have been provided with **dropzoneOps** provider

> **callbacks** attribute specifies model that will set [dropzone-js events](http://www.dropzonejs.com/#events) for dropzone

As per above example, **_dzOptions_** is model that set options for dropzone while **_dzCallbacks_** is model that set events for dropzone.


## Configure dropzone(s)
**callbacks** are not necessary for your dropzone in order to work. But **options** must be given inside your controller _unless you are configuring it from **dropzoneOps** provider_.

```
myNgApp.controller('main', function($scope, $timeout){
	//Set options for dropzone
	//Visit http://www.dropzonejs.com/#configuration-options for more options
	$scope.dzOptions = {
		paramName : 'photo',
		maxFilesize : '10',
		acceptedFiles : 'image/jpeg, images/jpg, image/png',
		addRemoveLinks : true,
		...
	};
	
	
	//Set events for dropzone
	//Visit http://www.dropzonejs.com/#events for more events
	$scope.dzCallbacks = {
		'success' : function(file, xhr){
			console.log(file, xhr);
		}
	};
});
```

# Complaints & Contribute
Create an issue and mention your commits there. Don't take a fork.
