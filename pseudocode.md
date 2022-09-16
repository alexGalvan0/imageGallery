# Image Galery Project
**BREIF** This app will display one large image and a collections of smaller images that once clicked, will take the place of the larger image. This app will also have a button on the image with the capabilities of adding a dark filter to the larger image. 

### <u>START</u>
### <u>INIT VARIABLES:</u>
> - **CREATE** ImageFolder
> - **CREATE** LargerImage
> - **CREATE** SmallerImageList
> - **CREATE** Button


### <u>PROPERTIES OF OBJECTS:</u>
> - **ImageFolder**
>   - Has multiple images.

> - **LargerImage**
>   - Displayed center of the page
>   - Larger than the rest of the images displayed.
>   - Only one image can be this size
>   - has alt text

> - **SmallerImageList**
>   - Smaller than the *LargerImage*
>   - Muiltiple images can be this size being displayed.
>   - has alt text
>   - Has an onClick event

> - **Button**
>   - Can say Lighten
>   - Can say Darken



### <u>METHODS OF OBJECTS:</u>
> - **ImageFolder**
>   - When called, it will return an array of image file names | array

> - **LargerImage**
>   - Can let *Button* know if it has the dark filter or light filter 

> - **SmallerImageList**
>   - Returns the array index when clicked. 


> - **Button**
>   - Can add a dark filter to *LargerImage*
>   - Can remove dark filter to *LargerImage*
>   - Will let know whuch state is in | Dark or light

### <u>FUNCTIONS:</u>

```
FUNCTION addImagesToPage

FOR eachImage in *ImageFolder*
    DISPLAY eachImage on page

```
### <u>LOGIC:</u>
```
IF Button contains Darken
    ADD dark class to Large Image

    ELSE
        Button dispays Lighten 
        remove dark class to LargeImage
        Add Liten class to LargeImage


IF LargeImage class contains Darken
    add dark overlay to LargeImage

    ELSE
        add lighten class to LargeImage
```


