# Design

Before we jump into code, let's take like 15min to think about the design of the app.

## General consideraitons

1. The file "uploaded" by the user is basically the App's state.
2. Let's use some widely-available components for file upload ([`react-drag-drop-files`](https://www.npmjs.com/package/react-drag-drop-files)) and displaying pages in a carousel ([`react-carousel`](https://github.com/brainhubeu/react-carousel)) (Both projects are licensed under MIT License).
3. We're gonna need some sort of Factory pattern to create the Page's content 
4. I'm not entirely sure about the `List` funnel component - what is it's purpose and what kind of content it allows for. **For now, in order to make the scope of the task smaller, I'm assuming that all elements of the `List` need to be images.**

### Funnel JSON files

Funnel data is a JSON file. As with any data we're getting from user, we'll have to do some validation.

Easiest way for that, IMO,  would be to just create a JSON schema out of the sample file, and use that for validation.

## Components

General overview of the structure
```
                                   App
                                    /\
                                   /  \
                          FilePicker  Preview
                                         |
                                      Carousel
                                      /   |   \
                                    Page ...  Page
```
Page can have any number of the following children components:
* `Button`
* `Image`
* `List` 
* `Text`

As mentioned previously - we're assuming that `List` can have any number of children, but all of them need to follow the same schema, and include a `src` key, which should be a URL of an image.

### Styling the preview

The biggest problem I forsee at the moment will be styling - I'm not particularly strong with UI/UX design and CSS. That said it only makes sense to try and "mimic" some parts of the Perspective's UI design - should make for more consistent experience.

Additionally, I see potential issue with scaling the preview - it's supposed to be a preview for **an average mobile viewport**, but visualized on a computer screen. Sure, Tailwind makes it easy to do responsive design, but scaling the entire contents of the preview container might be tricky and result in broken UI. 

According to [StatCounter](gs.statcounter.com), most common mobile screen resolution worldwide is 360 x 800 px, so that's what we'll go for (at least for now).
