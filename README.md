# Form Configuration APP

## Description

This project contains two pages.
The first page will allow you to configure and create new elements, these elements will be displayed in the second page as part of a form.

## Instructions

In the project directory, you can run:

### `npm install`

After you cloned the project, please install the
necessary packages by using

```
npm install
```

### `npm start`

Will start the project locally.

### Object construction

As mentioned in the description part, the first page contains an input area.
The input area accepts either object or a JSON format data and according to the data being submited, the form will be constructed.

the object should contain the following keys and values:

```
{
    title : "",
    items : [{label : "counting", type: "number"}],
    actionButtons: ["red", "yellow"]
}

```

- title will act as the form title in the second page.
- items is an array of objects, each object corresponds to an Item in the form.

* each object within the item array will contain two keys.
  the first will be label which provides the element with label, and the type.
  the type denotes the type of element that will be create.

* actionButtons provides a place holder to a submit button.
  the form will contain as much submit buttons as the array elements

### Available types:

- radio
- number
- text
- date
- checkbox
