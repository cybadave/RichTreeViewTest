import React, {SyntheticEvent, useState} from 'react';
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import './App.css';

export type TreeItem = {
  id: string;
  label: string;
  children: TreeItem[];
};


function App() {
  const items: TreeItem[] = [
      {
          "id": "2",
          "label": "1",
          "children": [
              {
                  "id": "5",
                  "label": "1 1",
                  "children": [
                      {
                          "id": "8",
                          "label": "1 1 1",
                          "children": [],
                      },
                      {
                          "id": "11",
                          "label": "1 1 2",
                          "children": [
                              {
                                  "id": "12",
                                  "label": "1 1 1 2",
                                  "children": [
                                      {
                                          "id": "14",
                                          "label": "1 1 2 1",
                                          "children": [],
                                      }
                                  ],
                              }
                          ],
                      },
                      {
                          "id": "18",
                          "label": "1 1 3",
                          "children": [
                              {
                                  "id": "19",
                                  "label": "1 1 1 3",
                                  "children": [
                                      {
                                          "id": "21",
                                          "label": "1 1 3 1",
                                          "children": [],
                                      }
                                  ],
                              }
                          ],
                      },
                      {
                          "id": "25",
                          "label": "1 1 4",
                          "children": [
                              {
                                  "id": "26",
                                  "label": "1 1 1 4",
                                  "children": [
                                      {
                                          "id": "28",
                                          "label": "1 1 4 1",
                                          "children": [],
                                      }
                                  ],
                              }
                          ],
                      }
                  ],
              },
              {
                  "id": "31",
                  "label": "1 2",
                  "children": [
                      {
                          "id": "34",
                          "label": "1 2 1",
                          "children": [],
                      },
                      {
                          "id": "39",
                          "label": "1 2 2",
                          "children": [],
                      },
                      {
                          "id": "46",
                          "label": "1 2 3",
                          "children": [
                              {
                                  "id": "52",
                                  "label": "1 2 3 1",
                                  "children": [],
                              }
                          ],
                      },
                      {
                          "id": "59",
                          "label": "1 2 4",
                          "children": [],
                      },
                      {
                          "id": "65",
                          "label": "1 2 5",
                          "children": [
                              {
                                  "id": "66",
                                  "label": "1 2 5 1",
                                  "children": [],
                              }
                          ],
                      }
                  ],
              }
          ],
      },
      {
          "id": "71",
          "label": "2",
          "children": [
              {
                  "id": "72",
                  "label": "2 1",
                  "children": [
                      {
                          "id": "74",
                          "label": "2 1 1",
                          "children": [
                              {
                                  "id": "77",
                                  "label": "2 1 1 1",
                                  "children": [
                                      {
                                          "id": "80",
                                          "label": "2 1 1 1 1",
                                          "children": [
                                              {
                                                  "id": "83",
                                                  "label": "2 1 1 1 1 1",
                                                  "children": [
                                                      {
                                                          "id": "86",
                                                          "label": "2 1 1 1 1 1 1",
                                                          "children": [
                                                              {
                                                                  "id": "89",
                                                                  "label": "2 1 1 1 1 1 1 1",
                                                                  "children": [
                                                                      {
                                                                          "id": "92",
                                                                          "label": "2 1 1 1 1 1 1 1 1",
                                                                          "children": [],
                                                                      }
                                                                  ],
                                                              }
                                                          ],
                                                      }
                                                  ],
                                              }
                                          ],
                                      }
                                  ],
                              }
                          ],
                      }
                  ],
              }
          ],
      },
      {
          "id": "95",
          "label": "3",
          "children": [
              {
                  "id": "98",
                  "label": "3 1",
                  "children": [],
              },
              {
                  "id": "103",
                  "label": "3 2",
                  "children": [],
              }
          ],
      }
  ];

    const [expandedItemIds, setExpandedItemIds] = useState<string[]>(
        []
    );

    const onExpandedItemsChange = (
        event: SyntheticEvent<Element, Event>,
        itemIds: string[]
    ) => {
        setExpandedItemIds(itemIds);
    };

    return (
    <div className="App">
      <RichTreeView
          id="RichTreeViewKeyboardNavigationTest"
          disabledItemsFocusable
          onExpandedItemsChange={onExpandedItemsChange}
          expandedItems={expandedItemIds}
          items={items}
      />
    </div>
  );
}

export default App;
