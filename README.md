# SCSS Framework

Frontend SCSS Framework to provide frequently used functions, mixins and styles.

## Install

To use this framework you can simply download the project here on github, or install it with `npm`.

```text
$ npm install cps-scss-framework
```

## Usage

There are two ways of usage for this framework. The first option is to include the compiled `dist/framework.css` in your project. The second, more preferable, option is to include the `src/framework.scss` in your project and overwrite the default settings.

### A) Include the pre-compiled css file

You can use the pre-compiled css file as standalone framework in your project. The Framework comes with some default options and styles, which cannot be overwritten in this method.

#### 1.) Include the `framework.css` in your `<head>` section.

After you installed the framework as described in the [Install](#install) section simply include the compiled `.css` file in your page `<head>` section.

```html
<link rel="stylesheet" href="path/to/framwork/dist/framework.css">
```

#### 2.) Use the included classes to style your website.

To learn more about all the included classes check out the [Classes](#included-functions-mixins-and-classes) documentation.

### B) Include the scss file and use your own settings

To overwrite some of the predefined styles you can include the framework in your SCSS setup.

#### 1.) Create your own configuration file.

After you installed the framework as described in the [Install](#install) section you should create your personal configuration file. Simply copy the `src/_config.scss` file to your scss path and change the configuration according to your needs.

**Attention: Make sure to import your configuration file before the framework.scss!**

#### 2.) Import the `framework.scss` in your project.

After you created your personal configuration you need to include the `framework.scss` file in your projects main `.scss` file.

```scss
@import 'path/to/framework/src/framework.scss';
```

**Attention: Make sure to import your configuration file before the framework.scss!**

#### 3.) Use the included functions, mixins and classes in your project.

Now you can use all the included functions, mixins and classes with your own configuration in your project. See the [Functions](#included-functions-mixins-and-classes), [Mixins](#included-functions-mixins-and-classes) and [Classes](#included-functions-mixins-and-classes) Documentation for further details.

## Configuration

For all Configuration options see the [Configuration](/docs/configuration.md) documentation.

## Included Functions, Mixins and Classes

The framework comes with many functions, mixins and classes, below you will find a short overview grouped by each module.

### Global

Basic Functions and Mixins used by other modules.

* **Mixins**
	* Breakpoints [`breakpoint($query, $query-max: false)`](/docs/mixins/breakpoint.md)
* **Classes**
	* Grid
		* [`.o_grid`](/docs/classes/grid.md#fw-o-grid)
		* [`.o_grid__row`](/docs/classes/grid.md#fw-o-grid__row)
		* [`.o_grid__col`](/docs/classes/grid.md#fw-o-grid__col)

## License

Code released under the [MIT License](http://opensource.org/licenses/MIT).
