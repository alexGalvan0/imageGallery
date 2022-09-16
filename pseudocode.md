# Image Galery Project
**BREIF** This app will display one large image and a collections of smaller images that once clicked, will take the place of the larger image. This app will also have a button on the image with the capabilities of adding a dark filter to the larger image. 

### <u>START</u>
### <u>INIT VARIABLES:</u>
> - **CREATE** ImageFolder
> - **CREATE** LargerImage
> - **CREATE** SmallerImageList


### <u>PROPERTIES OF OBJECTS:</u>
> - **ImageFolder**
>   - Has multiple images. 

> - **LargerImage**
>   - Displayed center of the page
>   - Larger than the rest of the images displayed.
>   - Only one image can be this size

> - **SmallerImageList**
>   - Smaller than the *LargerImage*
>   - Muiltiple images can be this size being displayed.



### <u>METHODS OF OBJECTS:</u>
> - **ImageFolder**
>   - When called, it will return an array of image file names | array

> - **LargerImage**
>   - Stuff

> - **SmallerImageList**
>   - Stuff

### <u>FUNCTIONS:</u>

```
FUNCTION CheckWaterLevel
IF waterLevel >= 1 cup 
    RTURN true
ELSE 
    RETURN false

FUNCTION CheckWaterTemp
IF waterTem == 195
    RETURN true
ELSE 
    RETURN false

Function iskCupInserted
IF K-Cup IN CoffeMaker
    RETURN true
ELSE 
    RETURN false

FUNCTION isMugUnderDispensor
IF Mug unser dispensor
    RETURN true
ELSE 
    RETURN false

FUNCTION BrewCoffee
IF [CheckWaterLevel,CheckWaterTemp,iskCupInserted,isMugUnderDispensor] = true
    BrewCoffee
```
### <u>LOGIC:</u>
```

ELSE
A.IF CheckWaterLevel = false
    Person detach water reservoir from CoffeeMaker with one hand,
    Turn on sink with other,
    Fill water reservoir untill full.
    Replace reservoir into CoffeeMaker
    RETURN true
    BrewCoffee

B. IF CheckWaterTemp = false
    Use CoffeeMaker water heater untill water temp is = 195
    RETURN true
    BrewCoffee

C. IF iskCupInserted = false
    Person check to K-Cup container,
        IF K-Cup container has >= 1 K-Cup
            Person one hand grab K-Cup and insert into CoffeeMachine K-Cup insert
            RETURN true
            BrewCoffee
        ELSE K-Cup container = 0
            END PROGRAM

D. IF isMugUnderDispensor = false
    Person open MugCabinet
        IF MugCabinet >=1 mug
            Place Mug under CoffeeMaker Dispensor
                RETURN true
                BrewCoffee
        ElSE
            END PROGRAM