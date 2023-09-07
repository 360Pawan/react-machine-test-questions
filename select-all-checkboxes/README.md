# Select All

Given a Select All checkbox - toggle the children's checkboxes in such a way that when the select all button is clicked, all the boxes are checked. Similarly, when the button is toggled, the checkboxes become unchecked.

![select all checkboxes](https://res.cloudinary.com/algochurn/image/upload/v1666784683/assets/ezgif.com-gif-maker_15_qhlfeu.gif)

### User Stories

1. Create a Checkbox component that takes in checked, onChange and label as props.

2. A select all checkbox should be there that toggles the state of all the children checkboxes.

3. Any of the individual checkboxes should have their own state. That means if any of the checkboxes is checked, it should reflect.

4. If any one of the checkboxes is NOT selected, the select all checkbox should be unchecked.

5. If all the checkboxes are selected, the select all checkbox should be checked.

6. Loop through the given listItems array that follows the following structure.