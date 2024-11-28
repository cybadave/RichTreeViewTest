# MUI RichTreeView Keyboard Navigation Test

## Error in keyboard navigation of MUI RichTreeView

To reproduce the error, follow these steps:
- Expand the first root node "1" by clicking on it
- Expand the node "1 2" by clicking on it
- Press the down arrow key until focus has moved to the second root node "2"
- Press the up arrow key once
- Observe that node "1 2 1" is focused

Expected behavior:
- Node "1 2 5" should be focused
